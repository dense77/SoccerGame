import { SaveRepository } from '../../data/repositories/SaveRepository'
import { TeamRepository } from '../../data/repositories/TeamRepository'
import type { SQLiteDatabaseClient } from '../../data/db/sqlite'
import type { GroupAdvancementSummary } from '../../types/entities'
import { buildGroupStandings } from './buildGroupStandings'

export function resolveGroupAdvancement(
  client: SQLiteDatabaseClient,
  saveSlotId: string,
): GroupAdvancementSummary {
  const saveRepository = new SaveRepository(client)
  const teamRepository = new TeamRepository(client)
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
  const standings = buildGroupStandings(groupTeams, teamStates, saveSlot.selectedTeamId, {
    markQualified: true,
  })
  const qualifiedTeamIds = standings.slice(0, 2).map((entry) => entry.team.id)
  const qualifiedTeamIdSet = new Set(qualifiedTeamIds)
  const eliminatedTeamIds = standings
    .filter((entry) => !qualifiedTeamIdSet.has(entry.team.id))
    .map((entry) => entry.team.id)

  standings.forEach((entry, index) => {
    saveRepository.updateTeamEliminationState(saveSlot.id, entry.team.id, index >= 2)
  })

  return {
    groupCode: selectedTeam.groupCode,
    qualifiedTeamIds,
    eliminatedTeamIds,
    selectedTeamOutcome: qualifiedTeamIdSet.has(selectedTeam.id) ? 'qualified' : 'eliminated',
  }
}
