export interface Team {
  id: string
  name: string
  shortName: string
  fifaCode: string
  groupCode: string
  defaultFormationId: string
  styleTags: string[]
  overallRating: number
  goalkeepingRating: number
  defenseRating: number
  midfieldRating: number
  attackRating: number
}

export interface Player {
  id: string
  teamId: string
  name: string
  shirtNumber: number
  primaryPosition: string
  secondaryPositions: string[]
  overallRating: number
  attackRating: number
  defenseRating: number
  staminaRating: number
  mentalityRating: number
  positionFitRating: number
  isCorePlayer: boolean
  statusTag: string
}

export interface Formation {
  id: string
  name: string
  slotLayout: string[]
  tacticTags: string[]
  recommendedUsage: string
}

export interface TacticProfile {
  id: string
  name: string
  attackBias: number
  defensiveLine: number
  tempo: number
  riskAppetite: number
  eventWeightModifiers: Record<string, number>
}

export interface TournamentGroup {
  id: string
  groupCode: string
  teamIds: string[]
}

export interface MatchFixture {
  id: string
  stage: string
  roundCode: string
  groupCode: string | null
  homeTeamId: string | null
  awayTeamId: string | null
  fixtureOrder: number
  knockoutSlot: string | null
  dependsOn: string[]
}

export interface EventTemplate {
  id: string
  code: string
  category: string
  title: string
  triggerPhase: string
  triggerCondition: Record<string, unknown>
  textTemplate: string
  baseWeight: number
  repeatRule: string
  chainNextCodes: string[]
  effectSummary: Record<string, unknown>
}

export interface EventOption {
  id: string
  eventTemplateId: string
  optionKey: string
  label: string
  effect: Record<string, unknown>
  sortOrder: number
}

export interface SaveSlot {
  id: string
  selectedTeamId: string
  currentStage: string
  currentRoundCode: string
  status: string
}

export interface SaveTeamState {
  id: string
  saveSlotId: string
  teamId: string
  groupPoints: number
  goalFor: number
  goalAgainst: number
  goalDiff: number
  wins: number
  draws: number
  losses: number
  isEliminated: boolean
  currentMoraleMod: number
  currentFitnessMod: number
}

export interface SavePlayerState {
  id: string
  saveSlotId: string
  playerId: string
  statusTag: string
  fitnessValue: number
  moraleValue: number
  yellowCardCount: number
  injuryFlag: boolean
  suspensionFlag: boolean
  lastMatchMinutes: number
}

export interface TeamStandingEntry {
  team: Team
  groupPoints: number
  goalFor: number
  goalAgainst: number
  goalDiff: number
  wins: number
  draws: number
  losses: number
  isSelectedTeam: boolean
}

export interface SaveOverview {
  saveSlot: SaveSlot
  selectedTeam: Team
  groupStandings: TeamStandingEntry[]
  currentFixtures: MatchFixture[]
  rosterSize: number
}

export interface SaveMatchSetup {
  id: string
  saveSlotId: string
  fixtureId: string
  teamId: string
  formationId: string
  tacticProfileId: string
  startingPlayerIds: string[]
  benchPlayerIds: string[]
}

export interface ManagedPlayer {
  player: Player
  state: SavePlayerState
  isStarter: boolean
}

export interface MatchSetupValidation {
  isValid: boolean
  errors: string[]
}

export interface MatchSetupOverview {
  fixture: MatchFixture
  team: Team
  formationOptions: Formation[]
  tacticOptions: TacticProfile[]
  selectedFormation: Formation
  selectedTactic: TacticProfile
  players: ManagedPlayer[]
  validation: MatchSetupValidation
}

export interface DatabaseSummary {
  teamCount: number
  playerCount: number
  formationCount: number
  tacticProfileCount: number
  fixtureCount: number
  eventTemplateCount: number
}
