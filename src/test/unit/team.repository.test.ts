import { describe, expect, it } from 'vitest'

import { TeamRepository } from '../../data/repositories/TeamRepository'
import { createTestDatabase } from '../helpers/createTestDatabase'

describe('TeamRepository', () => {
  it('returns a complete seeded roster for a team', async () => {
    const client = await createTestDatabase()
    const repository = new TeamRepository(client)
    const teams = repository.getAllTeams()
    const players = repository.getPlayersByTeamId(teams[0].id)

    expect(teams).toHaveLength(48)
    expect(players).toHaveLength(26)
    expect(players[0].teamId).toBe(teams[0].id)
    expect(players[0].shirtNumber).toBe(1)
  })
})
