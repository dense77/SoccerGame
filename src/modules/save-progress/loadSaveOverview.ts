import { SaveRepository } from '../../data/repositories/SaveRepository'
import { TeamRepository } from '../../data/repositories/TeamRepository'
import { TournamentRepository } from '../../data/repositories/TournamentRepository'
import type { SQLiteDatabaseClient } from '../../data/db/sqlite'
import type { SaveOverview } from '../../types/entities'
import { buildGroupStandings } from '../tournament/buildGroupStandings'

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
  const currentFixtures = tournamentRepository.getFixturesByRoundCode(saveSlot.currentRoundCode)

  return {
    saveSlot,
    selectedTeam,
    groupStandings: buildGroupStandings(groupTeams, teamStates, saveSlot.selectedTeamId),
    currentFixtures,
    rosterSize: playerStates.filter((playerState) =>
      playerState.playerId.startsWith(`${saveSlot.selectedTeamId}-player-`),
    ).length,
  }
}
