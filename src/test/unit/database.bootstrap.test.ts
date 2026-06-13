import { describe, expect, it } from 'vitest'

import { initializeSchema } from '../../data/db/schema'
import { SQLiteDatabaseClient } from '../../data/db/sqlite'
import { MemoryBinaryStorage } from '../../data/db/storage'
import { seedDatabaseIfEmpty } from '../../data/seeds/seedDatabase'

describe('database bootstrap', () => {
  it('creates the core tables during schema initialization', async () => {
    const client = new SQLiteDatabaseClient(new MemoryBinaryStorage())
    await client.initialize()

    initializeSchema(client)

    const rows = client.query<{ name: string }>(
      "SELECT name FROM sqlite_master WHERE type = 'table' AND name IN ('teams', 'players', 'match_fixtures', 'save_slots', 'match_snapshots')",
    )

    expect(rows.map((row) => row.name).sort()).toEqual([
      'match_fixtures',
      'match_snapshots',
      'players',
      'save_slots',
      'teams',
    ])
  })

  it('seeds the database only once', async () => {
    const client = new SQLiteDatabaseClient(new MemoryBinaryStorage())
    await client.initialize()
    initializeSchema(client)

    seedDatabaseIfEmpty(client)
    seedDatabaseIfEmpty(client)

    const teamCount = client.query<{ total: number }>('SELECT COUNT(*) as total FROM teams')[0].total
    const playerCount = client.query<{ total: number }>('SELECT COUNT(*) as total FROM players')[0].total

    expect(teamCount).toBe(4)
    expect(playerCount).toBe(104)
  })

  it('enforces unique player constraints within a team roster', async () => {
    const client = new SQLiteDatabaseClient(new MemoryBinaryStorage())
    await client.initialize()
    initializeSchema(client)
    seedDatabaseIfEmpty(client)

    expect(() =>
      client.execute(
        `INSERT INTO players (
          id, team_id, name, shirt_number, primary_position, secondary_positions_json,
          overall_rating, attack_rating, defense_rating, stamina_rating, mentality_rating,
          position_fit_rating, is_core_player, status_tag, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          'duplicate-shirt-player',
          'team-arg-sample',
          'Duplicate Shirt Player',
          1,
          'ST',
          '[]',
          70,
          70,
          60,
          65,
          60,
          70,
          0,
          'available',
          '2026-06-13T00:00:00.000Z',
          '2026-06-13T00:00:00.000Z',
        ],
      ),
    ).toThrow()
  })
})
