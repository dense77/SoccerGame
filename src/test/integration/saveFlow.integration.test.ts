import { describe, expect, it } from 'vitest'

import { createCareerSave } from '../../modules/save-progress/createCareerSave'
import { loadSaveOverview } from '../../modules/save-progress/loadSaveOverview'
import { loadSaveSelectionEntries } from '../../modules/save-progress/loadSaveSelectionEntries'
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
    expect(overview.latestPostMatchReport).toBeNull()
    expect(overview.tournamentSummary).toBeNull()
    expect(overview.tournamentOutcome).toBe('in_progress')
    expect(overview.rosterSize).toBe(26)
  })

  it('keeps multiple saves available for selection without cross-contamination', async () => {
    const client = await createTestDatabase()
    const firstSave = createCareerSave(client, 'team-arg-sample')
    const secondSave = createCareerSave(client, 'team-usa-sample')

    const firstOverview = loadSaveOverview(client, firstSave.id)
    const secondOverview = loadSaveOverview(client, secondSave.id)

    expect(firstOverview.selectedTeam.id).toBe('team-arg-sample')
    expect(secondOverview.selectedTeam.id).toBe('team-usa-sample')
    expect(firstOverview.saveSlot.id).not.toBe(secondOverview.saveSlot.id)
  })

  it('builds readable save selection entries for the home screen', async () => {
    const client = await createTestDatabase()
    createCareerSave(client, 'team-arg-sample')
    createCareerSave(client, 'team-usa-sample')

    const entries = loadSaveSelectionEntries(client)

    expect(entries).toHaveLength(2)
    expect(entries[0].selectedTeam.shortName).toBe('美国')
    expect(entries[0].currentRoundCode).toBe('group-round-1')
    expect(entries[0].status).toBe('active')
    expect(entries[0].completedMatchCount).toBe(0)
  })
})
