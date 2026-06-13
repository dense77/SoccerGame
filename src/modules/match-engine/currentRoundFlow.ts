import { SaveRepository } from '../../data/repositories/SaveRepository'
import { SetupRepository } from '../../data/repositories/SetupRepository'
import { TeamRepository } from '../../data/repositories/TeamRepository'
import { TournamentRepository } from '../../data/repositories/TournamentRepository'
import type { SQLiteDatabaseClient } from '../../data/db/sqlite'
import type {
  CurrentRoundEventSelections,
  CurrentRoundPreview,
  ManagedPlayer,
  MatchEventModifier,
  MatchEventSelection,
  MatchFixture,
  MatchSetupOverview,
  MatchSimulationInput,
  MatchSnapshot,
  SaveMatchSetup,
  SavePlayerState,
  SaveTeamState,
  TacticProfile,
  Formation,
  Team,
} from '../../types/entities'
import { loadMatchEventSelection } from '../event-system/loadMatchEventSelection'
import { loadMatchSetupOverview } from '../team-management/loadMatchSetupOverview'
import { resolveGroupAdvancement } from '../tournament/resolveGroupAdvancement'
import { resolveKnockoutFixtures } from '../tournament/resolveKnockoutFixtures'
import { buildPostMatchReport } from './buildPostMatchReport'
import { simulateMatch } from './simulateMatch'

interface FixtureRoundContext {
  fixture: MatchFixture
  homeTeam: Team
  awayTeam: Team
  homeFormation: Formation
  awayFormation: Formation
  homeTactic: TacticProfile
  awayTactic: TacticProfile
  homePlayers: ManagedPlayer[]
  awayPlayers: ManagedPlayer[]
  selectedTeamIsHome: boolean
  selectedTeamIsAway: boolean
  selectedTeamPlayers: ManagedPlayer[] | null
}

interface CurrentRoundPendingContext {
  saveSlotId: string
  selectedTeam: Team
  selectedMatchSetup: MatchSetupOverview
  fixtures: MatchFixture[]
  teamStates: Map<string, SaveTeamState>
}

interface CurrentRoundSimulation {
  context: CurrentRoundPendingContext
  snapshots: MatchSnapshot[]
}

function isResolvedEventSelection(
  eventSelection: MatchEventSelection | null,
): eventSelection is MatchEventSelection & { resolvedModifier: MatchEventModifier; selectedOptionId: string } {
  return Boolean(eventSelection?.selectedOptionId && eventSelection.resolvedModifier)
}

function findFixtureSetup(
  saveSetup: SaveMatchSetup | null,
  saveSlotId: string,
  fixtureId: string,
  teamId: string,
  defaultFormationId: string,
  defaultTacticId: string,
  rosterIds: string[],
): SaveMatchSetup {
  if (saveSetup) {
    return saveSetup
  }

  return {
    id: `${saveSlotId}-${fixtureId}-${teamId}`,
    saveSlotId,
    fixtureId,
    teamId,
    formationId: defaultFormationId,
    tacticProfileId: defaultTacticId,
    startingPlayerIds: rosterIds.slice(0, 11),
    benchPlayerIds: rosterIds.slice(11),
  }
}

function toManagedPlayers(
  roster: ReturnType<TeamRepository['getPlayersByTeamId']>,
  states: SavePlayerState[],
  starterIds: string[],
): ManagedPlayer[] {
  const stateByPlayerId = new Map(states.map((state) => [state.playerId, state]))
  const starterIdSet = new Set(starterIds)

  return roster.map((player) => {
    const state = stateByPlayerId.get(player.id)

    if (!state) {
      throw new Error(`Missing player state for player ${player.id}`)
    }

    return {
      player,
      state,
      isStarter: starterIdSet.has(player.id),
    }
  })
}

