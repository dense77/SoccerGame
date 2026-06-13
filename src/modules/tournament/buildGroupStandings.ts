import type { SaveTeamState, Team, TeamStandingEntry } from '../../types/entities'

export function buildGroupStandings(
  teams: Team[],
  teamStates: SaveTeamState[],
  selectedTeamId: string,
  options: {
    markQualified?: boolean
  } = {},
): TeamStandingEntry[] {
  const stateByTeamId = new Map(teamStates.map((state) => [state.teamId, state]))

  return teams
    .map((team) => {
      const state = stateByTeamId.get(team.id)

      if (!state) {
        throw new Error(`Missing tournament state for team ${team.id}`)
      }

      return {
        team,
        groupPoints: state.groupPoints,
        goalFor: state.goalFor,
        goalAgainst: state.goalAgainst,
        goalDiff: state.goalDiff,
        wins: state.wins,
        draws: state.draws,
        losses: state.losses,
        isQualified: false,
        isEliminated: state.isEliminated,
        isSelectedTeam: team.id === selectedTeamId,
      }
    })
    .sort((left, right) => {
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
    })
    .map((entry, index) => ({
      ...entry,
      isQualified: options.markQualified === true ? index < 2 : false,
    }))
}
