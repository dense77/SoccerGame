import { SaveRepository } from '../../data/repositories/SaveRepository'
import { TeamRepository } from '../../data/repositories/TeamRepository'
import { TournamentRepository } from '../../data/repositories/TournamentRepository'
import type { SQLiteDatabaseClient } from '../../data/db/sqlite'
import type { MatchFixture } from '../../types/entities'
import { sampleThirdPlaceCombinationMap } from '../../data/seeds/sampleData'
import { getQualifiedTeamIdsFromGroupStage } from './groupStageResolution'

function buildPlacementMap(
  client: SQLiteDatabaseClient,
  saveSlotId: string,
): Map<string, string> {
  const placements = new Map<string, string>()
  const teamRepository = new TeamRepository(client)
  const resolution = getQualifiedTeamIdsFromGroupStage(client, saveSlotId)
  const bestThirdPlacedTeamIdSet = new Set(resolution.bestThirdPlacedTeamIds)

  resolution.groupStandings.forEach((group) => {
    group.standings.forEach((entry, index) => {
      const placementCode = `${group.groupCode}${index + 1}`
      placements.set(placementCode, entry.team.id)

      if (index < 4) {
        placements.set(`${index + 1}${group.groupCode}`, entry.team.id)
      }

      if (index === 2 && bestThirdPlacedTeamIdSet.has(entry.team.id)) {
        placements.set(`${group.groupCode}3`, entry.team.id)
        placements.set(`3${group.groupCode}`, entry.team.id)
      }
    })
  })

  const bestThirdGroups = resolution.bestThirdPlacedTeamIds
    .map((teamId) => teamRepository.getTeamById(teamId))
    .filter((team): team is NonNullable<typeof team> => Boolean(team))
    .map((team) => team.groupCode)
    .sort()
    .join('')
  const thirdPlaceMapping = sampleThirdPlaceCombinationMap[
    bestThirdGroups as keyof typeof sampleThirdPlaceCombinationMap
  ]

  if (thirdPlaceMapping) {
    const mappings = [
      ['3P-A1', thirdPlaceMapping.forA],
      ['3P-B1', thirdPlaceMapping.forB],
      ['3P-D1', thirdPlaceMapping.forD],
      ['3P-E1', thirdPlaceMapping.forE],
      ['3P-G1', thirdPlaceMapping.forG],
      ['3P-I1', thirdPlaceMapping.forI],
      ['3P-K1', thirdPlaceMapping.forK],
      ['3P-L1', thirdPlaceMapping.forL],
    ] as const

    mappings.forEach(([slot, source]) => {
      const teamId = placements.get(source)
      if (teamId) {
        placements.set(slot, teamId)
      }
    })
  }

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
      winners.set(`L:${snapshot.fixtureId}`, snapshot.awayTeamId)
      return
    }

    winners.set(`W:${snapshot.fixtureId}`, snapshot.awayTeamId)
    winners.set(`L:${snapshot.fixtureId}`, snapshot.homeTeamId)
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

  if (source.startsWith('L:')) {
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
