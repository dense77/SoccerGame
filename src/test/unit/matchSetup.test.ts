import { describe, expect, it } from 'vitest'

import { buildDefaultMatchSetup } from '../../modules/team-management/buildDefaultMatchSetup'
import { validateMatchSetup } from '../../modules/team-management/validateMatchSetup'
import { sampleFixtures, samplePlayers, sampleTacticProfiles, sampleTeams, sampleFormations } from '../../data/seeds/sampleData'
import type { ManagedPlayer } from '../../types/entities'

describe('team management match setup', () => {
  it('builds a default lineup with 11 starters and remaining bench players', () => {
    const roster = samplePlayers.filter((player) => player.teamId === 'team-arg-sample')
    const setup = buildDefaultMatchSetup(
      'save-test',
      sampleFixtures[0],
      sampleTeams[0],
      roster,
      sampleTacticProfiles[0],
    )

    expect(setup.startingPlayerIds).toHaveLength(11)
    expect(setup.benchPlayerIds).toHaveLength(15)
    expect(setup.formationId).toBe(sampleTeams[0].defaultFormationId)
  })

  it('rejects a lineup without exactly one goalkeeper', () => {
    const roster = samplePlayers
      .filter((player) => player.teamId === 'team-arg-sample')
      .map<ManagedPlayer>((player, index) => ({
        player,
        state: {
          id: `state-${player.id}`,
          saveSlotId: 'save-test',
          playerId: player.id,
          statusTag: 'available',
          fitnessValue: 100,
          moraleValue: 70,
          yellowCardCount: 0,
          injuryFlag: false,
          suspensionFlag: false,
          lastMatchMinutes: 0,
        },
        isStarter: index < 11 && player.primaryPosition !== 'GK',
      }))

    const validation = validateMatchSetup(sampleFormations[0], roster)

    expect(validation.isValid).toBe(false)
    expect(validation.errors).toContain('Starting lineup must include exactly one goalkeeper.')
  })
})
