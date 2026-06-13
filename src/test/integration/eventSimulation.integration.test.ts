import { describe, expect, it } from 'vitest'

import { SaveRepository } from '../../data/repositories/SaveRepository'
import { createCareerSave } from '../../modules/save-progress/createCareerSave'
import { loadMatchSetupOverview } from '../../modules/team-management/loadMatchSetupOverview'
import { loadMatchEventSelection } from '../../modules/event-system/loadMatchEventSelection'
import {
  finalizeCurrentRound,
  prepareCurrentRound,
  resolveEventSelectionForPhase,
} from '../../modules/match-engine/currentRoundFlow'
import { createTestDatabase } from '../helpers/createTestDatabase'

describe('event simulation integration', () => {
  it('stores event logs for pre-match, in-match, and post-match choices', async () => {
    const client = await createTestDatabase()
    const saveSlot = createCareerSave(client, 'team-arg-sample')
    const setup = loadMatchSetupOverview(client, saveSlot.id)
    const preMatchEvent = loadMatchEventSelection(
      client,
      setup,
      'pre-match',
      'event-option-pre-match-rotation-call-yes',
    )

    if (!preMatchEvent) {
      throw new Error('Expected an event selection for the test setup.')
    }

    const prepared = prepareCurrentRound(client, saveSlot.id, preMatchEvent)
    const inMatchEvent = resolveEventSelectionForPhase(
      client,
      setup,
      'in-match',
      'event-option-tactic-late-push-yes',
    )
    const postMatchEvent = resolveEventSelectionForPhase(
      client,
      setup,
      'post-match',
      'event-option-post-match-locker-room-unity',
    )
    const snapshots = finalizeCurrentRound(client, saveSlot.id, {
      ...prepared.eventSelections,
      inMatchEvent,
      postMatchEvent,
    })
    const saveRepository = new SaveRepository(client)
    const selectedMatch = snapshots.find((snapshot) => snapshot.fixtureId === setup.fixture.id)

    if (!selectedMatch) {
      throw new Error('Expected a selected-team match snapshot.')
    }

    const logs = saveRepository.getMatchEventLogsBySnapshotId(selectedMatch.id)

    expect(logs).toHaveLength(3)
    expect(logs[0].eventTemplateId).toBe(preMatchEvent.template.id)
    expect(logs[0].optionId).toBe(preMatchEvent.selectedOptionId)
    expect(logs[1].optionId).toBe('event-option-tactic-late-push-yes')
    expect(logs[2].optionId).toBe('event-option-post-match-locker-room-unity')
  })
})
