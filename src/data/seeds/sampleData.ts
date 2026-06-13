import type {
  EventOption,
  EventTemplate,
  Formation,
  MatchFixture,
  Player,
  TacticProfile,
  Team,
  TournamentGroup,
} from '../../types/entities'

const seedTimestamp = '2026-06-13T00:00:00.000Z'

interface SeedTeamConfig {
  id: string
  name: string
  shortName: string
  fifaCode: string
  overallRating: number
  goalkeepingRating: number
  defenseRating: number
  midfieldRating: number
  attackRating: number
  styleTags: string[]
}

export const sampleFormations: Formation[] = [
  {
    id: 'formation-4-3-3',
    name: '4-3-3',
    slotLayout: ['GK', 'LB', 'CB', 'CB', 'RB', 'CM', 'CM', 'CM', 'LW', 'RW', 'ST'],
    tacticTags: ['wing_play', 'high_press'],
    recommendedUsage: 'Balanced attacking setup for strong wide players.',
  },
  {
    id: 'formation-4-2-3-1',
    name: '4-2-3-1',
    slotLayout: ['GK', 'LB', 'CB', 'CB', 'RB', 'DM', 'DM', 'LW', 'AM', 'RW', 'ST'],
    tacticTags: ['central_control', 'counter_attack'],
    recommendedUsage: 'Stable shape for tournament football.',
  },
]

export const sampleTacticProfiles: TacticProfile[] = [
  {
    id: 'tactic-balanced-control',
    name: 'Balanced Control',
    attackBias: 0,
    defensiveLine: 0,
    tempo: 0,
    riskAppetite: 0,
    eventWeightModifiers: { tactic_adjustment: 1 },
  },
  {
    id: 'tactic-high-press',
    name: 'High Press',
    attackBias: 1,
    defensiveLine: 1,
    tempo: 1,
    riskAppetite: 1,
    eventWeightModifiers: { tactic_adjustment: 2, substitution: 1 },
  },
  {
    id: 'tactic-low-block',
    name: 'Low Block',
    attackBias: -1,
    defensiveLine: -2,
    tempo: -1,
    riskAppetite: -1,
    eventWeightModifiers: { referee_conflict: -1, player_demand: 1 },
  },
]

const sampleTeamConfigs: SeedTeamConfig[] = [
  {
    id: 'team-arg-sample',
    name: 'Argentina (Sample)',
    shortName: 'Argentina',
    fifaCode: 'ARG',
    overallRating: 89,
    goalkeepingRating: 87,
    defenseRating: 88,
    midfieldRating: 90,
    attackRating: 91,
    styleTags: ['control', 'central_control'],
  },
  {
    id: 'team-usa-sample',
    name: 'United States (Sample)',
    shortName: 'USA',
    fifaCode: 'USA',
    overallRating: 82,
    goalkeepingRating: 82,
    defenseRating: 80,
    midfieldRating: 81,
    attackRating: 84,
    styleTags: ['high_press', 'wing_play'],
  },
  {
    id: 'team-jpn-sample',
    name: 'Japan (Sample)',
    shortName: 'Japan',
    fifaCode: 'JPN',
    overallRating: 81,
    goalkeepingRating: 80,
    defenseRating: 82,
    midfieldRating: 82,
    attackRating: 80,
    styleTags: ['compact', 'counter_attack'],
  },
  {
    id: 'team-sen-sample',
    name: 'Senegal (Sample)',
    shortName: 'Senegal',
    fifaCode: 'SEN',
    overallRating: 80,
    goalkeepingRating: 81,
    defenseRating: 81,
    midfieldRating: 79,
    attackRating: 80,
    styleTags: ['athletic', 'counter_attack'],
  },
]

function createPlayers(config: SeedTeamConfig): Player[] {
  const primaryPositions = [
    'GK',
    'LB',
    'CB',
    'CB',
    'RB',
    'DM',
    'CM',
    'AM',
    'LW',
    'RW',
    'ST',
    'GK',
    'CB',
    'CB',
    'LB',
    'RB',
    'DM',
    'CM',
    'CM',
    'LW',
    'RW',
    'ST',
    'ST',
    'AM',
    'CM',
    'CB',
  ]

  return primaryPositions.map((position, index) => {
    const shirtNumber = index + 1
    const depthPenalty = Math.floor(index / 6) * 2
    const overallRating = Math.max(config.overallRating - depthPenalty - (index > 10 ? 3 : 0), 68)

    return {
      id: `${config.id}-player-${shirtNumber}`,
      teamId: config.id,
      name: `${config.shortName} Player ${shirtNumber}`,
      shirtNumber,
      primaryPosition: position,
      secondaryPositions:
        position === 'CB'
          ? ['RB']
          : position === 'CM'
            ? ['DM', 'AM']
            : position === 'LW' || position === 'RW'
              ? ['AM', 'ST']
              : [],
      overallRating,
      attackRating: Math.max(Math.min(overallRating + (position === 'ST' || position === 'LW' || position === 'RW' ? 4 : 0), 95), 60),
      defenseRating: Math.max(Math.min(overallRating + (position === 'CB' || position === 'LB' || position === 'RB' || position === 'DM' ? 3 : -4), 92), 55),
      staminaRating: Math.max(Math.min(overallRating + 1, 94), 60),
      mentalityRating: Math.max(Math.min(overallRating, 92), 60),
      positionFitRating: position === 'GK' ? 95 : 88,
      isCorePlayer: shirtNumber <= 5,
      statusTag: 'available',
    }
  })
}

