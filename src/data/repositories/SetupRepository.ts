import type { Formation, TacticProfile } from '../../types/entities'
import type { SQLiteDatabaseClient } from '../db/sqlite'

interface FormationRow {
  id: string
  name: string
  slot_layout_json: string
  tactic_tags_json: string
  recommended_usage: string
}

interface TacticProfileRow {
  id: string
  name: string
  attack_bias: number
  defensive_line: number
  tempo: number
  risk_appetite: number
  event_weight_mod_json: string
}

interface TeamTacticRow {
  tactic_profile_id: string
  is_default: number
  priority_order: number
}

function mapFormation(row: FormationRow): Formation {
  return {
    id: row.id,
    name: row.name,
    slotLayout: JSON.parse(row.slot_layout_json) as string[],
    tacticTags: JSON.parse(row.tactic_tags_json) as string[],
    recommendedUsage: row.recommended_usage,
  }
}

function mapTacticProfile(row: TacticProfileRow): TacticProfile {
  return {
    id: row.id,
    name: row.name,
    attackBias: row.attack_bias,
    defensiveLine: row.defensive_line,
    tempo: row.tempo,
    riskAppetite: row.risk_appetite,
    eventWeightModifiers: JSON.parse(row.event_weight_mod_json) as Record<string, number>,
  }
}

export class SetupRepository {
  constructor(private readonly client: SQLiteDatabaseClient) {}

  getAllFormations(): Formation[] {
    return this.client
      .query<FormationRow>('SELECT * FROM formations ORDER BY name ASC')
      .map(mapFormation)
  }

  getFormationById(formationId: string): Formation | null {
    const row = this.client.getOne<FormationRow>('SELECT * FROM formations WHERE id = ?', [
      formationId,
    ])

    return row ? mapFormation(row) : null
  }

  getTacticProfilesByTeamId(teamId: string): TacticProfile[] {
    const teamMappings = this.client.query<TeamTacticRow>(
      `SELECT tactic_profile_id, is_default, priority_order
       FROM team_tactic_profiles
       WHERE team_id = ?
       ORDER BY is_default DESC, priority_order ASC`,
      [teamId],
    )

    return teamMappings
      .map((mapping) =>
        this.client.getOne<TacticProfileRow>('SELECT * FROM tactic_profiles WHERE id = ?', [
          mapping.tactic_profile_id,
        ]),
      )
      .filter((row): row is TacticProfileRow => Boolean(row))
      .map(mapTacticProfile)
  }

  getDefaultTacticProfileByTeamId(teamId: string): TacticProfile | null {
    const mapping = this.client.getOne<TeamTacticRow>(
      `SELECT tactic_profile_id, is_default, priority_order
       FROM team_tactic_profiles
       WHERE team_id = ?
       ORDER BY is_default DESC, priority_order ASC
       LIMIT 1`,
      [teamId],
    )

    if (!mapping) {
      return null
    }

    const row = this.client.getOne<TacticProfileRow>(
      'SELECT * FROM tactic_profiles WHERE id = ?',
      [mapping.tactic_profile_id],
    )

    return row ? mapTacticProfile(row) : null
  }
}
