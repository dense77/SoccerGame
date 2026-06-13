import { describe, expect, it } from 'vitest'

import { EventRepository } from '../../data/repositories/EventRepository'
import { TeamRepository } from '../../data/repositories/TeamRepository'
import { TournamentRepository } from '../../data/repositories/TournamentRepository'
import { loadGameDataSummary } from '../../modules/bootstrap/loadGameDataSummary'
import { createTestDatabase } from '../helpers/createTestDatabase'

describe('game data integration', () => {
  it('loads teams, fixtures, and events through repositories', async () => {
    const client = await createTestDatabase()
    const teamRepository = new TeamRepository(client)
    const tournamentRepository = new TournamentRepository(client)
    const eventRepository = new EventRepository(client)

    const teams = teamRepository.getAllTeams()
    const groups = tournamentRepository.getGroups()
    const groupFixtures = tournamentRepository.getFixturesByStage('group')
    const knockoutFixtures = tournamentRepository.getFixturesByStage('knockout')
    const events = eventRepository.getAllTemplates()
    const options = eventRepository.getOptionsByTemplateId(events[0].id)

    expect(teams).toHaveLength(48)
    expect(groups).toHaveLength(12)
    expect(groups[0].teamIds).toHaveLength(4)
    expect(groupFixtures).toHaveLength(72)
    expect(knockoutFixtures).toHaveLength(32)
    expect(events).toHaveLength(8)
    expect(options.length).toBeGreaterThan(0)
  })

  it('builds a stable database summary for the app shell', async () => {
    const client = await createTestDatabase()

    expect(loadGameDataSummary(client)).toEqual({
      teamCount: 48,
      playerCount: 1248,
      formationCount: 5,
      tacticProfileCount: 3,
      fixtureCount: 104,
      eventTemplateCount: 8,
    })
  })
})
