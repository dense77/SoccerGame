import { describe, expect, it } from 'vitest'

import { createCareerSave } from '../../modules/save-progress/createCareerSave'
import {
  finalizeCurrentRound,
  prepareCurrentRound,
  previewCurrentRound,
  resolveEventSelectionForPhase,
} from '../../modules/match-engine/currentRoundFlow'
import { loadMatchEventSelection } from '../../modules/event-system/loadMatchEventSelection'
import { loadMatchSetupOverview } from '../../modules/team-management/loadMatchSetupOverview'
import { createTestDatabase } from '../helpers/createTestDatabase'

describe('currentRoundFlow', () => {
  it('prepares pending in-match and post-match events after a pre-match choice', async () => {
    const client = await createTestDatabase()
    const saveSlot = createCareerSave(client, 'team-arg-sample')
    const setup = loadMatchSetupOverview(client, saveSlot.id)
    const preMatchEvent = loadMatchEventSelection(
      client,
      setup,
      'pre-match',
      'event-option-pre-match-rotation-call-yes',
    )

    const prepared = prepareCurrentRound(client, saveSlot.id, preMatchEvent)

    expect(prepared.preview.teamName).toBe('阿根廷')
    expect(prepared.eventSelections.preMatchEvent?.selectedOptionId).toBe(
      'event-option-pre-match-rotation-call-yes',
    )
    expect(prepared.eventSelections.inMatchEvent).not.toBeNull()
    expect(prepared.eventSelections.inMatchEvent?.selectedOptionId).toBeNull()
    expect(prepared.eventSelections.postMatchEvent).not.toBeNull()
    expect(prepared.eventSelections.postMatchEvent?.selectedOptionId).toBeNull()
  })

  it('requires explicit in-match and post-match choices before finalizing', async () => {
    const client = await createTestDatabase()
    const saveSlot = createCareerSave(client, 'team-arg-sample')
    const setup = loadMatchSetupOverview(client, saveSlot.id)
    const preMatchEvent = loadMatchEventSelection(
      client,
      setup,
      'pre-match',
      'event-option-pre-match-rotation-call-yes',
    )
    const prepared = prepareCurrentRound(client, saveSlot.id, preMatchEvent)

    expect(() => finalizeCurrentRound(client, saveSlot.id, prepared.eventSelections)).toThrow(
      '必须先完成赛中事件选择',
    )

    const inMatchEvent = resolveEventSelectionForPhase(
      client,
      setup,
      'in-match',
      'event-option-tactic-late-push-yes',
    )
    const withInMatch = {
      ...prepared.eventSelections,
      inMatchEvent,
    }

    expect(() => finalizeCurrentRound(client, saveSlot.id, withInMatch)).toThrow(
      '必须先完成赛后事件选择',
    )
  })

  it('updates the preview after an in-match choice is made', async () => {
    const client = await createTestDatabase()
    const saveSlot = createCareerSave(client, 'team-arg-sample')
    const setup = loadMatchSetupOverview(client, saveSlot.id)
    const preMatchEvent = loadMatchEventSelection(
      client,
      setup,
      'pre-match',
      'event-option-pre-match-rotation-call-yes',
    )
    const prepared = prepareCurrentRound(client, saveSlot.id, preMatchEvent)
    const inMatchEvent = resolveEventSelectionForPhase(
      client,
      setup,
      'in-match',
      'event-option-tactic-late-push-yes',
    )

    const nextPreview = previewCurrentRound(client, saveSlot.id, {
      ...prepared.eventSelections,
      inMatchEvent,
    })

    expect(nextPreview.fixtureId).toBe(prepared.preview.fixtureId)
    expect(nextPreview.teamName).toBe(prepared.preview.teamName)
    expect(nextPreview.scoreline).toMatch(/^\d+-\d+$/)
  })
})
