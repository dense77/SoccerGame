import { describe, expect, it } from 'vitest'

import { SaveRepository } from '../../data/repositories/SaveRepository'
import { createCareerSave } from '../../modules/save-progress/createCareerSave'
import { loadMatchSetupOverview } from '../../modules/team-management/loadMatchSetupOverview'
import { createTestDatabase } from '../helpers/createTestDatabase'

describe('match setup integration', () => {
  it('loads and persists a pre-match setup for the selected team fixture', async () => {
    const client = await createTestDatabase()
    const saveSlot = createCareerSave(client, 'team-arg-sample')
    const overview = loadMatchSetupOverview(client, saveSlot.id)
    const saveRepository = new SaveRepository(client)

    expect(overview.players.filter((player) => player.isStarter)).toHaveLength(11)
    expect(overview.validation.isValid).toBe(true)

    saveRepository.saveMatchSetup({
      id: `${saveSlot.id}-${overview.fixture.id}-${overview.team.id}`,
      saveSlotId: saveSlot.id,
      fixtureId: overview.fixture.id,
      teamId: overview.team.id,
      formationId: overview.formationOptions[1].id,
      tacticProfileId: overview.tacticOptions[0].id,
      startingPlayerIds: overview.players.slice(0, 11).map((player) => player.player.id),
      benchPlayerIds: overview.players.slice(11).map((player) => player.player.id),
    })

    const reloaded = loadMatchSetupOverview(client, saveSlot.id)

    expect(reloaded.selectedFormation.id).toBe(overview.formationOptions[1].id)
    expect(reloaded.players.filter((player) => player.isStarter)).toHaveLength(11)
  })
})
