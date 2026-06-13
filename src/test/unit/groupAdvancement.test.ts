import { describe, expect, it } from 'vitest'

import { SaveRepository } from '../../data/repositories/SaveRepository'
import { createCareerSave } from '../../modules/save-progress/createCareerSave'
import { resolveGroupAdvancement } from '../../modules/tournament/resolveGroupAdvancement'
import { createTestDatabase } from '../helpers/createTestDatabase'

describe('resolveGroupAdvancement', () => {
  it('marks the top two teams as qualified and the rest as eliminated', async () => {
    const client = await createTestDatabase()
    const saveSlot = createCareerSave(client, 'team-arg-sample')
    const repository = new SaveRepository(client)

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
    client.execute(
      `UPDATE save_team_states
       SET group_points = ?, goal_for = ?, goal_against = ?, goal_diff = ?, wins = ?, draws = ?, losses = ?
       WHERE save_slot_id = ? AND team_id = ?`,
      [3, 2, 4, -2, 1, 0, 2, saveSlot.id, 'team-usa-sample'],
    )
    client.execute(
      `UPDATE save_team_states
       SET group_points = ?, goal_for = ?, goal_against = ?, goal_diff = ?, wins = ?, draws = ?, losses = ?
       WHERE save_slot_id = ? AND team_id = ?`,
      [1, 1, 4, -3, 0, 1, 2, saveSlot.id, 'team-sen-sample'],
    )

    const summary = resolveGroupAdvancement(client, saveSlot.id)
    const teamStates = repository.getTeamStatesBySaveSlotId(saveSlot.id)

    expect(summary.qualifiedTeamIds).toEqual(['team-arg-sample', 'team-jpn-sample'])
    expect(summary.eliminatedTeamIds).toEqual(['team-usa-sample', 'team-sen-sample'])
    expect(summary.selectedTeamOutcome).toBe('qualified')
    expect(teamStates.find((entry) => entry.teamId === 'team-usa-sample')?.isEliminated).toBe(true)
    expect(teamStates.find((entry) => entry.teamId === 'team-arg-sample')?.isEliminated).toBe(false)
  })
})