function buildTeamMetrics(
  previous: SaveTeamState,
  goalsFor: number,
  goalsAgainst: number,
): Pick<
  SaveTeamState,
  'groupPoints' | 'goalFor' | 'goalAgainst' | 'goalDiff' | 'wins' | 'draws' | 'losses'
> {
  const win = goalsFor > goalsAgainst ? 1 : 0
  const draw = goalsFor === goalsAgainst ? 1 : 0
  const loss = goalsFor < goalsAgainst ? 1 : 0

  return {
    groupPoints: previous.groupPoints + (win === 1 ? 3 : draw === 1 ? 1 : 0),
    goalFor: previous.goalFor + goalsFor,
    goalAgainst: previous.goalAgainst + goalsAgainst,
    goalDiff: previous.goalDiff + (goalsFor - goalsAgainst),
    wins: previous.wins + win,
    draws: previous.draws + draw,
    losses: previous.losses + loss,
  }
}

function resolveKnockoutWinner(
  fixture: MatchSnapshot,
  selectedTeamId: string,
): 'selected' | 'opponent' {
  const selectedTeamIsHome = fixture.homeTeamId === selectedTeamId
  const selectedScore = selectedTeamIsHome ? fixture.homeScore : fixture.awayScore
  const opponentScore = selectedTeamIsHome ? fixture.awayScore : fixture.homeScore

  if (selectedScore >= opponentScore) {
    return 'selected'
  }

  return 'opponent'
}

function didSelectedTeamWinSnapshot(
  fixture: MatchSnapshot,
  selectedTeamId: string,
): boolean {
  return resolveKnockoutWinner(fixture, selectedTeamId) === 'selected'
}

function updateSelectedTeamPlayerStates(
  players: ManagedPlayer[],
  goalDifference: number,
  postMatchModifier: MatchEventModifier | null,
): SavePlayerState[] {
  return players.map((entry) => {
    const minutes = entry.isStarter ? 90 : 0
    const fitnessDrop = entry.isStarter ? 18 : 4
    const moraleShift = goalDifference > 0 ? 4 : goalDifference < 0 ? -4 : 1

    return {
      ...entry.state,
      playerId: entry.player.id,
      fitnessValue: Math.min(
        Math.max(entry.state.fitnessValue - fitnessDrop + (postMatchModifier?.fitnessDelta ?? 0), 35),
        100,
      ),
      moraleValue: Math.min(
        Math.max(entry.state.moraleValue + moraleShift + (postMatchModifier?.moraleDelta ?? 0), 40),
        95,
      ),
      lastMatchMinutes: minutes,
      statusTag: entry.state.statusTag,
    }
  })
}

function buildCombinedModifier(
  selections: MatchEventSelection[],
): MatchEventModifier {
  return selections
    .filter(isResolvedEventSelection)
    .map((eventSelection) => eventSelection.resolvedModifier)
    .reduce(
      (combined, modifier) => ({
        attackDelta: combined.attackDelta + modifier.attackDelta,
        defenseDelta: combined.defenseDelta + modifier.defenseDelta,
        moraleDelta: combined.moraleDelta + modifier.moraleDelta,
        fitnessDelta: combined.fitnessDelta + modifier.fitnessDelta,
        contextTags: [...combined.contextTags, ...modifier.contextTags],
      }),
      {
        attackDelta: 0,
        defenseDelta: 0,
        moraleDelta: 0,
        fitnessDelta: 0,
        contextTags: [] as string[],
      },
    )
}

