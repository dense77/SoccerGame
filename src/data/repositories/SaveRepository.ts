import type {
  MatchSnapshot,
  SaveMatchSetup,
  SavePlayerState,
  SaveSlot,
  SaveTeamState,
} from '../../types/entities'
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

interface SaveMatchSetupRow {
  id: string
  save_slot_id: string
  fixture_id: string
  team_id: string
  formation_id: string
  tactic_profile_id: string
  starting_player_ids_json: string
  bench_player_ids_json: string
}

interface MatchSnapshotRow {
  id: string
  save_slot_id: string
  fixture_id: string
  stage: string
  home_team_id: string
  away_team_id: string
  home_score: number
  away_score: number
  result_summary_json: string
  applied_modifiers_json: string
  completed_at: string
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

function mapSaveMatchSetup(row: SaveMatchSetupRow): SaveMatchSetup {
  return {
    id: row.id,
    saveSlotId: row.save_slot_id,
    fixtureId: row.fixture_id,
    teamId: row.team_id,
    formationId: row.formation_id,
    tacticProfileId: row.tactic_profile_id,
    startingPlayerIds: JSON.parse(row.starting_player_ids_json) as string[],
    benchPlayerIds: JSON.parse(row.bench_player_ids_json) as string[],
  }
}

function mapMatchSnapshot(row: MatchSnapshotRow): MatchSnapshot {
  return {
    id: row.id,
    saveSlotId: row.save_slot_id,
    fixtureId: row.fixture_id,
    stage: row.stage,
    homeTeamId: row.home_team_id,
    awayTeamId: row.away_team_id,
    homeScore: row.home_score,
    awayScore: row.away_score,
    resultSummary: JSON.parse(row.result_summary_json) as Record<string, unknown>,
    appliedModifiers: JSON.parse(row.applied_modifiers_json) as Record<string, unknown>,
    completedAt: row.completed_at,
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

  getPlayerStatesByTeamId(saveSlotId: string, teamId: string): SavePlayerState[] {
    return this.client
      .query<SavePlayerStateRow>(
        `SELECT save_player_states.*
         FROM save_player_states
         INNER JOIN players ON players.id = save_player_states.player_id
         WHERE save_player_states.save_slot_id = ? AND players.team_id = ?
         ORDER BY players.shirt_number ASC`,
        [saveSlotId, teamId],
      )
      .map(mapSavePlayerState)
  }

  getMatchSetup(saveSlotId: string, fixtureId: string): SaveMatchSetup | null {
    const row = this.client.getOne<SaveMatchSetupRow>(
      `SELECT * FROM save_match_setups
       WHERE save_slot_id = ? AND fixture_id = ?
       LIMIT 1`,
      [saveSlotId, fixtureId],
    )

    return row ? mapSaveMatchSetup(row) : null
  }

  saveMatchSetup(input: SaveMatchSetup): void {
    const now = new Date().toISOString()
    const existing = this.getMatchSetup(input.saveSlotId, input.fixtureId)

    if (existing) {
      this.client.execute(
        `UPDATE save_match_setups
         SET formation_id = ?, tactic_profile_id = ?, starting_player_ids_json = ?, bench_player_ids_json = ?, updated_at = ?
         WHERE save_slot_id = ? AND fixture_id = ?`,
        [
          input.formationId,
          input.tacticProfileId,
          JSON.stringify(input.startingPlayerIds),
          JSON.stringify(input.benchPlayerIds),
          now,
          input.saveSlotId,
          input.fixtureId,
        ],
      )
      return
    }

    this.client.execute(
      `INSERT INTO save_match_setups (
        id, save_slot_id, fixture_id, team_id, formation_id, tactic_profile_id,
        starting_player_ids_json, bench_player_ids_json, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        input.id,
        input.saveSlotId,
        input.fixtureId,
        input.teamId,
        input.formationId,
        input.tacticProfileId,
        JSON.stringify(input.startingPlayerIds),
        JSON.stringify(input.benchPlayerIds),
        now,
      ],
    )
  }

  updateSaveSlotProgress(
    saveSlotId: string,
    currentStage: string,
    currentRoundCode: string,
    status: string,
  ): void {
    const now = new Date().toISOString()

    this.client.execute(
      `UPDATE save_slots
       SET current_stage = ?, current_round_code = ?, status = ?, updated_at = ?
       WHERE id = ?`,
      [currentStage, currentRoundCode, status, now, saveSlotId],
    )
  }

  updateTeamStateMetrics(
    saveSlotId: string,
    teamId: string,
    metrics: Pick<
      SaveTeamState,
      'groupPoints' | 'goalFor' | 'goalAgainst' | 'goalDiff' | 'wins' | 'draws' | 'losses'
    >,
  ): void {
    const now = new Date().toISOString()

    this.client.execute(
      `UPDATE save_team_states
       SET group_points = ?, goal_for = ?, goal_against = ?, goal_diff = ?, wins = ?, draws = ?, losses = ?, updated_at = ?
       WHERE save_slot_id = ? AND team_id = ?`,
      [
        metrics.groupPoints,
        metrics.goalFor,
        metrics.goalAgainst,
        metrics.goalDiff,
        metrics.wins,
        metrics.draws,
        metrics.losses,
        now,
        saveSlotId,
        teamId,
      ],
    )
  }

  updatePlayerStateMetrics(
    saveSlotId: string,
    playerId: string,
    metrics: Pick<SavePlayerState, 'fitnessValue' | 'moraleValue' | 'lastMatchMinutes' | 'statusTag'>,
  ): void {
    const now = new Date().toISOString()

    this.client.execute(
      `UPDATE save_player_states
       SET fitness_value = ?, morale_value = ?, last_match_minutes = ?, status_tag = ?, updated_at = ?
       WHERE save_slot_id = ? AND player_id = ?`,
      [
        metrics.fitnessValue,
        metrics.moraleValue,
        metrics.lastMatchMinutes,
        metrics.statusTag,
        now,
        saveSlotId,
        playerId,
      ],
    )
  }

  createMatchSnapshot(snapshot: MatchSnapshot): void {
    this.client.execute(
      `INSERT INTO match_snapshots (
        id, save_slot_id, fixture_id, stage, home_team_id, away_team_id,
        home_score, away_score, result_summary_json, applied_modifiers_json, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        snapshot.id,
        snapshot.saveSlotId,
        snapshot.fixtureId,
        snapshot.stage,
        snapshot.homeTeamId,
        snapshot.awayTeamId,
        snapshot.homeScore,
        snapshot.awayScore,
        JSON.stringify(snapshot.resultSummary),
        JSON.stringify(snapshot.appliedModifiers),
        snapshot.completedAt,
      ],
    )
  }

  getMatchSnapshotsBySaveSlotId(saveSlotId: string): MatchSnapshot[] {
    return this.client
      .query<MatchSnapshotRow>(
        'SELECT * FROM match_snapshots WHERE save_slot_id = ? ORDER BY completed_at ASC',
        [saveSlotId],
      )
      .map(mapMatchSnapshot)
  }
}
