import type {
  MatchFixture,
  Player,
  SaveMatchSetup,
  TacticProfile,
  Team,
} from '../../types/entities'

function pickBestPlayers(
  players: Player[],
  count: number,
  usedPlayerIds: Set<string>,
): Player[] {
  const selected = players
    .filter((player) => !usedPlayerIds.has(player.id))
    .sort((left, right) => {
      if (right.overallRating !== left.overallRating) {
        return right.overallRating - left.overallRating
      }

      return left.shirtNumber - right.shirtNumber
    })
    .slice(0, count)

  selected.forEach((player) => {
    usedPlayerIds.add(player.id)
  })

  return selected
}

export function buildDefaultMatchSetup(
  saveSlotId: string,
  fixture: MatchFixture,
  team: Team,
  roster: Player[],
  defaultTactic: TacticProfile,
): SaveMatchSetup {
  const usedPlayerIds = new Set<string>()
  const goalkeepers = roster.filter((player) => player.primaryPosition === 'GK')
  const defenders = roster.filter((player) => player.primaryPosition === 'DF')
  const midfielders = roster.filter((player) => player.primaryPosition === 'MF')
  const forwards = roster.filter((player) => player.primaryPosition === 'FW')
  const slotCounts = team.defaultFormationId === 'formation-3-5-2'
    ? { DF: 3, MF: 5, FW: 2 }
    : team.defaultFormationId === 'formation-3-4-3'
      ? { DF: 3, MF: 4, FW: 3 }
      : team.defaultFormationId === 'formation-4-4-2'
        ? { DF: 4, MF: 4, FW: 2 }
        : team.defaultFormationId === 'formation-4-3-3'
          ? { DF: 4, MF: 3, FW: 3 }
          : { DF: 4, MF: 4, FW: 2 }

  const starters = [
    ...pickBestPlayers(goalkeepers, 1, usedPlayerIds),
    ...pickBestPlayers(defenders, slotCounts.DF, usedPlayerIds),
    ...pickBestPlayers(midfielders, slotCounts.MF, usedPlayerIds),
    ...pickBestPlayers(forwards, slotCounts.FW, usedPlayerIds),
  ]

  if (starters.length < 11) {
    starters.push(...pickBestPlayers(roster, 11 - starters.length, usedPlayerIds))
  }

  const startingPlayerIds = starters.map((player) => player.id)
  const benchPlayerIds = [...roster]
    .filter((player) => !usedPlayerIds.has(player.id))
    .sort((left, right) => left.shirtNumber - right.shirtNumber)
    .map((player) => player.id)

  return {
    id: `${saveSlotId}-${fixture.id}-${team.id}`,
    saveSlotId,
    fixtureId: fixture.id,
    teamId: team.id,
    formationId: team.defaultFormationId,
    tacticProfileId: defaultTactic.id,
    startingPlayerIds,
    benchPlayerIds,
  }
}