function buildFixtureRoundContext(
  client: SQLiteDatabaseClient,
  saveSlotId: string,
  selectedTeam: Team,
  selectedMatchSetup: MatchSetupOverview,
  fixture: MatchFixture,
): FixtureRoundContext {
  if (!fixture.homeTeamId || !fixture.awayTeamId) {
    throw new Error(`Fixture ${fixture.id} is missing team assignments.`)
  }

  const saveRepository = new SaveRepository(client)
  const teamRepository = new TeamRepository(client)
  const setupRepository = new SetupRepository(client)
  const homeTeam = teamRepository.getTeamById(fixture.homeTeamId)
  const awayTeam = teamRepository.getTeamById(fixture.awayTeamId)

  if (!homeTeam || !awayTeam) {
    throw new Error(`Fixture ${fixture.id} references missing teams.`)
  }

  const homeRoster = teamRepository.getPlayersByTeamId(homeTeam.id)
  const awayRoster = teamRepository.getPlayersByTeamId(awayTeam.id)
  const homeStates = saveRepository.getPlayerStatesByTeamId(saveSlotId, homeTeam.id)
  const awayStates = saveRepository.getPlayerStatesByTeamId(saveSlotId, awayTeam.id)
  const homeDefaultTactic = setupRepository.getDefaultTacticProfileByTeamId(homeTeam.id)
  const awayDefaultTactic = setupRepository.getDefaultTacticProfileByTeamId(awayTeam.id)

  if (!homeDefaultTactic || !awayDefaultTactic) {
    throw new Error(`Fixture ${fixture.id} is missing team tactic configuration.`)
  }

  const homeSetup =
    homeTeam.id === selectedTeam.id
      ? saveRepository.getMatchSetup(saveSlotId, fixture.id) ?? {
          id: `${saveSlotId}-${fixture.id}-${homeTeam.id}`,
          saveSlotId,
          fixtureId: fixture.id,
          teamId: homeTeam.id,
          formationId: selectedMatchSetup.selectedFormation.id,
          tacticProfileId: selectedMatchSetup.selectedTactic.id,
          startingPlayerIds: selectedMatchSetup.players
            .filter((entry) => entry.isStarter)
            .map((entry) => entry.player.id),
          benchPlayerIds: selectedMatchSetup.players
            .filter((entry) => !entry.isStarter)
            .map((entry) => entry.player.id),
        }
      : findFixtureSetup(
          saveRepository.getMatchSetup(saveSlotId, fixture.id),
          saveSlotId,
          fixture.id,
          homeTeam.id,
          homeTeam.defaultFormationId,
          homeDefaultTactic.id,
          homeRoster.map((player) => player.id),
        )

  const awaySetup =
    awayTeam.id === selectedTeam.id
      ? saveRepository.getMatchSetup(saveSlotId, fixture.id) ?? {
          id: `${saveSlotId}-${fixture.id}-${awayTeam.id}`,
          saveSlotId,
          fixtureId: fixture.id,
          teamId: awayTeam.id,
          formationId: selectedMatchSetup.selectedFormation.id,
          tacticProfileId: selectedMatchSetup.selectedTactic.id,
          startingPlayerIds: selectedMatchSetup.players
            .filter((entry) => entry.isStarter)
            .map((entry) => entry.player.id),
          benchPlayerIds: selectedMatchSetup.players
            .filter((entry) => !entry.isStarter)
            .map((entry) => entry.player.id),
        }
      : findFixtureSetup(
          saveRepository.getMatchSetup(saveSlotId, fixture.id),
          saveSlotId,
          fixture.id,
          awayTeam.id,
          awayTeam.defaultFormationId,
          awayDefaultTactic.id,
          awayRoster.map((player) => player.id),
        )

  const homeFormation = setupRepository.getFormationById(homeSetup.formationId)
  const awayFormation = setupRepository.getFormationById(awaySetup.formationId)
  const homeTactic =
    setupRepository
      .getTacticProfilesByTeamId(homeTeam.id)
      .find((tactic) => tactic.id === homeSetup.tacticProfileId) ?? homeDefaultTactic
  const awayTactic =
    setupRepository
      .getTacticProfilesByTeamId(awayTeam.id)
      .find((tactic) => tactic.id === awaySetup.tacticProfileId) ?? awayDefaultTactic

  if (!homeFormation || !awayFormation) {
    throw new Error(`Fixture ${fixture.id} is missing formation configuration.`)
  }

  const homePlayers = toManagedPlayers(homeRoster, homeStates, homeSetup.startingPlayerIds)
  const awayPlayers = toManagedPlayers(awayRoster, awayStates, awaySetup.startingPlayerIds)
  const selectedTeamIsHome = selectedTeam.id === homeTeam.id
  const selectedTeamIsAway = selectedTeam.id === awayTeam.id

  return {
    fixture,
    homeTeam,
    awayTeam,
    homeFormation,
    awayFormation,
    homeTactic,
    awayTactic,
    homePlayers,
    awayPlayers,
    selectedTeamIsHome,
    selectedTeamIsAway,
    selectedTeamPlayers: selectedTeamIsHome ? homePlayers : selectedTeamIsAway ? awayPlayers : null,
  }
}

