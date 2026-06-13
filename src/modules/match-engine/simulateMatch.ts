import type {
  ManagedPlayer,
  MatchSimulationInput,
  MatchSimulationOutput,
} from '../../types/entities'

function average(values: number[]): number {
  if (values.length === 0) {
    return 0
  }

  return values.reduce((sum, value) => sum + value, 0) / values.length
}

function computeStarterStrength(starters: ManagedPlayer[]): number {
  return average(
    starters.map((entry) => {
      const fitnessModifier = (entry.state.fitnessValue - 70) * 0.12
      const moraleModifier = (entry.state.moraleValue - 60) * 0.08
      const availabilityPenalty =
        entry.state.injuryFlag || entry.state.suspensionFlag ? -25 : 0

      return entry.player.overallRating + fitnessModifier + moraleModifier + availabilityPenalty
    }),
  )
}

function applyEventModifier(
  baseStrength: number,
  attackDelta: number,
  defenseDelta: number,
  moraleDelta: number,
  fitnessDelta: number,
): number {
  return (
    baseStrength +
    attackDelta * 1.8 +
    defenseDelta * 1.1 +
    moraleDelta * 1.4 +
    fitnessDelta * 0.9
  )
}

function computeFormationModifier(tags: string[]): number {
  if (tags.includes('high_press')) {
    return 1.5
  }

  if (tags.includes('counter_attack')) {
    return 1
  }

  return 0.5
}

function computeTacticModifier(
  attackBias: number,
  defensiveLine: number,
  tempo: number,
  riskAppetite: number,
): number {
  return attackBias * 1.2 + defensiveLine * 0.6 + tempo * 0.8 + riskAppetite * 0.7
}

function seededValue(seed: string): number {
  let hash = 0

  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) % 1000003
  }

  return (hash % 1000) / 1000
}

function deriveScoreline(delta: number, volatility: number): [number, number] {
  if (delta >= 12) {
    return volatility > 0.6 ? [3, 1] : [2, 0]
  }

  if (delta >= 6) {
    return volatility > 0.65 ? [2, 0] : [2, 1]
  }

  if (delta >= 2) {
    return volatility > 0.55 ? [1, 0] : [2, 1]
  }

  if (delta > -2) {
    return volatility > 0.5 ? [1, 1] : [0, 0]
  }

  if (delta > -6) {
    return volatility > 0.55 ? [0, 1] : [1, 2]
  }

  if (delta > -12) {
    return volatility > 0.65 ? [0, 2] : [1, 2]
  }

  return volatility > 0.6 ? [1, 3] : [0, 2]
}

export function simulateMatch(input: MatchSimulationInput): MatchSimulationOutput {
  const homeStrength =
    applyEventModifier(
      computeStarterStrength(input.home.starters) +
        computeFormationModifier(input.home.formation.tacticTags) +
        computeTacticModifier(
          input.home.tactic.attackBias,
          input.home.tactic.defensiveLine,
          input.home.tactic.tempo,
          input.home.tactic.riskAppetite,
        ),
      input.home.selectedEventModifier?.attackDelta ?? 0,
      input.home.selectedEventModifier?.defenseDelta ?? 0,
      input.home.selectedEventModifier?.moraleDelta ?? 0,
      input.home.selectedEventModifier?.fitnessDelta ?? 0,
    )

  const awayStrength =
    applyEventModifier(
      computeStarterStrength(input.away.starters) +
        computeFormationModifier(input.away.formation.tacticTags) +
        computeTacticModifier(
          input.away.tactic.attackBias,
          input.away.tactic.defensiveLine,
          input.away.tactic.tempo,
          input.away.tactic.riskAppetite,
        ),
      input.away.selectedEventModifier?.attackDelta ?? 0,
      input.away.selectedEventModifier?.defenseDelta ?? 0,
      input.away.selectedEventModifier?.moraleDelta ?? 0,
      input.away.selectedEventModifier?.fitnessDelta ?? 0,
    )

  const delta = Number((homeStrength - awayStrength).toFixed(2))
  const volatility = seededValue(
    `${input.saveSlotId}:${input.fixture.id}:${input.home.team.id}:${input.away.team.id}`,
  )
  const [homeScore, awayScore] = deriveScoreline(delta, volatility)

  return {
    fixtureId: input.fixture.id,
    homeTeamId: input.home.team.id,
    awayTeamId: input.away.team.id,
    homeScore,
    awayScore,
    resultSummary: {
      homeStrength: Number(homeStrength.toFixed(2)),
      awayStrength: Number(awayStrength.toFixed(2)),
      homeEventTags: input.home.selectedEventModifier?.contextTags ?? [],
      awayEventTags: input.away.selectedEventModifier?.contextTags ?? [],
      winner:
        homeScore === awayScore
          ? 'draw'
          : homeScore > awayScore
            ? input.home.team.id
            : input.away.team.id,
    },
    appliedModifiers: {
      homeStrength: Number(homeStrength.toFixed(2)),
      awayStrength: Number(awayStrength.toFixed(2)),
      delta,
      volatility: Number(volatility.toFixed(2)),
    },
  }
}
