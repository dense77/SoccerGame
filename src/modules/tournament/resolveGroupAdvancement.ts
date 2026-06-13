import { SaveRepository } from '../../data/repositories/SaveRepository'
import { TeamRepository } from '../../data/repositories/TeamRepository'
import type { SQLiteDatabaseClient } from '../../data/db/sqlite'
import type { GroupAdvancementSummary } from '../../types/entities'
import { getQualifiedTeamIdsFromGroupStage } from './groupStageResolution'

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

  const groupStageResolution = getQualifiedTeamIdsFromGroupStage(client, saveSlot.id)
  const selectedGroupStandings = groupStageResolution.groupStandings
    .find((group) => group.groupCode === selectedTeam.groupCode)?.standings ?? []
  const globallyQualifiedTeamIds = new Set(groupStageResolution.allQualifiedTeamIds)
  const qualifiedTeamIds = selectedGroupStandings
    .filter((entry) => globallyQualifiedTeamIds.has(entry.team.id))
    .map((entry) => entry.team.id)
  const eliminatedTeamIds = selectedGroupStandings
    .filter((entry) => !globallyQualifiedTeamIds.has(entry.team.id))
    .map((entry) => entry.team.id)

  saveRepository.getTeamStatesBySaveSlotId(saveSlot.id).forEach((state) => {
    saveRepository.updateTeamEliminationState(
      saveSlot.id,
      state.teamId,
      !globallyQualifiedTeamIds.has(state.teamId),
    )
  })

  return {
    groupCode: selectedTeam.groupCode,
    qualifiedTeamIds,
    eliminatedTeamIds,
    selectedTeamOutcome: globallyQualifiedTeamIds.has(selectedTeam.id) ? 'qualified' : 'eliminated',
  }
}