function resolveCurrentRoundContext(
  client: SQLiteDatabaseClient,
  saveSlotId: string,
): CurrentRoundPendingContext {
  const saveRepository = new SaveRepository(client)
  const teamRepository = new TeamRepository(client)
  const tournamentRepository = new TournamentRepository(client)
  const saveSlot = saveRepository.getSaveSlotById(saveSlotId)

  if (!saveSlot) {
    throw new Error(`Save slot was not found: ${saveSlotId}`)
  }

  const selectedTeam = teamRepository.getTeamById(saveSlot.selectedTeamId)
  if (!selectedTeam) {
    throw new Error(`Selected team was not found for save slot: ${saveSlotId}`)
  }

  const fixtures =
    saveSlot.currentStage === 'knockout'
      ? resolveKnockoutFixtures(client, saveSlot.id, saveSlot.currentRoundCode)
      : tournamentRepository.getFixturesByRoundCode(saveSlot.currentRoundCode)
  const teamStates = new Map(
    saveRepository
      .getTeamStatesBySaveSlotId(saveSlot.id)
      .map((state) => [state.teamId, state]),
  )
  const selectedMatchSetup = loadMatchSetupOverview(client, saveSlot.id)

  return {
    saveSlotId: saveSlot.id,
    selectedTeam,
    selectedMatchSetup,
    fixtures,
    teamStates,
  }
}

function simulateCurrentRound(
  client: SQLiteDatabaseClient,
  context: CurrentRoundPendingContext,
  selections: CurrentRoundEventSelections,
): CurrentRoundSimulation {
  if (!isResolvedEventSelection(selections.preMatchEvent)) {
    throw new Error('必须先完成赛前事件选择，才能进入下一步。')
  }

  const inMatchModifier = selections.inMatchEvent && isResolvedEventSelection(selections.inMatchEvent)
    ? buildCombinedModifier([selections.preMatchEvent, selections.inMatchEvent])
    : buildCombinedModifier([selections.preMatchEvent])
  const snapshots = context.fixtures.map((fixture) => {
    const fixtureContext = buildFixtureRoundContext(
      client,
      context.saveSlotId,
      context.selectedTeam,
      context.selectedMatchSetup,
      fixture,
    )
    const input: MatchSimulationInput = {
      saveSlotId: context.saveSlotId,
      fixture,
      home: {
        team: fixtureContext.homeTeam,
        formation: fixtureContext.homeFormation,
        tactic: fixtureContext.homeTactic,
        starters: fixtureContext.homePlayers.filter((entry) => entry.isStarter),
        bench: fixtureContext.homePlayers.filter((entry) => !entry.isStarter),
        selectedEventModifier: fixtureContext.selectedTeamIsHome ? inMatchModifier : null,
      },
      away: {
        team: fixtureContext.awayTeam,
        formation: fixtureContext.awayFormation,
        tactic: fixtureContext.awayTactic,
        starters: fixtureContext.awayPlayers.filter((entry) => entry.isStarter),
        bench: fixtureContext.awayPlayers.filter((entry) => !entry.isStarter),
        selectedEventModifier: fixtureContext.selectedTeamIsAway ? inMatchModifier : null,
      },
    }
    const result = simulateMatch(input)

    return {
      id: `${context.saveSlotId}-${fixture.id}`,
      saveSlotId: context.saveSlotId,
      fixtureId: fixture.id,
      stage: fixture.stage,
      homeTeamId: fixture.homeTeamId!,
      awayTeamId: fixture.awayTeamId!,
      homeScore: result.homeScore,
      awayScore: result.awayScore,
      resultSummary: {
        ...result.resultSummary,
        roundCode: fixture.roundCode,
        knockoutSlot: fixture.knockoutSlot,
      },
      appliedModifiers: result.appliedModifiers,
      completedAt: '',
    } satisfies MatchSnapshot
  })

  return {
    context,
    snapshots,
  }
}

