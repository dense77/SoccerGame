import { describe, expect, it } from 'vitest'

import { createCareerSave } from '../../modules/save-progress/createCareerSave'
import { loadSaveOverview } from '../../modules/save-progress/loadSaveOverview'
import { createTestDatabase } from '../helpers/createTestDatabase'

describe('save flow integration', () => {
  it('creates a save and exposes the opening tournament overview', async () => {
    const client = await createTestDatabase()
    const saveSlot = createCareerSave(client, 'team-arg-sample')
    const overview = loadSaveOverview(client, saveSlot.id)

    expect(overview.selectedTeam.id).toBe('team-arg-sample')
    expect(overview.saveSlot.currentRoundCode).toBe('group-round-1')
    expect(overview.groupStandings).toHaveLength(4)
    expect(overview.currentFixtures).toHaveLength(2)
    expect(overview.rosterSize).toBe(26)
  })
})
