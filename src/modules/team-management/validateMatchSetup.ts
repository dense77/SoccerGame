import type { Formation, ManagedPlayer, MatchSetupValidation } from '../../types/entities'

export function validateMatchSetup(
  formation: Formation,
  managedPlayers: ManagedPlayer[],
): MatchSetupValidation {
  const starters = managedPlayers.filter((player) => player.isStarter)
  const errors: string[] = []

  if (starters.length !== formation.slotLayout.length) {
    errors.push(`首发阵容必须刚好包含 ${formation.slotLayout.length} 名球员。`)
  }

  const starterIds = new Set(starters.map((player) => player.player.id))
  if (starterIds.size !== starters.length) {
    errors.push('首发阵容中存在重复球员。')
  }

  const suspendedOrInjured = starters.filter(
    (player) => player.state.suspensionFlag || player.state.injuryFlag,
  )
  if (suspendedOrInjured.length > 0) {
    errors.push('停赛或受伤球员不能进入首发阵容。')
  }

  const goalkeeperCount = starters.filter(
    (player) => player.player.primaryPosition === 'GK',
  ).length
  if (goalkeeperCount !== 1) {
    errors.push('首发阵容必须恰好包含 1 名门将。')
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}
