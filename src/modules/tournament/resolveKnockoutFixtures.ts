import { SaveRepository } from '../../data/repositories/SaveRepository'
import { TeamRepository } from '../../data/repositories/TeamRepository'
import { TournamentRepository } from '../../data/repositories/TournamentRepository'
import type { SQLiteDatabaseClient } from '../../data/db/sqlite'
import type { MatchFixture } from '../../types/entities'
import { buildGroupStandings } from './buildGroupStandings'

function buildPlacementMap(
  client: SQLiteDatabaseClient,
  saveSlotId: string,
): Map<string, string> {
  const saveRepository = new SaveRepository(client)
  const teamRepository = new TeamRepository(client)
  const tournamentRepository = new TournamentRepository(client)
  const placements = new Map<string, string>()

  tournamentRepository.getGroups().forEach((group) => {
    const teams = group.teamIds
      .map((teamId) => teamRepository.getTeamById(teamId))
      .filter((team): team is NonNullable<typeof team> => Boolean(team))
    const standings = buildGroupStandings(
      teams,
      saveRepository.getTeamStatesBySaveSlotId(saveSlotId),
      '',
      { markQualified: true },
    )

    standings.forEach((entry, index) => {
      placements.set(`${group.groupCode}${index + 1}`, entry.team.id)
    })
  })

  return placements
}

export function resolveKnockoutFixtures(
  client: SQLiteDatabaseClient,
  saveSlotId: string,
  roundCode: string,
): MatchFixture[] {
  const tournamentRepository = new TournamentRepository(client)
  const placementMap = buildPlacementMap(client, saveSlotId)

  return tournamentRepository.getFixturesByRoundCode(roundCode).map((fixture) => {
    if (fixture.dependsOn.length === 0) {
      return fixture
    }

    const [homeSource, awaySource] = fixture.dependsOn

    return {
      ...fixture,
      homeTeamId: homeSource ? placementMap.get(homeSource) ?? null : fixture.homeTeamId,
      awayTeamId: awaySource ? placementMap.get(awaySource) ?? null : fixture.awayTeamId,
    }
  })
}
