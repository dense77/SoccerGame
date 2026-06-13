import { SaveRepository } from '../../data/repositories/SaveRepository'
import { SetupRepository } from '../../data/repositories/SetupRepository'
import { TeamRepository } from '../../data/repositories/TeamRepository'
import { TournamentRepository } from '../../data/repositories/TournamentRepository'
import type { SQLiteDatabaseClient } from '../../data/db/sqlite'
import type {
  ManagedPlayer,
  MatchEventModifier,
  MatchEventSelection,
  MatchSimulationInput,
  MatchEventLog,
  MatchSnapshot,
  SaveMatchSetup,
  SavePlayerState,
  SaveTeamState,
} from '../../types/entities'
import { loadMatchEventSelection } from '../event-system/loadMatchEventSelection'
import { loadMatchSetupOverview } from '../team-management/loadMatchSetupOverview'
import { resolveGroupAdvancement } from '../tournament/resolveGroupAdvancement'
import { resolveKnockoutFixtures } from '../tournament/resolveKnockoutFixtures'
import { buildPostMatchReport } from './buildPostMatchReport'
import { simulateMatch } from './simulateMatch'

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
): SavePlayerState[] {
  return players.map((entry) => {
    const minutes = entry.isStarter ? 90 : 0
    const fitnessDrop = entry.isStarter ? 18 : 4
    const moraleShift = goalDifference > 0 ? 4 : goalDifference < 0 ? -4 : 1

    return {
      ...entry.state,
      playerId: entry.player.id,
      fitnessValue: Math.max(entry.state.fitnessValue - fitnessDrop, 35),
      moraleValue: Math.min(Math.max(entry.state.moraleValue + moraleShift, 40), 95),
      lastMatchMinutes: minutes,
      statusTag: entry.state.statusTag,
    }
  })
}

