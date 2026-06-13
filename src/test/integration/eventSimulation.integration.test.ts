import { describe, expect, it } from 'vitest'

import { SaveRepository } from '../../data/repositories/SaveRepository'
import { createCareerSave } from '../../modules/save-progress/createCareerSave'
import { loadMatchSetupOverview } from '../../modules/team-management/loadMatchSetupOverview'
import { loadMatchEventSelection } from '../../modules/event-system/loadMatchEventSelection'
import { playCurrentRound } from '../../modules/match-engine/playCurrentRound'
import { createTestDatabase } from '../helpers/createTestDatabase'

describe('event simulation integration', () => {
  it('stores an event log when the selected team enters a round with a chosen event option', async () => {
    const client = await createTestDatabase()
    const saveSlot = createCareerSave(client, 'team-arg-sample')
    const setup = loadMatchSetupOverview(client, saveSlot.id)
    const selection = loadMatchEventSelection(
      client,
      setup,
      'pre-match',
      'event-option-pre-match-rotation-call-yes',
    )

    if (!selection) {
      throw new Error('Expected an event selection for the test setup.')
    }

    const snapshots = playCurrentRound(client, saveSlot.id, selection)
    const saveRepository = new SaveRepository(client)
    const selectedMatch = snapshots.find((snapshot) => snapshot.fixtureId === setup.fixture.id)

    if (!selectedMatch) {
      throw new Error('Expected a selected-team match snapshot.')
    }

    const logs = saveRepository.getMatchEventLogsBySnapshotId(selectedMatch.id)

    expect(logs.length).toBeGreaterThanOrEqual(1)
    expect(logs[0].eventTemplateId).toBe(selection.template.id)
    expect(logs[0].optionId).toBe(selection.selectedOptionId)
  })
})
