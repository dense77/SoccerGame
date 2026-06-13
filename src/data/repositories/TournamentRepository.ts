import type { MatchFixture, TournamentGroup } from '../../types/entities'
import type { SQLiteDatabaseClient } from '../db/sqlite'

interface GroupRow {
  id: string
  group_code: string
  team_ids_json: string
}

interface FixtureRow {
  id: string
  stage: string
  round_code: string
  group_code: string | null
  home_team_id: string | null
  away_team_id: string | null
  fixture_order: number
  knockout_slot: string | null
  depends_on_json: string
}

function mapGroup(row: GroupRow): TournamentGroup {
  return {
    id: row.id,
    groupCode: row.group_code,
    teamIds: JSON.parse(row.team_ids_json) as string[],
  }
}

function mapFixture(row: FixtureRow): MatchFixture {
  return {
    id: row.id,
    stage: row.stage,
    roundCode: row.round_code,
    groupCode: row.group_code,
    homeTeamId: row.home_team_id,
    awayTeamId: row.away_team_id,
    fixtureOrder: row.fixture_order,
    knockoutSlot: row.knockout_slot,
    dependsOn: JSON.parse(row.depends_on_json) as string[],
  }
}

export class TournamentRepository {
  constructor(private readonly client: SQLiteDatabaseClient) {}

  getGroups(): TournamentGroup[] {
    return this.client
      .query<GroupRow>('SELECT * FROM tournament_groups ORDER BY group_code ASC')
      .map(mapGroup)
  }

  getFixturesByStage(stage: string): MatchFixture[] {
    return this.client
      .query<FixtureRow>(
        'SELECT * FROM match_fixtures WHERE stage = ? ORDER BY fixture_order ASC',
        [stage],
      )
      .map(mapFixture)
  }
}
