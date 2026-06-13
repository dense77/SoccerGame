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

    const fixtures = resolveKnockoutFixtures(client, saveSlot.id, 'knockout-final')

    expect(fixtures).toHaveLength(1)
    expect(fixtures[0].homeTeamId).toBe('team-arg-sample')
    expect(fixtures[0].awayTeamId).toBe('team-jpn-sample')
  })
})