export const sampleTeams: Team[] = sampleTeamConfigs.map((config, index) => ({
  id: config.id,
  name: config.name,
  shortName: config.shortName,
  fifaCode: config.fifaCode,
  groupCode: 'A',
  defaultFormationId: index % 2 === 0 ? 'formation-4-3-3' : 'formation-4-2-3-1',
  styleTags: config.styleTags,
  overallRating: config.overallRating,
  goalkeepingRating: config.goalkeepingRating,
  defenseRating: config.defenseRating,
  midfieldRating: config.midfieldRating,
  attackRating: config.attackRating,
}))

export const samplePlayers: Player[] = sampleTeamConfigs.flatMap(createPlayers)

export const sampleTournamentGroups: TournamentGroup[] = [
  {
    id: 'group-a',
    groupCode: 'A',
    teamIds: sampleTeams.map((team) => team.id),
  },
]

export const sampleFixtures: MatchFixture[] = [
  {
    id: 'fixture-a-1',
    stage: 'group',
    roundCode: 'group-round-1',
    groupCode: 'A',
    homeTeamId: sampleTeams[0].id,
    awayTeamId: sampleTeams[1].id,
    fixtureOrder: 1,
    knockoutSlot: null,
    dependsOn: [],
  },
  {
    id: 'fixture-a-2',
    stage: 'group',
    roundCode: 'group-round-1',
    groupCode: 'A',
    homeTeamId: sampleTeams[2].id,
    awayTeamId: sampleTeams[3].id,
    fixtureOrder: 2,
    knockoutSlot: null,
    dependsOn: [],
  },
  {
    id: 'fixture-a-3',
    stage: 'group',
    roundCode: 'group-round-2',
    groupCode: 'A',
    homeTeamId: sampleTeams[0].id,
    awayTeamId: sampleTeams[2].id,
    fixtureOrder: 3,
    knockoutSlot: null,
    dependsOn: [],
  },
  {
    id: 'fixture-a-4',
    stage: 'group',
    roundCode: 'group-round-2',
    groupCode: 'A',
    homeTeamId: sampleTeams[1].id,
    awayTeamId: sampleTeams[3].id,
    fixtureOrder: 4,
    knockoutSlot: null,
    dependsOn: [],
  },
  {
    id: 'fixture-a-5',
    stage: 'group',
    roundCode: 'group-round-3',
    groupCode: 'A',
    homeTeamId: sampleTeams[0].id,
    awayTeamId: sampleTeams[3].id,
    fixtureOrder: 5,
    knockoutSlot: null,
    dependsOn: [],
  },
  {
    id: 'fixture-a-6',
    stage: 'group',
    roundCode: 'group-round-3',
    groupCode: 'A',
    homeTeamId: sampleTeams[1].id,
    awayTeamId: sampleTeams[2].id,
    fixtureOrder: 6,
    knockoutSlot: null,
    dependsOn: [],
  },
  {
    id: 'fixture-semi-1',
    stage: 'knockout',
    roundCode: 'knockout-semi',
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 7,
    knockoutSlot: 'semi-1',
    dependsOn: ['A1', 'A4'],
  },
  {
    id: 'fixture-semi-2',
    stage: 'knockout',
    roundCode: 'knockout-semi',
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 8,
    knockoutSlot: 'semi-2',
    dependsOn: ['A2', 'A3'],
  },
  {
    id: 'fixture-final-1',
    stage: 'knockout',
    roundCode: 'knockout-final',
    groupCode: null,
    homeTeamId: null,
    awayTeamId: null,
    fixtureOrder: 9,
    knockoutSlot: 'final',
    dependsOn: ['W:fixture-semi-1', 'W:fixture-semi-2'],
  },
]

