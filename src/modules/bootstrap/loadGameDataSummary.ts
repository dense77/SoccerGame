import type { SQLiteDatabaseClient } from '../../data/db/sqlite'
import { EventRepository } from '../../data/repositories/EventRepository'
import { TeamRepository } from '../../data/repositories/TeamRepository'
import { TournamentRepository } from '../../data/repositories/TournamentRepository'
import type { DatabaseSummary } from '../../types/entities'

export function loadGameDataSummary(client: SQLiteDatabaseClient): DatabaseSummary {
  const teamRepository = new TeamRepository(client)
  const tournamentRepository = new TournamentRepository(client)
  const eventRepository = new EventRepository(client)
  const teams = teamRepository.getAllTeams()
  const players = teams.flatMap((team) => teamRepository.getPlayersByTeamId(team.id))

  return {
    teamCount: teams.length,
    playerCount: players.length,
    formationCount: client.query<{ total: number }>('SELECT COUNT(*) as total FROM formations')[0].total,
    tacticProfileCount:
      client.query<{ total: number }>('SELECT COUNT(*) as total FROM tactic_profiles')[0].total,
    fixtureCount: tournamentRepository.getFixturesByStage('group').length,
    eventTemplateCount: eventRepository.getAllTemplates().length,
  }
}
