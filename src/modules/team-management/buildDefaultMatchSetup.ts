import type {
  MatchFixture,
  Player,
  SaveMatchSetup,
  TacticProfile,
  Team,
} from '../../types/entities'

export function buildDefaultMatchSetup(
  saveSlotId: string,
  fixture: MatchFixture,
  team: Team,
  roster: Player[],
  defaultTactic: TacticProfile,
): SaveMatchSetup {
  const sortedRoster = [...roster].sort((left, right) => left.shirtNumber - right.shirtNumber)
  const startingPlayerIds = sortedRoster.slice(0, 11).map((player) => player.id)
  const benchPlayerIds = sortedRoster.slice(11).map((player) => player.id)

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