export const sampleEventTemplates: EventTemplate[] = [
  {
    id: 'event-tactic-late-push',
    code: 'TACTIC_LATE_PUSH',
    category: 'tactic_adjustment',
    title: 'Late Push',
    triggerPhase: 'late_game',
    triggerCondition: { score_diff_range: [-1, 0], minute_bucket: 'late' },
    textTemplate: 'The match is slipping away. Do you push the fullbacks higher?',
    baseWeight: 8,
    repeatRule: 'once_per_match',
    chainNextCodes: ['SUB_IMPACT_WINGER'],
    effectSummary: { attack: 2, defense: -1 },
  },
  {
    id: 'event-sub-impact-winger',
    code: 'SUB_IMPACT_WINGER',
    category: 'substitution',
    title: 'Impact Winger',
    triggerPhase: 'second_half',
    triggerCondition: { has_bench_winger: true, team_fitness_range: [0, 60] },
    textTemplate: 'Your bench winger is fresh. Bring him on to attack tired legs?',
    baseWeight: 7,
    repeatRule: 'once_per_phase',
    chainNextCodes: [],
    effectSummary: { fitness: 1, attack: 1 },
  },
  {
    id: 'event-player-demand-core',
    code: 'PLAYER_DEMAND_CORE',
    category: 'player_demand',
    title: 'Core Player Demand',
    triggerPhase: 'half_time',
    triggerCondition: { has_core_player: true, team_morale_range: [40, 80] },
    textTemplate: 'Your captain wants the team to keep more of the ball after the break.',
    baseWeight: 6,
    repeatRule: 'once_per_match',
    chainNextCodes: [],
    effectSummary: { morale: 1, tactic: 'control' },
  },
  {
    id: 'event-referee-pressure',
    code: 'REFEREE_PRESSURE',
    category: 'referee_conflict',
    title: 'Referee Pressure',
    triggerPhase: 'first_half',
    triggerCondition: { score_diff_range: [-1, 1] },
    textTemplate: 'A close offside call sparks anger on your bench. Do you confront the fourth official?',
    baseWeight: 5,
    repeatRule: 'repeatable_with_cooldown',
    chainNextCodes: ['TACTIC_LATE_PUSH'],
    effectSummary: { morale: 1, risk: 1 },
  },
]

export const sampleEventOptions: EventOption[] = [
  {
    id: 'event-option-tactic-late-push-yes',
    eventTemplateId: 'event-tactic-late-push',
    optionKey: 'push_fullbacks',
    label: 'Push the fullbacks higher',
    effect: { modify_attack_bias: 2, modify_defense_bias: -1, add_context_tag: 'late_push' },
    sortOrder: 1,
  },
  {
    id: 'event-option-tactic-late-push-no',
    eventTemplateId: 'event-tactic-late-push',
    optionKey: 'hold_shape',
    label: 'Keep the current shape',
    effect: { modify_team_morale: -1 },
    sortOrder: 2,
  },
  {
    id: 'event-option-sub-impact-winger-yes',
    eventTemplateId: 'event-sub-impact-winger',
    optionKey: 'bring_winger',
    label: 'Introduce the winger now',
    effect: { swap_player: true, modify_attack_bias: 1 },
    sortOrder: 1,
  },
  {
    id: 'event-option-sub-impact-winger-no',
    eventTemplateId: 'event-sub-impact-winger',
    optionKey: 'wait',
    label: 'Wait five more minutes',
    effect: { modify_team_fitness: -1 },
    sortOrder: 2,
  },
  {
    id: 'event-option-player-demand-core-accept',
    eventTemplateId: 'event-player-demand-core',
    optionKey: 'accept',
    label: 'Back your captain publicly',
    effect: { modify_team_morale: 1, modify_event_weight: { tactic_adjustment: 1 } },
    sortOrder: 1,
  },
  {
    id: 'event-option-player-demand-core-reject',
    eventTemplateId: 'event-player-demand-core',
    optionKey: 'reject',
    label: 'Stick to the original plan',
    effect: { modify_team_morale: -1 },
    sortOrder: 2,
  },
  {
    id: 'event-option-referee-pressure-yes',
    eventTemplateId: 'event-referee-pressure',
    optionKey: 'pressure',
    label: 'Confront the fourth official',
    effect: { modify_team_morale: 1, add_context_tag: 'ref_pressure' },
    sortOrder: 1,
  },
  {
    id: 'event-option-referee-pressure-no',
    eventTemplateId: 'event-referee-pressure',
    optionKey: 'calm_down',
    label: 'Keep the bench calm',
    effect: { modify_team_morale: 0, modify_event_weight: { referee_conflict: -1 } },
    sortOrder: 2,
  },
]

export function getSeedTimestamp(): string {
  return seedTimestamp
}
