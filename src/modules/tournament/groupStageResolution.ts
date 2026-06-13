import { SaveRepository } from '../../data/repositories/SaveRepository'
import { TeamRepository } from '../../data/repositories/TeamRepository'
import { TournamentRepository } from '../../data/repositories/TournamentRepository'
import type { SQLiteDatabaseClient } from '../../data/db/sqlite'
import type { TeamStandingEntry } from '../../types/entities'
import { buildGroupStandings } from './buildGroupStandings'

export interface GroupStandingBundle {
  groupCode: string
  standings: TeamStandingEntry[]
}

function compareStandings(left: TeamStandingEntry, right: TeamStandingEntry): number {
  if (right.groupPoints !== left.groupPoints) {
    return right.groupPoints - left.groupPoints
  }

  if (right.goalDiff !== left.goalDiff) {
    return right.goalDiff - left.goalDiff
  }

  if (right.goalFor !== left.goalFor) {
    return right.goalFor - left.goalFor
  }

  return right.team.overallRating - left.team.overallRating
}

export function buildAllGroupStandings(
  client: SQLiteDatabaseClient,
  saveSlotId: string,
): GroupStandingBundle[] {
  const saveRepository = new SaveRepository(client)
  const teamRepository = new TeamRepository(client)
  const tournamentRepository = new TournamentRepository(client)
  const teamStates = saveRepository.getTeamStatesBySaveSlotId(saveSlotId)

  return tournamentRepository.getGroups().map((group) => ({
    groupCode: group.groupCode,
    standings: buildGroupStandings(
      group.teamIds
        .map((teamId) => teamRepository.getTeamById(teamId))
        .filter((team): team is NonNullable<typeof team> => Boolean(team)),
      teamStates,
      '',
      { markQualified: false },
    ),
  }))
}

export function getQualifiedTeamIdsFromGroupStage(
  client: SQLiteDatabaseClient,
  saveSlotId: string,
): {
  automaticQualifiedTeamIds: string[]
  bestThirdPlacedTeamIds: string[]
  allQualifiedTeamIds: string[]
  groupStandings: GroupStandingBundle[]
} {
  const groupStandings = buildAllGroupStandings(client, saveSlotId)
  const automaticQualifiedTeamIds = groupStandings.flatMap((group) =>
    group.standings.slice(0, 2).map((entry) => entry.team.id),
  )
  const bestThirdPlacedTeamIds = groupStandings
    .map((group) => group.standings[2])
    .filter((entry): entry is TeamStandingEntry => Boolean(entry))
    .sort(compareStandings)
    .slice(0, 8)
    .map((entry) => entry.team.id)

  return {
    automaticQualifiedTeamIds,
    bestThirdPlacedTeamIds,
    allQualifiedTeamIds: [...automaticQualifiedTeamIds, ...bestThirdPlacedTeamIds],
    groupStandings,
  }
}
