import { describe, expect, it } from 'vitest'

import { createCareerSave } from '../../modules/save-progress/createCareerSave'
import { resolveKnockoutFixtures } from '../../modules/tournament/resolveKnockoutFixtures'
import { createTestDatabase } from '../helpers/createTestDatabase'

describe('resolveKnockoutFixtures', () => {
  it('maps knockout depends_on slots to resolved group placements', async () => {
    const client = await createTestDatabase()
    const saveSlot = createCareerSave(client, 'team-arg-sample')

    client.execute(
      `UPDATE save_team_states
       SET group_points = ?, goal_for = ?, goal_against = ?, goal_diff = ?, wins = ?, draws = ?, losses = ?
       WHERE save_slot_id = ? AND team_id = ?`,
      [7, 5, 1, 4, 2, 1, 0, saveSlot.id, 'team-arg-sample'],
    )
    client.execute(
      `UPDATE save_team_states
       SET group_points = ?, goal_for = ?, goal_against = ?, goal_diff = ?, wins = ?, draws = ?, losses = ?
       WHERE save_slot_id = ? AND team_id = ?`,
      [4, 3, 2, 1, 1, 1, 1, saveSlot.id, 'team-jpn-sample'],
    )

    const fixtures = resolveKnockoutFixtures(client, saveSlot.id, 'knockout-semi')

    expect(fixtures).toHaveLength(2)
    expect(fixtures[0].homeTeamId).toBe('team-arg-sample')
    expect(fixtures[0].awayTeamId).toBe('team-sen-sample')
    expect(fixtures[1].homeTeamId).toBe('team-jpn-sample')
    expect(fixtures[1].awayTeamId).toBe('team-usa-sample')
  })

  it('maps winner dependencies for the knockout final after semifinals are completed', async () => {
    const client = await createTestDatabase()
    const saveSlot = createCareerSave(client, 'team-arg-sample')

    client.execute(
      `INSERT INTO match_snapshots (
        id, save_slot_id, fixture_id, stage, home_team_id, away_team_id,
        home_score, away_score, result_summary_json, applied_modifiers_json, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        `${saveSlot.id}-fixture-semi-1`,
        saveSlot.id,
        'fixture-semi-1',
        'knockout',
        'team-arg-sample',
        'team-sen-sample',
        2,
        1,
        '{}',
        '{}',
        '2026-06-14T00:00:00.000Z',
      ],
    )
    client.execute(
      `INSERT INTO match_snapshots (
        id, save_slot_id, fixture_id, stage, home_team_id, away_team_id,
        home_score, away_score, result_summary_json, applied_modifiers_json, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        `${saveSlot.id}-fixture-semi-2`,
        saveSlot.id,
        'fixture-semi-2',
        'knockout',
        'team-jpn-sample',
        'team-usa-sample',
        0,
        1,
        '{}',
        '{}',
        '2026-06-14T01:00:00.000Z',
      ],
    )

    const fixtures = resolveKnockoutFixtures(client, saveSlot.id, 'knockout-final')

    expect(fixtures).toHaveLength(1)
    expect(fixtures[0].homeTeamId).toBe('team-arg-sample')
    expect(fixtures[0].awayTeamId).toBe('team-usa-sample')
  })
})
