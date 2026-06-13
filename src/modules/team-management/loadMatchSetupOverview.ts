import { SaveRepository } from '../../data/repositories/SaveRepository'
import { SetupRepository } from '../../data/repositories/SetupRepository'
import { TeamRepository } from '../../data/repositories/TeamRepository'
import { TournamentRepository } from '../../data/repositories/TournamentRepository'
import type { SQLiteDatabaseClient } from '../../data/db/sqlite'
import type {
  ManagedPlayer,
  MatchSetupOverview,
  SaveMatchSetup,
} from '../../types/entities'
import { buildDefaultMatchSetup } from './buildDefaultMatchSetup'
import { validateMatchSetup } from './validateMatchSetup'
import { resolveKnockoutFixtures } from '../tournament/resolveKnockoutFixtures'

export function loadMatchSetupOverview(
  client: SQLiteDatabaseClient,
  saveSlotId: string,
): MatchSetupOverview {
  const saveRepository = new SaveRepository(client)
  const teamRepository = new TeamRepository(client)
  const tournamentRepository = new TournamentRepository(client)
  const setupRepository = new SetupRepository(client)
  const saveSlot = saveRepository.getSaveSlotById(saveSlotId)

  if (!saveSlot) {
    throw new Error(`Save slot was not found: ${saveSlotId}`)
  }

  const team = teamRepository.getTeamById(saveSlot.selectedTeamId)
  if (!team) {
    throw new Error(`Selected team was not found for save slot: ${saveSlotId}`)
  }

  const fixtures =
    saveSlot.currentStage === 'knockout'
      ? resolveKnockoutFixtures(client, saveSlot.id, saveSlot.currentRoundCode)
      : tournamentRepository.getFixturesByRoundCode(saveSlot.currentRoundCode)
  const fixture = fixtures.find(
    (currentFixture) =>
      currentFixture.homeTeamId === team.id || currentFixture.awayTeamId === team.id,
  )

  if (!fixture) {
    throw new Error(`No current fixture was found for team ${team.id}`)
  }

  const roster = teamRepository.getPlayersByTeamId(team.id)
  const playerStates = saveRepository.getPlayerStatesBySaveSlotId(saveSlot.id)
  const stateByPlayerId = new Map(playerStates.map((state) => [state.playerId, state]))

  const formationOptions = setupRepository.getAllFormations()
  const tacticOptions = setupRepository.getTacticProfilesByTeamId(team.id)
  const savedSetup = saveRepository.getMatchSetup(saveSlot.id, fixture.id)
  const fallbackTactic = setupRepository.getDefaultTacticProfileByTeamId(team.id)

  if (!fallbackTactic) {
    throw new Error(`No default tactic profile configured for team ${team.id}`)
  }

  const selectedSetup: SaveMatchSetup =
    savedSetup ?? buildDefaultMatchSetup(saveSlot.id, fixture, team, roster, fallbackTactic)

  const selectedFormation = formationOptions.find(
    (formation) => formation.id === selectedSetup.formationId,
  )
  const selectedTactic = tacticOptions.find(
    (tactic) => tactic.id === selectedSetup.tacticProfileId,
  )

  if (!selectedFormation || !selectedTactic) {
    throw new Error(`Saved setup references missing formation or tactic for ${team.id}`)
  }

  const starterIds = new Set(selectedSetup.startingPlayerIds)
  const players: ManagedPlayer[] = roster.map((player) => {
    const state = stateByPlayerId.get(player.id)

    if (!state) {
      throw new Error(`Missing player state for player ${player.id}`)
    }

    return {
      player,
      state,
      isStarter: starterIds.has(player.id),
    }
  })

  return {
    fixture,
    team,
    formationOptions,
    tacticOptions,
    selectedFormation,
    selectedTactic,
    players,
    validation: validateMatchSetup(selectedFormation, players),
  }
}
