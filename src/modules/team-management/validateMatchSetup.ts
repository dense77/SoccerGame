import type { Formation, ManagedPlayer, MatchSetupValidation } from '../../types/entities'

export function validateMatchSetup(
  formation: Formation,
  managedPlayers: ManagedPlayer[],
): MatchSetupValidation {
  const starters = managedPlayers.filter((player) => player.isStarter)
  const errors: string[] = []

  if (starters.length !== formation.slotLayout.length) {
    errors.push(`Starting lineup must contain exactly ${formation.slotLayout.length} players.`)
  }

  const starterIds = new Set(starters.map((player) => player.player.id))
  if (starterIds.size !== starters.length) {
    errors.push('Starting lineup contains duplicate players.')
  }

  const suspendedOrInjured = starters.filter(
    (player) => player.state.suspensionFlag || player.state.injuryFlag,
  )
  if (suspendedOrInjured.length > 0) {
    errors.push('Suspended or injured players cannot be included in the starting lineup.')
  }

  const goalkeeperCount = starters.filter(
    (player) => player.player.primaryPosition === 'GK',
  ).length
  if (goalkeeperCount !== 1) {
    errors.push('Starting lineup must include exactly one goalkeeper.')
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}
