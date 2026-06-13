import { describe, expect, it } from 'vitest'

import { SaveRepository } from '../../data/repositories/SaveRepository'
import { resolveSaveFlowView } from '../../app/saveFlowView'
import { createCareerSave } from '../../modules/save-progress/createCareerSave'
import { loadMatchEventSelection } from '../../modules/event-system/loadMatchEventSelection'
import { loadSaveOverview } from '../../modules/save-progress/loadSaveOverview'
import { playCurrentRound } from '../../modules/match-engine/playCurrentRound'
import { loadMatchSetupOverview } from '../../modules/team-management/loadMatchSetupOverview'
import { createTestDatabase } from '../helpers/createTestDatabase'

describe('round simulation integration', () => {
  it('plays the current round, stores snapshots, and advances the save', async () => {
    const client = await createTestDatabase()
    const saveSlot = createCareerSave(client, 'team-arg-sample')
    const setup = loadMatchSetupOverview(client, saveSlot.id)
    const selectedEvent = loadMatchEventSelection(
      client,
      setup,
      'pre-match',
      'event-option-pre-match-rotation-call-yes',
    )
    if (!selectedEvent) {
      throw new Error('Expected pre-match event selection.')
    }

    const snapshots = playCurrentRound(client, saveSlot.id, selectedEvent)
    const saveRepository = new SaveRepository(client)
    const refreshedSave = saveRepository.getSaveSlotById(saveSlot.id)
    const overview = loadSaveOverview(client, saveSlot.id)

    expect(snapshots).toHaveLength(2)
    expect(refreshedSave?.currentRoundCode).toBe('group-round-2')
    expect(saveRepository.getMatchSnapshotsBySaveSlotId(saveSlot.id)).toHaveLength(2)
    expect(overview.groupStandings.some((entry) => entry.groupPoints > 0)).toBe(true)
    expect(overview.latestPostMatchReport?.teamId).toBe('team-arg-sample')
    expect(overview.latestPostMatchReport?.playerChanges.some((entry) => entry.fitnessDelta < 0)).toBe(true)
    expect(overview.latestPostMatchReport?.eventReports.length).toBeGreaterThanOrEqual(1)
    expect(resolveSaveFlowView(overview, 'after-round')).toBe('post-match')
  })

  it('requires a pre-match event choice before simulating the current round', async () => {
    const client = await createTestDatabase()
    const saveSlot = createCareerSave(client, 'team-arg-sample')

    expect(() => playCurrentRound(client, saveSlot.id)).toThrow('必须先完成赛前事件选择')
  })

  it('resolves group advancement after the third round and marks the save outcome', async () => {
    const client = await createTestDatabase()
    const saveSlot = createCareerSave(client, 'team-arg-sample')

    for (let round = 0; round < 3; round += 1) {
      const setup = loadMatchSetupOverview(client, saveSlot.id)
      const eventSelection = loadMatchEventSelection(
        client,
        setup,
        'pre-match',
        round === 0 ? 'event-option-pre-match-rotation-call-yes' : 'event-option-pre-match-steady-shape-yes',
      )
      if (!eventSelection) {
        throw new Error('Expected pre-match event selection.')
      }

      playCurrentRound(client, saveSlot.id, eventSelection)
    }

    const saveRepository = new SaveRepository(client)
    const refreshedSave = saveRepository.getSaveSlotById(saveSlot.id)
    const overview = loadSaveOverview(client, saveSlot.id)

    expect(refreshedSave?.currentStage).toBe('knockout')
    expect(refreshedSave?.currentRoundCode).toBe('knockout-semi')
    expect(refreshedSave?.status).toBe('active')
    expect(overview.advancement).not.toBeNull()
    expect(overview.tournamentSummary?.title).toBe('淘汰赛阶段')
    expect(overview.tournamentOutcome).toBe('qualified')
    expect(overview.currentFixtures).toHaveLength(2)
    expect(overview.groupStandings.filter((entry) => entry.isQualified)).toHaveLength(2)
    expect(overview.groupStandings.filter((entry) => entry.isEliminated)).toHaveLength(2)
  })

  it('settles the selected team after the semifinal round', async () => {
    const client = await createTestDatabase()
    const saveSlot = createCareerSave(client, 'team-arg-sample')

    for (let round = 0; round < 3; round += 1) {
      const setup = loadMatchSetupOverview(client, saveSlot.id)
      const eventSelection = loadMatchEventSelection(
        client,
        setup,
        'pre-match',
        round === 0 ? 'event-option-pre-match-rotation-call-yes' : 'event-option-pre-match-steady-shape-yes',
      )
      if (!eventSelection) {
        throw new Error('Expected pre-match event selection.')
      }

      playCurrentRound(client, saveSlot.id, eventSelection)
    }
    const semiSetup = loadMatchSetupOverview(client, saveSlot.id)
    const semiEventSelection = loadMatchEventSelection(
      client,
      semiSetup,
      'pre-match',
      'event-option-pre-match-steady-shape-yes',
    )
    if (!semiEventSelection) {
      throw new Error('Expected semifinal pre-match event selection.')
    }
    const semiSnapshots = playCurrentRound(client, saveSlot.id, semiEventSelection)

    const saveRepository = new SaveRepository(client)
    const refreshedSave = saveRepository.getSaveSlotById(saveSlot.id)
    const overview = loadSaveOverview(client, saveSlot.id)

    expect(semiSnapshots).toHaveLength(2)
    if (refreshedSave?.status === 'active') {
      expect(refreshedSave.currentRoundCode).toBe('knockout-final')
      expect(overview.currentFixtures).toHaveLength(1)
      expect(overview.tournamentSummary?.title).toBe('淘汰赛阶段')
    } else {
      expect(refreshedSave?.status).toBe('eliminated')
      expect(refreshedSave?.currentRoundCode).toBe('tournament-complete')
      expect(overview.tournamentSummary?.tone).toBe('failure')
    }
  })

  it('settles the tournament after the knockout final', async () => {
    const client = await createTestDatabase()
    const saveSlot = createCareerSave(client, 'team-arg-sample')

    for (let round = 0; round < 3; round += 1) {
      const setup = loadMatchSetupOverview(client, saveSlot.id)
      const eventSelection = loadMatchEventSelection(
        client,
        setup,
        'pre-match',
        round === 0 ? 'event-option-pre-match-rotation-call-yes' : 'event-option-pre-match-steady-shape-yes',
      )
      if (!eventSelection) {
        throw new Error('Expected pre-match event selection.')
      }

      playCurrentRound(client, saveSlot.id, eventSelection)
    }
    const semiSetup = loadMatchSetupOverview(client, saveSlot.id)
    const semiEventSelection = loadMatchEventSelection(
      client,
      semiSetup,
      'pre-match',
      'event-option-pre-match-steady-shape-yes',
    )
    if (!semiEventSelection) {
      throw new Error('Expected semifinal pre-match event selection.')
    }
    const semiSnapshots = playCurrentRound(client, saveSlot.id, semiEventSelection)

    const saveRepository = new SaveRepository(client)
    const afterSemi = saveRepository.getSaveSlotById(saveSlot.id)

    if (afterSemi?.status === 'active') {
      const finalSetup = loadMatchSetupOverview(client, saveSlot.id)
      const finalEventSelection = loadMatchEventSelection(
        client,
        finalSetup,
        'pre-match',
        'event-option-pre-match-steady-shape-yes',
      )
      if (!finalEventSelection) {
        throw new Error('Expected final pre-match event selection.')
      }

      const finalSnapshots = playCurrentRound(client, saveSlot.id, finalEventSelection)
      const refreshedSave = saveRepository.getSaveSlotById(saveSlot.id)
      const overview = loadSaveOverview(client, saveSlot.id)

      expect(finalSnapshots).toHaveLength(1)
      expect(refreshedSave?.currentRoundCode).toBe('tournament-complete')
      expect(['champion', 'eliminated']).toContain(refreshedSave?.status)
      expect(['champion', 'eliminated']).toContain(overview.tournamentOutcome)
      expect(overview.tournamentSummary).not.toBeNull()
      expect(overview.completedMatches).toHaveLength(9)

      if (refreshedSave?.status === 'champion') {
        expect(overview.tournamentSummary?.tone).toBe('success')
      } else {
        expect(overview.tournamentSummary?.tone).toBe('failure')
      }

      expect(resolveSaveFlowView(overview, 'resume')).toBe('settlement')
    } else {
      const overview = loadSaveOverview(client, saveSlot.id)

      expect(semiSnapshots).toHaveLength(2)
      expect(afterSemi?.status).toBe('eliminated')
      expect(overview.tournamentSummary?.tone).toBe('failure')
      expect(overview.completedMatches).toHaveLength(8)
      expect(resolveSaveFlowView(overview, 'resume')).toBe('settlement')
    }
  })
})
