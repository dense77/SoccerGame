import { SaveRepository } from '../../data/repositories/SaveRepository'
import { TeamRepository } from '../../data/repositories/TeamRepository'
import { TournamentRepository } from '../../data/repositories/TournamentRepository'
import type { SQLiteDatabaseClient } from '../../data/db/sqlite'
import { EventRepository } from '../../data/repositories/EventRepository'
import type {
  MatchSnapshot,
  PostMatchReport,
  SaveOverview,
  TournamentSummary,
} from '../../types/entities'
import { buildGroupStandings } from '../tournament/buildGroupStandings'
import { resolveKnockoutFixtures } from '../tournament/resolveKnockoutFixtures'

function localizePostMatchReport(
  snapshot: MatchSnapshot,
  report: PostMatchReport,
  client: SQLiteDatabaseClient,
): PostMatchReport {
  const teamRepository = new TeamRepository(client)
  const eventRepository = new EventRepository(client)
  const currentPlayers = new Map(
    teamRepository
      .getAllTeams()
      .flatMap((team) => teamRepository.getPlayersByTeamId(team.id))
      .map((player) => [player.id, player.name] as const),
  )
  const currentTemplates = new Map(
    eventRepository.getAllTemplates().map((template) => [template.id, template]),
  )
  const currentOptions = new Map(
    [...currentTemplates.keys()].flatMap((templateId) =>
      eventRepository
        .getOptionsByTemplateId(templateId)
        .map((option) => [option.id, option.label] as const),
    ),
  )
  const selectedTeam = teamRepository.getTeamById(report.teamId)
  const opponentTeamId =
    snapshot.homeTeamId === report.teamId ? snapshot.awayTeamId : snapshot.homeTeamId
  const opponentTeam = teamRepository.getTeamById(opponentTeamId)
  const localizedPlayerChanges = report.playerChanges.map((change) => ({
    ...change,
    playerName: currentPlayers.get(change.playerId) ?? change.playerName,
  }))

  const localizeHistoricPlayerName = (historicName: string | null): string | null => {
    if (!historicName) {
      return null
    }

    const matchingPlayer = report.playerChanges.find((change) => change.playerName === historicName)
    return matchingPlayer
      ? currentPlayers.get(matchingPlayer.playerId) ?? historicName
      : historicName
  }

  return {
    ...report,
    teamName: selectedTeam?.shortName ?? report.teamName,
    opponentTeamName: opponentTeam?.shortName ?? report.opponentTeamName,
    playerChanges: localizedPlayerChanges,
    fitnessChangeSummary: {
      ...report.fitnessChangeSummary,
      mostAffectedPlayer: localizeHistoricPlayerName(report.fitnessChangeSummary.mostAffectedPlayer),
    },
    moraleChangeSummary: {
      ...report.moraleChangeSummary,
      mostBoostedPlayer: localizeHistoricPlayerName(report.moraleChangeSummary.mostBoostedPlayer),
      mostDroppedPlayer: localizeHistoricPlayerName(report.moraleChangeSummary.mostDroppedPlayer),
    },
    eventReport: report.eventReport
      ? {
          ...report.eventReport,
          title:
            currentTemplates.get(report.eventReport.templateId)?.title ?? report.eventReport.title,
          optionLabel: currentOptions.get(report.eventReport.optionId) ?? report.eventReport.optionLabel,
        }
      : null,
  }
}

function extractLatestPostMatchReport(
  client: SQLiteDatabaseClient,
  saveOverviewMatches: SaveOverview['completedMatches'],
): PostMatchReport | null {
  const latestSnapshot = [...saveOverviewMatches]
    .reverse()
    .find((snapshot) => snapshot.resultSummary.postMatchReport)
  const report = latestSnapshot?.resultSummary.postMatchReport

  return latestSnapshot && report && typeof report === 'object'
    ? localizePostMatchReport(latestSnapshot, report as PostMatchReport, client)
    : null
}

function buildAdvancementSummary(
  groupCode: string,
  standings: SaveOverview['groupStandings'],
  completedMatches: SaveOverview['completedMatches'],
  totalGroupFixtureCount: number,
): SaveOverview['advancement'] {
  const completedGroupMatches = completedMatches.filter((snapshot) => snapshot.stage === 'group').length

  if (totalGroupFixtureCount === 0 || completedGroupMatches < totalGroupFixtureCount) {
    return null
  }

  const qualifiedTeamIds = standings.filter((entry) => entry.isQualified).map((entry) => entry.team.id)
  const eliminatedTeamIds = standings.filter((entry) => !entry.isQualified).map((entry) => entry.team.id)
  const selectedEntry = standings.find((entry) => entry.isSelectedTeam)

  return {
    groupCode,
    qualifiedTeamIds,
    eliminatedTeamIds,
    selectedTeamOutcome: selectedEntry
      ? selectedEntry.isQualified
        ? 'qualified'
        : 'eliminated'
      : 'pending',
  }
}

