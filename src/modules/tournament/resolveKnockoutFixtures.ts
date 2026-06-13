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

function buildWinnerMap(
  client: SQLiteDatabaseClient,
  saveSlotId: string,
): Map<string, string> {
  const saveRepository = new SaveRepository(client)
  const winners = new Map<string, string>()

  saveRepository.getMatchSnapshotsBySaveSlotId(saveSlotId).forEach((snapshot) => {
    if (snapshot.homeScore > snapshot.awayScore) {
      winners.set(`W:${snapshot.fixtureId}`, snapshot.homeTeamId)
      return
    }

    winners.set(`W:${snapshot.fixtureId}`, snapshot.awayTeamId)
  })

  return winners
}

function resolveDependencySource(
  source: string | undefined,
  placementMap: Map<string, string>,
  winnerMap: Map<string, string>,
): string | null {
  if (!source) {
    return null
  }

  if (source.startsWith('W:')) {
    return winnerMap.get(source) ?? null
  }

  return placementMap.get(source) ?? null
}

export function resolveKnockoutFixtures(
  client: SQLiteDatabaseClient,
  saveSlotId: string,
  roundCode: string,
): MatchFixture[] {
  const tournamentRepository = new TournamentRepository(client)
  const placementMap = buildPlacementMap(client, saveSlotId)
  const winnerMap = buildWinnerMap(client, saveSlotId)

  return tournamentRepository.getFixturesByRoundCode(roundCode).map((fixture) => {
    if (fixture.dependsOn.length === 0) {
      return fixture
    }

    const [homeSource, awaySource] = fixture.dependsOn

    return {
      ...fixture,
      homeTeamId: resolveDependencySource(homeSource, placementMap, winnerMap) ?? fixture.homeTeamId,
      awayTeamId: resolveDependencySource(awaySource, placementMap, winnerMap) ?? fixture.awayTeamId,
    }
  })
}
