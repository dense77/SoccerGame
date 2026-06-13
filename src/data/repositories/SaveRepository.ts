import type { SavePlayerState, SaveSlot, SaveTeamState } from '../../types/entities'
import type { SQLiteDatabaseClient } from '../db/sqlite'

interface SaveSlotRow {
  id: string
  selected_team_id: string
  current_stage: string
  current_round_code: string
  status: string
}

interface SaveTeamStateRow {
  id: string
  save_slot_id: string
  team_id: string
  group_points: number
  goal_for: number
  goal_against: number
  goal_diff: number
  wins: number
  draws: number
  losses: number
  is_eliminated: number
  current_morale_mod: number
  current_fitness_mod: number
}

interface SavePlayerStateRow {
  id: string
  save_slot_id: string
  player_id: string
  status_tag: string
  fitness_value: number
  morale_value: number
  yellow_card_count: number
  injury_flag: number
  suspension_flag: number
  last_match_minutes: number
}

function mapSaveSlot(row: SaveSlotRow): SaveSlot {
  return {
    id: row.id,
    selectedTeamId: row.selected_team_id,
    currentStage: row.current_stage,
    currentRoundCode: row.current_round_code,
    status: row.status,
  }
}

function mapSaveTeamState(row: SaveTeamStateRow): SaveTeamState {
  return {
    id: row.id,
    saveSlotId: row.save_slot_id,
    teamId: row.team_id,
    groupPoints: row.group_points,
    goalFor: row.goal_for,
    goalAgainst: row.goal_against,
    goalDiff: row.goal_diff,
    wins: row.wins,
    draws: row.draws,
    losses: row.losses,
    isEliminated: row.is_eliminated === 1,
    currentMoraleMod: row.current_morale_mod,
    currentFitnessMod: row.current_fitness_mod,
  }
}

function mapSavePlayerState(row: SavePlayerStateRow): SavePlayerState {
  return {
    id: row.id,
    saveSlotId: row.save_slot_id,
    playerId: row.player_id,
    statusTag: row.status_tag,
    fitnessValue: row.fitness_value,
    moraleValue: row.morale_value,
    yellowCardCount: row.yellow_card_count,
    injuryFlag: row.injury_flag === 1,
    suspensionFlag: row.suspension_flag === 1,
    lastMatchMinutes: row.last_match_minutes,
  }
}

export class SaveRepository {
  constructor(private readonly client: SQLiteDatabaseClient) {}

  createSaveSlot(input: SaveSlot): void {
    const now = new Date().toISOString()

    this.client.execute(
      `INSERT INTO save_slots (
        id, selected_team_id, current_stage, current_round_code, status, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        input.id,
        input.selectedTeamId,
        input.currentStage,
        input.currentRoundCode,
        input.status,
        now,
        now,
      ],
    )
  }

  getSaveSlotById(saveSlotId: string): SaveSlot | null {
    const row = this.client.getOne<SaveSlotRow>('SELECT * FROM save_slots WHERE id = ?', [saveSlotId])
    return row ? mapSaveSlot(row) : null
  }

  getLatestSaveSlot(): SaveSlot | null {
    const row = this.client.getOne<SaveSlotRow>(
      'SELECT * FROM save_slots ORDER BY created_at DESC LIMIT 1',
    )

    return row ? mapSaveSlot(row) : null
  }

  initializeTeamStates(saveSlotId: string): void {
    const now = new Date().toISOString()
    const teams = this.client.query<{ id: string }>('SELECT id FROM teams ORDER BY id ASC')

    teams.forEach((team) => {
      this.client.execute(
        `INSERT INTO save_team_states (
          id, save_slot_id, team_id, group_points, goal_for, goal_against, goal_diff,
          wins, draws, losses, is_eliminated, current_morale_mod, current_fitness_mod, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          `${saveSlotId}-${team.id}`,
          saveSlotId,
          team.id,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          now,
        ],
      )
    })
  }

  initializePlayerStates(saveSlotId: string): void {
    const now = new Date().toISOString()
    const players = this.client.query<{
      id: string
      status_tag: string
    }>('SELECT id, status_tag FROM players ORDER BY id ASC')

    players.forEach((player) => {
      this.client.execute(
        `INSERT INTO save_player_states (
          id, save_slot_id, player_id, status_tag, fitness_value, morale_value,
          yellow_card_count, injury_flag, suspension_flag, last_match_minutes, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          `${saveSlotId}-${player.id}`,
          saveSlotId,
          player.id,
          player.status_tag,
          100,
          70,
          0,
          0,
          0,
          0,
          now,
        ],
      )
    })
  }

  getTeamStatesBySaveSlotId(saveSlotId: string): SaveTeamState[] {
    return this.client
      .query<SaveTeamStateRow>(
        'SELECT * FROM save_team_states WHERE save_slot_id = ? ORDER BY team_id ASC',
        [saveSlotId],
      )
      .map(mapSaveTeamState)
  }

  getPlayerStatesBySaveSlotId(saveSlotId: string): SavePlayerState[] {
    return this.client
      .query<SavePlayerStateRow>(
        'SELECT * FROM save_player_states WHERE save_slot_id = ? ORDER BY player_id ASC',
        [saveSlotId],
      )
      .map(mapSavePlayerState)
  }
}