function findSelectedTeamSnapshot(
  snapshots: MatchSnapshot[],
  selectedTeamId: string,
): MatchSnapshot {
  const snapshot = snapshots.find(
    (entry) => entry.homeTeamId === selectedTeamId || entry.awayTeamId === selectedTeamId,
  )

  if (!snapshot) {
    throw new Error('当前轮次未找到所选球队对应的比赛结果。')
  }

  return snapshot
}

function buildCurrentRoundPreview(
  snapshots: MatchSnapshot[],
  selectedTeamId: string,
  selectedTeamName: string,
  teamNameById: (teamId: string) => string,
): CurrentRoundPreview {
  const selectedSnapshot = findSelectedTeamSnapshot(snapshots, selectedTeamId)
  const selectedTeamIsHome = selectedSnapshot.homeTeamId === selectedTeamId
  const selectedScore = selectedTeamIsHome ? selectedSnapshot.homeScore : selectedSnapshot.awayScore
  const opponentScore = selectedTeamIsHome ? selectedSnapshot.awayScore : selectedSnapshot.homeScore
  const opponentTeamId = selectedTeamIsHome ? selectedSnapshot.awayTeamId : selectedSnapshot.homeTeamId
  const resultLabel =
    selectedScore > opponentScore ? 'win' : selectedScore < opponentScore ? 'loss' : 'draw'

  return {
    fixtureId: selectedSnapshot.fixtureId,
    stage: selectedSnapshot.stage,
    roundCode:
      typeof selectedSnapshot.resultSummary.roundCode === 'string'
        ? selectedSnapshot.resultSummary.roundCode
        : selectedSnapshot.fixtureId,
    teamId: selectedTeamId,
    teamName: selectedTeamName,
    opponentTeamName: teamNameById(opponentTeamId),
    scoreline: `${selectedScore}-${opponentScore}`,
    resultLabel,
  }
}

export function prepareCurrentRound(
  client: SQLiteDatabaseClient,
  saveSlotId: string,
  preMatchEvent: MatchEventSelection | null,
): {
  preview: CurrentRoundPreview
  eventSelections: CurrentRoundEventSelections
  snapshots: MatchSnapshot[]
} {
  const context = resolveCurrentRoundContext(client, saveSlotId)

  if (!isResolvedEventSelection(preMatchEvent)) {
    throw new Error('必须先完成赛前事件选择，才能进入下一步。')
  }

  const inMatchEvent = loadMatchEventSelection(
    client,
    context.selectedMatchSetup,
    'in-match',
  )
  const firstSimulation = simulateCurrentRound(client, context, {
    preMatchEvent,
    inMatchEvent: null,
    postMatchEvent: null,
  })
  const teamRepository = new TeamRepository(client)
  const preview = buildCurrentRoundPreview(
    firstSimulation.snapshots,
    context.selectedTeam.id,
    context.selectedTeam.shortName,
    (teamId) => teamRepository.getTeamById(teamId)?.shortName ?? teamId,
  )
  const postMatchEvent = loadMatchEventSelection(
    client,
    context.selectedMatchSetup,
    'post-match',
  )

  return {
    preview,
    eventSelections: {
      preMatchEvent,
      inMatchEvent,
      postMatchEvent,
    },
    snapshots: firstSimulation.snapshots,
  }
}

