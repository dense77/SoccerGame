import type { MatchSetupOverview } from '../../types/entities'

export interface MatchEventContext {
  teamMorale: number
  teamFitness: number
  hasCorePlayer: boolean
  formationTags: string[]
  tacticTags: string[]
  scoreDiff: number
}

function average(values: number[]): number {
  if (values.length === 0) {
    return 0
  }

  return values.reduce((sum, value) => sum + value, 0) / values.length
}

export function buildMatchEventContext(setup: MatchSetupOverview): MatchEventContext {
  const starters = setup.players.filter((player) => player.isStarter)

  return {
    teamMorale: average(starters.map((player) => player.state.moraleValue)),
    teamFitness: average(starters.map((player) => player.state.fitnessValue)),
    hasCorePlayer: starters.some((player) => player.player.isCorePlayer),
    formationTags: setup.selectedFormation.tacticTags,
    tacticTags: Object.keys(setup.selectedTactic.eventWeightModifiers),
    scoreDiff: 0,
  }
}
