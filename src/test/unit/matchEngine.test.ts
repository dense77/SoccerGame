import { describe, expect, it } from 'vitest'

import { sampleFixtures, sampleFormations, sampleTacticProfiles, sampleTeams } from '../../data/seeds/sampleData'
import type { ManagedPlayer, MatchSimulationInput } from '../../types/entities'
import { simulateMatch } from '../../modules/match-engine/simulateMatch'

function createManagedPlayers(teamId: string, overallBase: number): ManagedPlayer[] {
  return Array.from({ length: 11 }, (_, index) => ({
    player: {
      id: `${teamId}-player-${index + 1}`,
      teamId,
      name: `Player ${index + 1}`,
      shirtNumber: index + 1,
      primaryPosition: index === 0 ? 'GK' : 'CM',
      secondaryPositions: [],
      overallRating: overallBase,
      attackRating: overallBase,
      defenseRating: overallBase,
      staminaRating: 80,
      mentalityRating: 80,
      positionFitRating: 85,
      isCorePlayer: index < 3,
      statusTag: 'available',
    },
    state: {
      id: `${teamId}-state-${index + 1}`,
      saveSlotId: 'save-test',
      playerId: `${teamId}-player-${index + 1}`,
      statusTag: 'available',
      fitnessValue: 100,
      moraleValue: 72,
      yellowCardCount: 0,
      injuryFlag: false,
      suspensionFlag: false,
      lastMatchMinutes: 0,
    },
    isStarter: true,
  }))
}

describe('simulateMatch', () => {
  it('favors the stronger lineup in the output scoreline', () => {
    const input: MatchSimulationInput = {
      saveSlotId: 'save-test',
      fixture: sampleFixtures[0],
      home: {
        team: sampleTeams[0],
        formation: sampleFormations[0],
        tactic: sampleTacticProfiles[1],
        starters: createManagedPlayers('home', 88),
        bench: [],
      },
      away: {
        team: sampleTeams[3],
        formation: sampleFormations[1],
        tactic: sampleTacticProfiles[2],
        starters: createManagedPlayers('away', 75),
        bench: [],
      },
    }

    const result = simulateMatch(input)

    expect(result.homeScore).toBeGreaterThanOrEqual(result.awayScore)
    expect(result.appliedModifiers.delta).toBeGreaterThan(0)
  })
})