export function playCurrentRound(
  client: SQLiteDatabaseClient,
  saveSlotId: string,
  selectedEvent: MatchEventSelection | null = null,
): MatchSnapshot[] {
  const saveRepository = new SaveRepository(client)
  const teamRepository = new TeamRepository(client)
  const tournamentRepository = new TournamentRepository(client)
  const setupRepository = new SetupRepository(client)
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
  if (!selectedEvent?.selectedOptionId || !selectedEvent.resolvedModifier) {
    throw new Error('必须先完成赛前事件选择，才能进入下一步。')
  }
  const snapshots: MatchSnapshot[] = []

  fixtures.forEach((fixture) => {
    if (!fixture.homeTeamId || !fixture.awayTeamId) {
      throw new Error(`Fixture ${fixture.id} is missing team assignments.`)
    }

    const homeTeam = teamRepository.getTeamById(fixture.homeTeamId)
    const awayTeam = teamRepository.getTeamById(fixture.awayTeamId)

    if (!homeTeam || !awayTeam) {
      throw new Error(`Fixture ${fixture.id} references missing teams.`)
    }

    const homeRoster = teamRepository.getPlayersByTeamId(homeTeam.id)
    const awayRoster = teamRepository.getPlayersByTeamId(awayTeam.id)
    const homeStates = saveRepository.getPlayerStatesByTeamId(saveSlot.id, homeTeam.id)
    const awayStates = saveRepository.getPlayerStatesByTeamId(saveSlot.id, awayTeam.id)
    const homeDefaultTactic = setupRepository.getDefaultTacticProfileByTeamId(homeTeam.id)
    const awayDefaultTactic = setupRepository.getDefaultTacticProfileByTeamId(awayTeam.id)
    const homeSetup =
      homeTeam.id === selectedTeam.id
        ? saveRepository.getMatchSetup(saveSlot.id, fixture.id) ?? {
            id: `${saveSlot.id}-${fixture.id}-${homeTeam.id}`,
            saveSlotId: saveSlot.id,
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
            saveRepository.getMatchSetup(saveSlot.id, fixture.id),
            saveSlot.id,
            fixture.id,
            homeTeam.id,
            homeTeam.defaultFormationId,
            homeDefaultTactic?.id ?? '',
            homeRoster.map((player) => player.id),
          )

    const awaySetup =
      awayTeam.id === selectedTeam.id
        ? saveRepository.getMatchSetup(saveSlot.id, fixture.id) ?? {
            id: `${saveSlot.id}-${fixture.id}-${awayTeam.id}`,
            saveSlotId: saveSlot.id,
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
            saveRepository.getMatchSetup(saveSlot.id, fixture.id),
            saveSlot.id,
            fixture.id,
            awayTeam.id,
            awayTeam.defaultFormationId,
            awayDefaultTactic?.id ?? '',
            awayRoster.map((player) => player.id),
          )

    if (!homeDefaultTactic || !awayDefaultTactic) {
      throw new Error(`Fixture ${fixture.id} is missing team tactic configuration.`)
    }

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
    const selectedTeamSetup =
      selectedTeam.id === homeTeam.id
        ? {
            ...selectedMatchSetup,
            fixture,
            team: homeTeam,
            players: homePlayers,
            selectedFormation: homeFormation,
            selectedTactic: homeTactic,
          }
        : {
            ...selectedMatchSetup,
            fixture,
            team: awayTeam,
            players: awayPlayers,
            selectedFormation: awayFormation,
            selectedTactic: awayTactic,
          }
    const inMatchEvent =
      selectedTeam.id === homeTeam.id || selectedTeam.id === awayTeam.id
        ? loadMatchEventSelection(client, selectedTeamSetup, 'in-match')
        : null
    const postMatchEvent =
      selectedTeam.id === homeTeam.id || selectedTeam.id === awayTeam.id
        ? loadMatchEventSelection(client, selectedTeamSetup, 'post-match')
        : null
    const selectedEventModifiers = [selectedEvent, inMatchEvent, postMatchEvent]
      .filter(isResolvedEventSelection)
      .map((eventSelection) => eventSelection.resolvedModifier)
    const combinedModifier = selectedEventModifiers.reduce(
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

    const input: MatchSimulationInput = {
      saveSlotId: saveSlot.id,
      fixture,
      home: {
        team: homeTeam,
        formation: homeFormation,
        tactic: homeTactic,
        starters: homePlayers.filter((entry) => entry.isStarter),
        bench: homePlayers.filter((entry) => !entry.isStarter),
        selectedEventModifier:
          selectedTeam.id === homeTeam.id ? combinedModifier : null,
      },
      away: {
        team: awayTeam,
        formation: awayFormation,
        tactic: awayTactic,
        starters: awayPlayers.filter((entry) => entry.isStarter),
        bench: awayPlayers.filter((entry) => !entry.isStarter),
        selectedEventModifier:
          selectedTeam.id === awayTeam.id ? combinedModifier : null,
      },
    }

    const result = simulateMatch(input)
    const completedAt = new Date().toISOString()
    const selectedTeamIsHome = selectedTeam.id === homeTeam.id
    const selectedTeamIsAway = selectedTeam.id === awayTeam.id
    const selectedTeamPlayers = selectedTeamIsHome ? homePlayers : selectedTeamIsAway ? awayPlayers : null
    const selectedTeamNextStates = selectedTeamPlayers
      ? updateSelectedTeamPlayerStates(
          selectedTeamPlayers,
          selectedTeamIsHome
            ? result.homeScore - result.awayScore
            : result.awayScore - result.homeScore,
        )
      : null
    const selectedTeamPostMatchReport =
      selectedTeamPlayers && selectedTeamNextStates
        ? buildPostMatchReport({
            snapshot: {
              id: `${saveSlot.id}-${fixture.id}`,
              saveSlotId: saveSlot.id,
              fixtureId: fixture.id,
              stage: fixture.stage,
              homeTeamId: fixture.homeTeamId,
              awayTeamId: fixture.awayTeamId,
              homeScore: result.homeScore,
              awayScore: result.awayScore,
              resultSummary: {
                ...result.resultSummary,
                roundCode: fixture.roundCode,
                knockoutSlot: fixture.knockoutSlot,
              },
              appliedModifiers: result.appliedModifiers,
              completedAt: '',
            },
            selectedTeamId: selectedTeam.id,
            selectedTeamName: selectedTeam.shortName,
            opponentTeamName: selectedTeamIsHome ? awayTeam.shortName : homeTeam.shortName,
            players: selectedTeamPlayers,
            nextPlayerStates: selectedTeamNextStates,
              selectedEvents:
              selectedTeamIsHome || selectedTeamIsAway
                ? [selectedEvent, inMatchEvent, postMatchEvent].filter(isResolvedEventSelection)
                : [],
          })
        : null
    const snapshot: MatchSnapshot = {
      id: `${saveSlot.id}-${fixture.id}`,
      saveSlotId: saveSlot.id,
      fixtureId: fixture.id,
      stage: fixture.stage,
      homeTeamId: fixture.homeTeamId,
      awayTeamId: fixture.awayTeamId,
      homeScore: result.homeScore,
      awayScore: result.awayScore,
      resultSummary: {
        ...result.resultSummary,
        roundCode: fixture.roundCode,
        knockoutSlot: fixture.knockoutSlot,
        postMatchReport: selectedTeamPostMatchReport,
      },
      appliedModifiers: result.appliedModifiers,
      completedAt,
    }

    saveRepository.createMatchSnapshot(snapshot)

    ;[selectedEvent, inMatchEvent, postMatchEvent]
      .filter(isResolvedEventSelection)
      .forEach((eventSelection, index) => {
        const eventLog: MatchEventLog = {
          id: `${snapshot.id}-${eventSelection.template.id}-${eventSelection.selectedOptionId}`,
          matchSnapshotId: snapshot.id,
          eventTemplateId: eventSelection.template.id,
          optionId: eventSelection.selectedOptionId ?? eventSelection.template.id,
          phase: eventSelection.template.triggerPhase,
          sequenceNo: index + 1,
          resolvedEffect: eventSelection.resolvedModifier!,
        }

        saveRepository.createMatchEventLog(eventLog)
      })

    const homeState = teamStates.get(homeTeam.id)
    const awayState = teamStates.get(awayTeam.id)

    if (!homeState || !awayState) {
      throw new Error(`Fixture ${fixture.id} is missing team tournament state.`)
    }

    if (fixture.stage === 'group') {
      const nextHomeMetrics = buildTeamMetrics(homeState, result.homeScore, result.awayScore)
      const nextAwayMetrics = buildTeamMetrics(awayState, result.awayScore, result.homeScore)
      saveRepository.updateTeamStateMetrics(saveSlot.id, homeTeam.id, nextHomeMetrics)
      saveRepository.updateTeamStateMetrics(saveSlot.id, awayTeam.id, nextAwayMetrics)
    }

    if (selectedTeamIsHome && selectedTeamNextStates) {
      selectedTeamNextStates.forEach((nextState) => {
        saveRepository.updatePlayerStateMetrics(saveSlot.id, nextState.playerId, nextState)
      })
    }

    if (selectedTeamIsAway && selectedTeamNextStates) {
      selectedTeamNextStates.forEach((nextState) => {
        saveRepository.updatePlayerStateMetrics(saveSlot.id, nextState.playerId, nextState)
      })
    }

    snapshots.push(snapshot)
  })

  const roundCodes = tournamentRepository.getRoundCodesByStage(saveSlot.currentStage)
  const currentRoundIndex = roundCodes.findIndex((roundCode) => roundCode === saveSlot.currentRoundCode)
  const nextRoundCode = roundCodes[currentRoundIndex + 1]

  if (nextRoundCode) {
    if (saveSlot.currentStage === 'knockout') {
      const selectedTeamSnapshot = snapshots.find(
        (snapshot) =>
          snapshot.homeTeamId === saveSlot.selectedTeamId || snapshot.awayTeamId === saveSlot.selectedTeamId,
      )

      if (!selectedTeamSnapshot) {
        throw new Error('Selected team knockout fixture was not resolved for the current round.')
      }

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
  } else {
    if (saveSlot.currentStage === 'group') {
      const advancement = resolveGroupAdvancement(client, saveSlot.id)

      if (advancement.selectedTeamOutcome === 'qualified') {
        saveRepository.updateSaveSlotProgress(saveSlot.id, 'knockout', 'knockout-semi', 'active')
      } else {
        saveRepository.updateSaveSlotProgress(saveSlot.id, 'group', 'group-complete', 'eliminated')
      }
    } else {
      const finalSnapshot = snapshots[snapshots.length - 1]

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
  }

  return snapshots
}
