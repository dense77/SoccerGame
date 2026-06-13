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

    expect(teams).toHaveLength(4)
    expect(groups).toHaveLength(1)
    expect(groups[0].teamIds).toHaveLength(4)
    expect(groupFixtures).toHaveLength(6)
    expect(knockoutFixtures).toHaveLength(3)
    expect(events).toHaveLength(8)
    expect(options.length).toBeGreaterThan(0)
  })

  it('builds a stable database summary for the app shell', async () => {
    const client = await createTestDatabase()

    expect(loadGameDataSummary(client)).toEqual({
      teamCount: 4,
      playerCount: 104,
      formationCount: 2,
      tacticProfileCount: 3,
      fixtureCount: 9,
      eventTemplateCount: 8,
    })
  })
})
