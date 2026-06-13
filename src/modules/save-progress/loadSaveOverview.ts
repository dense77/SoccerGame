import { SaveRepository } from '../../data/repositories/SaveRepository'
import { TeamRepository } from '../../data/repositories/TeamRepository'
import { TournamentRepository } from '../../data/repositories/TournamentRepository'
import type { SQLiteDatabaseClient } from '../../data/db/sqlite'
import type { PostMatchReport, SaveOverview, TournamentSummary } from '../../types/entities'
import { buildGroupStandings } from '../tournament/buildGroupStandings'
import { resolveKnockoutFixtures } from '../tournament/resolveKnockoutFixtures'

function extractLatestPostMatchReport(saveOverviewMatches: SaveOverview['completedMatches']): PostMatchReport | null {
  const latestSnapshot = [...saveOverviewMatches]
    .reverse()
    .find((snapshot) => snapshot.resultSummary.postMatchReport)
  const report = latestSnapshot?.resultSummary.postMatchReport

  return report && typeof report === 'object' ? (report as PostMatchReport) : null
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

  if (saveOverview.tournamentOutcome === 'champion' && latestReport) {
    return {
      title: 'World Cup Winners',
      detail: `${saveOverview.selectedTeam.shortName} beat ${latestReport.opponentTeamName} ${latestReport.scoreline} in the final.`,
      tone: 'success',
    }
  }

  if (saveOverview.tournamentOutcome === 'eliminated' && latestReport?.stage === 'knockout') {
    const stageLabel =
      latestReport.knockoutSlot === 'final'
        ? 'the final'
        : latestReport.knockoutSlot === 'semi-1' || latestReport.knockoutSlot === 'semi-2'
          ? 'the semifinal'
          : 'the knockout round'

    return {
      title: 'Tournament Run Ends',
      detail: `${saveOverview.selectedTeam.shortName} lost to ${latestReport.opponentTeamName} ${latestReport.scoreline} in ${stageLabel}.`,
      tone: 'failure',
    }
  }

  if (saveOverview.saveSlot.currentStage === 'knockout' && saveOverview.saveSlot.status === 'active') {
    const roundLabel =
      saveOverview.saveSlot.currentRoundCode === 'knockout-semi' ? 'semifinal' : 'final'

    return {
      title: 'Knockout Stage',
      detail: `${saveOverview.selectedTeam.shortName} are preparing for the ${roundLabel}.`,
      tone: 'neutral',
    }
  }

  if (saveOverview.latestPostMatchReport?.stage === 'group' && saveOverview.tournamentOutcome === 'in_progress') {
    return {
      title: 'Group Stage Continues',
      detail: `${saveOverview.selectedTeam.shortName} remain in the group phase after a ${saveOverview.latestPostMatchReport.resultLabel}.`,
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
    latestPostMatchReport: extractLatestPostMatchReport(completedMatches),
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
