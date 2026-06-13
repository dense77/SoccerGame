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

function upsertTeam(client: SQLiteDatabaseClient, timestamp: string, team: typeof sampleTeams[number]): void {
  client.execute(
    `INSERT INTO teams (
      id, name, short_name, fifa_code, group_code, default_formation_id, style_tags_json,
      overall_rating, goalkeeping_rating, defense_rating, midfield_rating, attack_rating,
      created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      name = excluded.name,
      short_name = excluded.short_name,
      fifa_code = excluded.fifa_code,
      group_code = excluded.group_code,
      default_formation_id = excluded.default_formation_id,
      style_tags_json = excluded.style_tags_json,
      overall_rating = excluded.overall_rating,
      goalkeeping_rating = excluded.goalkeeping_rating,
      defense_rating = excluded.defense_rating,
      midfield_rating = excluded.midfield_rating,
      attack_rating = excluded.attack_rating,
      updated_at = excluded.updated_at`,
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
}

function insertTeams(client: SQLiteDatabaseClient): void {
  const timestamp = getSeedTimestamp()

  sampleTeams.forEach((team) => {
    upsertTeam(client, timestamp, team)
  })
}

function upsertPlayer(client: SQLiteDatabaseClient, timestamp: string, player: typeof samplePlayers[number]): void {
  client.execute(
    `INSERT INTO players (
      id, team_id, name, shirt_number, primary_position, secondary_positions_json,
      overall_rating, attack_rating, defense_rating, stamina_rating, mentality_rating,
      position_fit_rating, is_core_player, status_tag, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      team_id = excluded.team_id,
      name = excluded.name,
      shirt_number = excluded.shirt_number,
      primary_position = excluded.primary_position,
      secondary_positions_json = excluded.secondary_positions_json,
      overall_rating = excluded.overall_rating,
      attack_rating = excluded.attack_rating,
      defense_rating = excluded.defense_rating,
      stamina_rating = excluded.stamina_rating,
      mentality_rating = excluded.mentality_rating,
      position_fit_rating = excluded.position_fit_rating,
      is_core_player = excluded.is_core_player,
      status_tag = excluded.status_tag,
      updated_at = excluded.updated_at`,
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
}

function insertPlayers(client: SQLiteDatabaseClient): void {
  const timestamp = getSeedTimestamp()

  samplePlayers.forEach((player) => {
    upsertPlayer(client, timestamp, player)
  })
}

function upsertFormation(
  client: SQLiteDatabaseClient,
  timestamp: string,
  formation: typeof sampleFormations[number],
): void {
  client.execute(
    `INSERT INTO formations (
      id, name, slot_layout_json, tactic_tags_json, recommended_usage, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      name = excluded.name,
      slot_layout_json = excluded.slot_layout_json,
      tactic_tags_json = excluded.tactic_tags_json,
      recommended_usage = excluded.recommended_usage,
      updated_at = excluded.updated_at`,
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
}

function insertFormations(client: SQLiteDatabaseClient): void {
  const timestamp = getSeedTimestamp()

  sampleFormations.forEach((formation) => {
    upsertFormation(client, timestamp, formation)
  })
}

function upsertTactic(
  client: SQLiteDatabaseClient,
  timestamp: string,
  profile: typeof sampleTacticProfiles[number],
): void {
  client.execute(
    `INSERT INTO tactic_profiles (
      id, name, attack_bias, defensive_line, tempo, risk_appetite,
      event_weight_mod_json, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      name = excluded.name,
      attack_bias = excluded.attack_bias,
      defensive_line = excluded.defensive_line,
      tempo = excluded.tempo,
      risk_appetite = excluded.risk_appetite,
      event_weight_mod_json = excluded.event_weight_mod_json,
      updated_at = excluded.updated_at`,
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
}

function insertTactics(client: SQLiteDatabaseClient): void {
  const timestamp = getSeedTimestamp()

  sampleTacticProfiles.forEach((profile) => {
    upsertTactic(client, timestamp, profile)
  })

  sampleTeams.forEach((team, index) => {
    const defaultTactic = sampleTacticProfiles[index % sampleTacticProfiles.length]
    sampleTacticProfiles.forEach((profile, profileIndex) => {
      client.execute(
        `INSERT INTO team_tactic_profiles (
          id, team_id, tactic_profile_id, is_default, priority_order
        ) VALUES (?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
          team_id = excluded.team_id,
          tactic_profile_id = excluded.tactic_profile_id,
          is_default = excluded.is_default,
          priority_order = excluded.priority_order`,
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
      ) VALUES (?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        group_code = excluded.group_code,
        team_ids_json = excluded.team_ids_json,
        updated_at = excluded.updated_at`,
      [group.id, group.groupCode, JSON.stringify(group.teamIds), timestamp, timestamp],
    )
  })

  sampleFixtures.forEach((fixture) => {
    client.execute(
      `INSERT INTO match_fixtures (
        id, stage, round_code, group_code, home_team_id, away_team_id,
        fixture_order, knockout_slot, depends_on_json, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        stage = excluded.stage,
        round_code = excluded.round_code,
        group_code = excluded.group_code,
        home_team_id = excluded.home_team_id,
        away_team_id = excluded.away_team_id,
        fixture_order = excluded.fixture_order,
        knockout_slot = excluded.knockout_slot,
        depends_on_json = excluded.depends_on_json,
        updated_at = excluded.updated_at`,
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
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        category = excluded.category,
        code = excluded.code,
        title = excluded.title,
        trigger_phase = excluded.trigger_phase,
        trigger_condition_json = excluded.trigger_condition_json,
        text_template = excluded.text_template,
        base_weight = excluded.base_weight,
        repeat_rule = excluded.repeat_rule,
        chain_next_codes_json = excluded.chain_next_codes_json,
        effect_summary_json = excluded.effect_summary_json,
        updated_at = excluded.updated_at`,
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
      ) VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        event_template_id = excluded.event_template_id,
        option_key = excluded.option_key,
        label = excluded.label,
        effect_json = excluded.effect_json,
        sort_order = excluded.sort_order`,
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
  insertTeams(client)
  insertPlayers(client)
  insertFormations(client)
  insertTactics(client)
  insertTournamentData(client)
  insertEvents(client)
}
