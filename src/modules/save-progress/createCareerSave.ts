import { SaveRepository } from '../../data/repositories/SaveRepository'
import { TeamRepository } from '../../data/repositories/TeamRepository'
import { TournamentRepository } from '../../data/repositories/TournamentRepository'
import type { SQLiteDatabaseClient } from '../../data/db/sqlite'
import type { SaveSlot } from '../../types/entities'

function createSaveId(teamId: string): string {
  return `save-${teamId}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

export function createCareerSave(
  client: SQLiteDatabaseClient,
  selectedTeamId: string,
): SaveSlot {
  const teamRepository = new TeamRepository(client)
  const tournamentRepository = new TournamentRepository(client)
  const saveRepository = new SaveRepository(client)
  const selectedTeam = teamRepository.getTeamById(selectedTeamId)

  if (!selectedTeam) {
    throw new Error(`Selected team was not found: ${selectedTeamId}`)
  }

  const groupFixtures = tournamentRepository.getFixturesByStage('group')
  const firstFixture = groupFixtures[0]

  if (!firstFixture) {
    throw new Error('No group stage fixtures were found in the database.')
  }

  const saveSlot: SaveSlot = {
    id: createSaveId(selectedTeamId),
    selectedTeamId,
    currentStage: 'group',
    currentRoundCode: firstFixture.roundCode,
    status: 'active',
  }

  saveRepository.createSaveSlot(saveSlot)
  saveRepository.initializeTeamStates(saveSlot.id)
  saveRepository.initializePlayerStates(saveSlot.id)

  return saveSlot
}