function buildTournamentSummary(
  saveOverview: Pick<
    SaveOverview,
    'saveSlot' | 'selectedTeam' | 'latestPostMatchReport' | 'tournamentOutcome'
  >,
): TournamentSummary | null {
  const latestReport = saveOverview.latestPostMatchReport
  const resultLabel =
    latestReport?.resultLabel === 'win'
      ? '胜利'
      : latestReport?.resultLabel === 'loss'
        ? '失利'
        : latestReport?.resultLabel === 'draw'
          ? '平局'
          : latestReport?.resultLabel ?? ''

  if (saveOverview.tournamentOutcome === 'champion' && latestReport) {
    return {
      title: '世界杯冠军',
      detail: `${saveOverview.selectedTeam.shortName} 在决赛中以 ${latestReport.scoreline} 击败 ${latestReport.opponentTeamName}，成功捧杯。`,
      tone: 'success',
    }
  }

  if (saveOverview.tournamentOutcome === 'eliminated' && latestReport?.stage === 'knockout') {
    const stageLabel =
      latestReport.knockoutSlot === 'final'
        ? '决赛'
        : latestReport.knockoutSlot === 'semi-1' || latestReport.knockoutSlot === 'semi-2'
          ? '半决赛'
          : '淘汰赛'

    return {
      title: '世界杯征程结束',
      detail: `${saveOverview.selectedTeam.shortName} 在${stageLabel}中以 ${latestReport.scoreline} 不敌 ${latestReport.opponentTeamName}。`,
      tone: 'failure',
    }
  }

  if (saveOverview.saveSlot.currentStage === 'knockout' && saveOverview.saveSlot.status === 'active') {
    const roundLabel =
      saveOverview.saveSlot.currentRoundCode === 'knockout-semi' ? '半决赛' : '决赛'

    return {
      title: '淘汰赛阶段',
      detail: `${saveOverview.selectedTeam.shortName} 正在为${roundLabel}做准备。`,
      tone: 'neutral',
    }
  }

  if (saveOverview.latestPostMatchReport?.stage === 'group' && saveOverview.tournamentOutcome === 'in_progress') {
    return {
      title: '小组赛仍在继续',
      detail: `${saveOverview.selectedTeam.shortName} 在上一场取得${resultLabel}后，继续征战小组赛。`,
      tone: 'neutral',
    }
  }

  return null
}

export function loadSaveOverview(
  client: SQLiteDatabaseClient,
  saveSlotId: string,
): SaveOverview {
  const saveRepository = new SaveRepository(client)
  const teamRepository = new TeamRepository(client)
  const tournamentRepository = new TournamentRepository(client)
  const saveSlot = saveRepository.getSaveSlotById(saveSlotId)

  if (!saveSlot) {
    throw new Error(`Save slot was not found: ${saveSlotId}`)
  }

  const selectedTeam = teamRepository.getTeamById(saveSlot.selectedTeamId)

  if (!selectedTeam) {
    throw new Error(`Selected team for save ${saveSlotId} was not found.`)
  }

  const groupTeams = teamRepository.getTeamsByGroupCode(selectedTeam.groupCode)
  const teamStates = saveRepository.getTeamStatesBySaveSlotId(saveSlot.id)
  const playerStates = saveRepository.getPlayerStatesBySaveSlotId(saveSlot.id)
  const completedMatches = saveRepository.getMatchSnapshotsBySaveSlotId(saveSlot.id)
  const groupFixtures = tournamentRepository.getFixturesByStage('group')
  const groupStageResolved = completedMatches.filter((snapshot) => snapshot.stage === 'group').length >= groupFixtures.length
  const groupStandings = buildGroupStandings(groupTeams, teamStates, saveSlot.selectedTeamId, {
    markQualified: groupStageResolved,
  })
  const currentFixtures =
    saveSlot.currentStage === 'knockout'
      ? resolveKnockoutFixtures(client, saveSlot.id, saveSlot.currentRoundCode)
      : tournamentRepository.getFixturesByRoundCode(saveSlot.currentRoundCode)
  const tournamentOutcome: SaveOverview['tournamentOutcome'] =
    saveSlot.status === 'champion'
      ? 'champion'
      : saveSlot.status === 'eliminated'
        ? 'eliminated'
        : saveSlot.currentStage === 'knockout' && saveSlot.status === 'active'
          ? 'qualified'
          : saveSlot.status === 'qualified'
            ? 'qualified'
            : 'in_progress'

  const overview = {
    saveSlot,
    selectedTeam,
    groupStandings,
    currentFixtures,
    completedMatches,
    latestPostMatchReport: extractLatestPostMatchReport(client, completedMatches),
    advancement: buildAdvancementSummary(
      selectedTeam.groupCode,
      groupStandings,
      completedMatches,
      groupFixtures.length,
    ),
    tournamentOutcome,
    rosterSize: playerStates.filter((playerState) =>
      playerState.playerId.startsWith(`${saveSlot.selectedTeamId}-player-`),
    ).length,
  }

  return {
    ...overview,
    tournamentSummary: buildTournamentSummary(overview),
  }
}
