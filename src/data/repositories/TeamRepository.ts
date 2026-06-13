import type { Player, Team } from '../../types/entities'
import type { SQLiteDatabaseClient } from '../db/sqlite'

interface TeamRow {
  id: string
  name: string
  short_name: string
  fifa_code: string
  group_code: string
  default_formation_id: string
  style_tags_json: string
  overall_rating: number
  goalkeeping_rating: number
  defense_rating: number
  midfield_rating: number
  attack_rating: number
}

interface PlayerRow {
  id: string
  team_id: string
  name: string
  shirt_number: number
  primary_position: string
  secondary_positions_json: string
  overall_rating: number
  attack_rating: number
  defense_rating: number
  stamina_rating: number
  mentality_rating: number
  position_fit_rating: number
  is_core_player: number
  status_tag: string
}

function mapTeam(row: TeamRow): Team {
  return {
    id: row.id,
    name: row.name,
    shortName: row.short_name,
    fifaCode: row.fifa_code,
    groupCode: row.group_code,
    defaultFormationId: row.default_formation_id,
    styleTags: JSON.parse(row.style_tags_json) as string[],
    overallRating: row.overall_rating,
    goalkeepingRating: row.goalkeeping_rating,
    defenseRating: row.defense_rating,
    midfieldRating: row.midfield_rating,
    attackRating: row.attack_rating,
  }
}

function mapPlayer(row: PlayerRow): Player {
  return {
    id: row.id,
    teamId: row.team_id,
    name: row.name,
    shirtNumber: row.shirt_number,
    primaryPosition: row.primary_position,
    secondaryPositions: JSON.parse(row.secondary_positions_json) as string[],
    overallRating: row.overall_rating,
    attackRating: row.attack_rating,
    defenseRating: row.defense_rating,
    staminaRating: row.stamina_rating,
    mentalityRating: row.mentality_rating,
    positionFitRating: row.position_fit_rating,
    isCorePlayer: row.is_core_player === 1,
    statusTag: row.status_tag,
  }
}

export class TeamRepository {
  constructor(private readonly client: SQLiteDatabaseClient) {}

  getAllTeams(): Team[] {
    return this.client
      .query<TeamRow>('SELECT * FROM teams ORDER BY overall_rating DESC, name ASC')
      .map(mapTeam)
  }

  getTeamById(teamId: string): Team | null {
    const row = this.client.getOne<TeamRow>('SELECT * FROM teams WHERE id = ?', [teamId])
    return row ? mapTeam(row) : null
  }

  getPlayersByTeamId(teamId: string): Player[] {
    return this.client
      .query<PlayerRow>(
        'SELECT * FROM players WHERE team_id = ? ORDER BY shirt_number ASC',
        [teamId],
      )
      .map(mapPlayer)
  }
}
