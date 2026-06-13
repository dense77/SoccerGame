import { describe, expect, it } from 'vitest'

import { SaveRepository } from '../../data/repositories/SaveRepository'
import { createCareerSave } from '../../modules/save-progress/createCareerSave'
import { loadSaveOverview } from '../../modules/save-progress/loadSaveOverview'
import { playCurrentRound } from '../../modules/match-engine/playCurrentRound'
import { createTestDatabase } from '../helpers/createTestDatabase'

describe('round simulation integration', () => {
  it('plays the current round, stores snapshots, and advances the save', async () => {
    const client = await createTestDatabase()
    const saveSlot = createCareerSave(client, 'team-arg-sample')
    const snapshots = playCurrentRound(client, saveSlot.id)
    const saveRepository = new SaveRepository(client)
    const refreshedSave = saveRepository.getSaveSlotById(saveSlot.id)
    const overview = loadSaveOverview(client, saveSlot.id)

    expect(snapshots).toHaveLength(2)
    expect(refreshedSave?.currentRoundCode).toBe('group-round-2')
    expect(saveRepository.getMatchSnapshotsBySaveSlotId(saveSlot.id)).toHaveLength(2)
    expect(overview.groupStandings.some((entry) => entry.groupPoints > 0)).toBe(true)
  })
})