export function previewCurrentRound(
  client: SQLiteDatabaseClient,
  saveSlotId: string,
  selections: CurrentRoundEventSelections,
): CurrentRoundPreview {
  const context = resolveCurrentRoundContext(client, saveSlotId)
  const simulation = simulateCurrentRound(client, context, selections)
  const teamRepository = new TeamRepository(client)

  return buildCurrentRoundPreview(
    simulation.snapshots,
    context.selectedTeam.id,
    context.selectedTeam.shortName,
    (teamId) => teamRepository.getTeamById(teamId)?.shortName ?? teamId,
  )
}

export function finalizeCurrentRound(
  client: SQLiteDatabaseClient,
  saveSlotId: string,
  selections: CurrentRoundEventSelections,
): MatchSnapshot[] {
  const context = resolveCurrentRoundContext(client, saveSlotId)

  if (!isResolvedEventSelection(selections.preMatchEvent)) {
    throw new Error('必须先完成赛前事件选择，才能进入下一步。')
  }

  if (selections.inMatchEvent && !isResolvedEventSelection(selections.inMatchEvent)) {
    throw new Error('必须先完成赛中事件选择，才能进入下一步。')
  }

  if (selections.postMatchEvent && !isResolvedEventSelection(selections.postMatchEvent)) {
    throw new Error('必须先完成赛后事件选择，才能进入下一步。')
  }

  const saveRepository = new SaveRepository(client)
  const tournamentRepository = new TournamentRepository(client)
  const simulation = simulateCurrentRound(client, context, selections)
  const resolvedSelections = [
    selections.preMatchEvent,
    selections.inMatchEvent,
    selections.postMatchEvent,
  ].filter(isResolvedEventSelection)

  simulation.snapshots.forEach((snapshot) => {
    const fixtureContext = buildFixtureRoundContext(
      client,
      context.saveSlotId,
      context.selectedTeam,
      context.selectedMatchSetup,
      context.fixtures.find((fixture) => fixture.id === snapshot.fixtureId)!,
    )
    const homeState = context.teamStates.get(snapshot.homeTeamId)
    const awayState = context.teamStates.get(snapshot.awayTeamId)

    if (!homeState || !awayState) {
      throw new Error(`Fixture ${snapshot.fixtureId} is missing team tournament state.`)
    }

    const completedAt = new Date().toISOString()
    const postMatchModifier = selections.postMatchEvent?.resolvedModifier ?? null
    const selectedTeamNextStates = fixtureContext.selectedTeamPlayers
      ? updateSelectedTeamPlayerStates(
          fixtureContext.selectedTeamPlayers,
          fixtureContext.selectedTeamIsHome
            ? snapshot.homeScore - snapshot.awayScore
            : snapshot.awayScore - snapshot.homeScore,
          postMatchModifier,
        )
      : null
    const selectedTeamPostMatchReport =
      fixtureContext.selectedTeamPlayers && selectedTeamNextStates
        ? buildPostMatchReport({
            snapshot: {
              ...snapshot,
              completedAt,
            },
            selectedTeamId: context.selectedTeam.id,
            selectedTeamName: context.selectedTeam.shortName,
            opponentTeamName:
              fixtureContext.selectedTeamIsHome
                ? fixtureContext.awayTeam.shortName
                : fixtureContext.homeTeam.shortName,
            players: fixtureContext.selectedTeamPlayers,
            nextPlayerStates: selectedTeamNextStates,
            selectedEvents: resolvedSelections,
          })
        : null
    const finalizedSnapshot: MatchSnapshot = {
      ...snapshot,
      completedAt,
      resultSummary: {
        ...snapshot.resultSummary,
        postMatchReport: selectedTeamPostMatchReport,
      },
    }

    saveRepository.createMatchSnapshot(finalizedSnapshot)

    resolvedSelections.forEach((eventSelection, index) => {
      saveRepository.createMatchEventLog({
        id: `${finalizedSnapshot.id}-${eventSelection.template.id}-${eventSelection.selectedOptionId}`,
        matchSnapshotId: finalizedSnapshot.id,
        eventTemplateId: eventSelection.template.id,
        optionId: eventSelection.selectedOptionId,
        phase: eventSelection.template.triggerPhase,
        sequenceNo: index + 1,
        resolvedEffect: eventSelection.resolvedModifier,
      })
    })

    if (snapshot.stage === 'group') {
      saveRepository.updateTeamStateMetrics(
        context.saveSlotId,
        snapshot.homeTeamId,
        buildTeamMetrics(homeState, snapshot.homeScore, snapshot.awayScore),
      )
      saveRepository.updateTeamStateMetrics(
        context.saveSlotId,
        snapshot.awayTeamId,
        buildTeamMetrics(awayState, snapshot.awayScore, snapshot.homeScore),
      )
    }

    if (selectedTeamNextStates) {
      selectedTeamNextStates.forEach((nextState) => {
        saveRepository.updatePlayerStateMetrics(context.saveSlotId, nextState.playerId, nextState)
      })
    }
  })

  const saveSlot = saveRepository.getSaveSlotById(context.saveSlotId)
  if (!saveSlot) {
    throw new Error(`Save slot was not found: ${context.saveSlotId}`)
  }

  const roundCodes = tournamentRepository.getRoundCodesByStage(saveSlot.currentStage)
  const currentRoundIndex = roundCodes.findIndex((roundCode) => roundCode === saveSlot.currentRoundCode)
  const nextRoundCode = roundCodes[currentRoundIndex + 1]

  if (nextRoundCode) {
    if (saveSlot.currentStage === 'knockout') {
      const selectedTeamSnapshot = findSelectedTeamSnapshot(simulation.snapshots, saveSlot.selectedTeamId)

      if (!didSelectedTeamWinSnapshot(selectedTeamSnapshot, saveSlot.selectedTeamId)) {
        saveRepository.updateSaveSlotProgress(
          saveSlot.id,
          'knockout',
          'tournament-complete',
          'eliminated',
        )
      } else {
        saveRepository.updateSaveSlotProgress(saveSlot.id, saveSlot.currentStage, nextRoundCode, 'active')
      }
    } else {
      saveRepository.updateSaveSlotProgress(saveSlot.id, saveSlot.currentStage, nextRoundCode, 'active')
    }
  } else if (saveSlot.currentStage === 'group') {
    const advancement = resolveGroupAdvancement(client, saveSlot.id)

    if (advancement.selectedTeamOutcome === 'qualified') {
      saveRepository.updateSaveSlotProgress(saveSlot.id, 'knockout', 'knockout-semi', 'active')
    } else {
      saveRepository.updateSaveSlotProgress(saveSlot.id, 'group', 'group-complete', 'eliminated')
    }
  } else {
    const finalSnapshot = simulation.snapshots[simulation.snapshots.length - 1]

    if (!finalSnapshot) {
      throw new Error('Knockout resolution expected a final snapshot.')
    }

    const winner = resolveKnockoutWinner(finalSnapshot, saveSlot.selectedTeamId)
    saveRepository.updateSaveSlotProgress(
      saveSlot.id,
      'knockout',
      'tournament-complete',
      winner === 'selected' ? 'champion' : 'eliminated',
    )
  }

  return simulation.snapshots
}

export function resolveEventSelectionForPhase(
  client: SQLiteDatabaseClient,
  setup: MatchSetupOverview,
  phaseGroup: MatchEventSelection['phaseGroup'],
  optionId: string,
): MatchEventSelection | null {
  return loadMatchEventSelection(client, setup, phaseGroup, optionId)
}
