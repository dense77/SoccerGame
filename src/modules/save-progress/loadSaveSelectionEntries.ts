import type { SQLiteDatabaseClient } from '../../data/db/sqlite'
import { SaveRepository } from '../../data/repositories/SaveRepository'
import type { SaveSelectionEntry } from '../../types/entities'
import { loadSaveOverview } from './loadSaveOverview'

export function loadSaveSelectionEntries(client: SQLiteDatabaseClient): SaveSelectionEntry[] {
  const saveRepository = new SaveRepository(client)

  return saveRepository.getAllSaveSlots().map((saveSlot) => {
    const overview = loadSaveOverview(client, saveSlot.id)

    return {
      saveSlotId: saveSlot.id,
      selectedTeam: overview.selectedTeam,
      currentStage: saveSlot.currentStage,
      currentRoundCode: saveSlot.currentRoundCode,
      status: saveSlot.status,
      tournamentOutcome: overview.tournamentOutcome,
      completedMatchCount: overview.completedMatches.length,
      latestPostMatchReport: overview.latestPostMatchReport,
      tournamentSummary: overview.tournamentSummary,
    }
  })
}
