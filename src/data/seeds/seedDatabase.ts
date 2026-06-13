import type { SQLiteDatabaseClient } from '../db/sqlite'
import {
  getSeedTimestamp,
  sampleEventOptions,
  sampleEventTemplates,
  sampleFixtures,
  sampleFormations,
  samplePlayers,
  sampleTacticProfiles,
  sampleTeams,
  sampleTournamentGroups,
} from './sampleData'

interface CountRow {
  total: number
}

function countRows(client: SQLiteDatabaseClient, tableName: string): number {
  const row = client.getOne<CountRow>(`SELECT COUNT(*) as total FROM ${tableName}`)
  return row?.total ?? 0
}

function insertTeams(client: SQLiteDatabaseClient): void {
  const timestamp = getSeedTimestamp()

  sampleTeams.forEach((team) => {
    client.execute(
      `INSERT INTO teams (
        id, name, short_name, fifa_code, group_code, default_formation_id, style_tags_json,
        overall_rating, goalkeeping_rating, defense_rating, midfield_rating, attack_rating,
        created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        team.id,
        team.name,
        team.shortName,
        team.fifaCode,
        team.groupCode,
        team.defaultFormationId,
        JSON.stringify(team.styleTags),
        team.overallRating,
        team.goalkeepingRating,
        team.defenseRating,
        team.midfieldRating,
        team.attackRating,
        timestamp,
        timestamp,
      ],
    )
  })
}

function insertPlayers(client: SQLiteDatabaseClient): void {
  const timestamp = getSeedTimestamp()

  samplePlayers.forEach((player) => {
    client.execute(
      `INSERT INTO players (
        id, team_id, name, shirt_number, primary_position, secondary_positions_json,
        overall_rating, attack_rating, defense_rating, stamina_rating, mentality_rating,
        position_fit_rating, is_core_player, status_tag, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        player.id,
        player.teamId,
        player.name,
        player.shirtNumber,
        player.primaryPosition,
        JSON.stringify(player.secondaryPositions),
        player.overallRating,
        player.attackRating,
        player.defenseRating,
        player.staminaRating,
        player.mentalityRating,
        player.positionFitRating,
        player.isCorePlayer ? 1 : 0,
        player.statusTag,
        timestamp,
        timestamp,
      ],
    )
  })
}

function insertFormations(client: SQLiteDatabaseClient): void {
  const timestamp = getSeedTimestamp()

  sampleFormations.forEach((formation) => {
    client.execute(
      `INSERT INTO formations (
        id, name, slot_layout_json, tactic_tags_json, recommended_usage, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        formation.id,
        formation.name,
        JSON.stringify(formation.slotLayout),
        JSON.stringify(formation.tacticTags),
        formation.recommendedUsage,
        timestamp,
        timestamp,
      ],
    )
  })
}

function insertTactics(client: SQLiteDatabaseClient): void {
  const timestamp = getSeedTimestamp()

  sampleTacticProfiles.forEach((profile) => {
    client.execute(
      `INSERT INTO tactic_profiles (
        id, name, attack_bias, defensive_line, tempo, risk_appetite,
        event_weight_mod_json, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        profile.id,
        profile.name,
        profile.attackBias,
        profile.defensiveLine,
        profile.tempo,
        profile.riskAppetite,
        JSON.stringify(profile.eventWeightModifiers),
        timestamp,
        timestamp,
      ],
    )
  })

  sampleTeams.forEach((team, index) => {
    const defaultTactic = sampleTacticProfiles[index % sampleTacticProfiles.length]
    sampleTacticProfiles.forEach((profile, profileIndex) => {
      client.execute(
        `INSERT INTO team_tactic_profiles (
          id, team_id, tactic_profile_id, is_default, priority_order
        ) VALUES (?, ?, ?, ?, ?)`,
        [
          `${team.id}-${profile.id}`,
          team.id,
          profile.id,
          profile.id === defaultTactic.id ? 1 : 0,
          profileIndex + 1,
        ],
      )
    })
  })
}

function insertTournamentData(client: SQLiteDatabaseClient): void {
  const timestamp = getSeedTimestamp()

  sampleTournamentGroups.forEach((group) => {
    client.execute(
      `INSERT INTO tournament_groups (
        id, group_code, team_ids_json, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?)`,
      [group.id, group.groupCode, JSON.stringify(group.teamIds), timestamp, timestamp],
    )
  })

  sampleFixtures.forEach((fixture) => {
    client.execute(
      `INSERT INTO match_fixtures (
        id, stage, round_code, group_code, home_team_id, away_team_id,
        fixture_order, knockout_slot, depends_on_json, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        fixture.id,
        fixture.stage,
        fixture.roundCode,
        fixture.groupCode,
        fixture.homeTeamId,
        fixture.awayTeamId,
        fixture.fixtureOrder,
        fixture.knockoutSlot,
        JSON.stringify(fixture.dependsOn),
        timestamp,
        timestamp,
      ],
    )
  })
}

function insertEvents(client: SQLiteDatabaseClient): void {
  const timestamp = getSeedTimestamp()

  sampleEventTemplates.forEach((template) => {
    client.execute(
      `INSERT INTO event_templates (
        id, category, code, title, trigger_phase, trigger_condition_json,
        text_template, base_weight, repeat_rule, chain_next_codes_json,
        effect_summary_json, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        template.id,
        template.category,
        template.code,
        template.title,
        template.triggerPhase,
        JSON.stringify(template.triggerCondition),
        template.textTemplate,
        template.baseWeight,
        template.repeatRule,
        JSON.stringify(template.chainNextCodes),
        JSON.stringify(template.effectSummary),
        timestamp,
        timestamp,
      ],
    )
  })

  sampleEventOptions.forEach((option) => {
    client.execute(
      `INSERT INTO event_options (
        id, event_template_id, option_key, label, effect_json, sort_order
      ) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        option.id,
        option.eventTemplateId,
        option.optionKey,
        option.label,
        JSON.stringify(option.effect),
        option.sortOrder,
      ],
    )
  })
}

export function seedDatabaseIfEmpty(client: SQLiteDatabaseClient): void {
  if (countRows(client, 'teams') > 0) {
    return
  }

  insertTeams(client)
  insertPlayers(client)
  insertFormations(client)
  insertTactics(client)
  insertTournamentData(client)
  insertEvents(client)
}
