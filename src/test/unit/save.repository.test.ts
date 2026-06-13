import { describe, expect, it } from 'vitest'

import { SaveRepository } from '../../data/repositories/SaveRepository'
import { createCareerSave } from '../../modules/save-progress/createCareerSave'
import { buildGroupStandings } from '../../modules/tournament/buildGroupStandings'
import { TeamRepository } from '../../data/repositories/TeamRepository'
import { createTestDatabase } from '../helpers/createTestDatabase'

describe('SaveRepository and save creation', () => {
  it('creates a save slot and initializes team and player states', async () => {
    const client = await createTestDatabase()
    const saveSlot = createCareerSave(client, 'team-arg-sample')
    const repository = new SaveRepository(client)

    expect(repository.getSaveSlotById(saveSlot.id)).toEqual(saveSlot)
    expect(repository.getLatestSaveSlot()).toEqual(saveSlot)
    expect(repository.getTeamStatesBySaveSlotId(saveSlot.id)).toHaveLength(4)
    expect(repository.getPlayerStatesBySaveSlotId(saveSlot.id)).toHaveLength(104)
  })

  it('lists saves in reverse creation order for save selection', async () => {
    const client = await createTestDatabase()
    const firstSave = createCareerSave(client, 'team-arg-sample')
    const secondSave = createCareerSave(client, 'team-usa-sample')
    const repository = new SaveRepository(client)

    const saves = repository.getAllSaveSlots()

    expect(saves).toHaveLength(2)
    expect(saves[0].id).toBe(secondSave.id)
    expect(saves[1].id).toBe(firstSave.id)
  })

  it('sorts group standings by points, goal difference, and goals for', async () => {
    const client = await createTestDatabase()
    const saveSlot = createCareerSave(client, 'team-usa-sample')
    const repository = new SaveRepository(client)
    const teamRepository = new TeamRepository(client)

    client.execute(
      `UPDATE save_team_states
       SET group_points = ?, goal_for = ?, goal_against = ?, goal_diff = ?, wins = ?, draws = ?, losses = ?
       WHERE save_slot_id = ? AND team_id = ?`,
      [6, 5, 1, 4, 2, 0, 0, saveSlot.id, 'team-jpn-sample'],
    )
    client.execute(
      `UPDATE save_team_states
       SET group_points = ?, goal_for = ?, goal_against = ?, goal_diff = ?, wins = ?, draws = ?, losses = ?
       WHERE save_slot_id = ? AND team_id = ?`,
      [6, 4, 1, 3, 2, 0, 0, saveSlot.id, 'team-arg-sample'],
    )

    const standings = buildGroupStandings(
      teamRepository.getTeamsByGroupCode('A'),
      repository.getTeamStatesBySaveSlotId(saveSlot.id),
      saveSlot.selectedTeamId,
    )

    expect(standings[0].team.id).toBe('team-jpn-sample')
    expect(standings[1].team.id).toBe('team-arg-sample')
    expect(standings[0].isQualified).toBe(false)
    expect(standings.find((entry) => entry.team.id === 'team-usa-sample')?.isSelectedTeam).toBe(true)
  })
})
