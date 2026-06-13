import { describe, expect, it } from 'vitest'

import { sampleEventOptions } from '../../data/seeds/sampleData'
import type { MatchSetupOverview } from '../../types/entities'
import { loadMatchEventSelection } from '../../modules/event-system/loadMatchEventSelection'
import { resolveEventOption } from '../../modules/event-system/resolveEventOption'
import { createTestDatabase } from '../helpers/createTestDatabase'

function createSetupStub(): MatchSetupOverview {
  return {
    fixture: {
      id: 'fixture-a-1',
      stage: 'group',
      roundCode: 'group-round-1',
      groupCode: 'A',
      homeTeamId: 'team-arg-sample',
      awayTeamId: 'team-usa-sample',
      fixtureOrder: 1,
      knockoutSlot: null,
      dependsOn: [],
    },
    team: {
      id: 'team-arg-sample',
      name: 'Argentina (Sample)',
      shortName: 'Argentina',
      fifaCode: 'ARG',
      groupCode: 'A',
      defaultFormationId: 'formation-4-3-3',
      styleTags: ['control', 'central_control'],
      overallRating: 89,
      goalkeepingRating: 87,
      defenseRating: 88,
      midfieldRating: 90,
      attackRating: 91,
    },
    formationOptions: [],
    tacticOptions: [],
    selectedFormation: {
      id: 'formation-4-3-3',
      name: '4-3-3',
      slotLayout: ['GK', 'LB', 'CB', 'CB', 'RB', 'CM', 'CM', 'CM', 'LW', 'RW', 'ST'],
      tacticTags: ['wing_play', 'high_press'],
      recommendedUsage: 'Balanced attacking setup for strong wide players.',
    },
    selectedTactic: {
      id: 'tactic-high-press',
      name: 'High Press',
      attackBias: 1,
      defensiveLine: 1,
      tempo: 1,
      riskAppetite: 1,
      eventWeightModifiers: { tactic_adjustment: 2, substitution: 1 },
    },
    players: Array.from({ length: 11 }, (_, index) => ({
      player: {
        id: `player-${index + 1}`,
        teamId: 'team-arg-sample',
        name: `Player ${index + 1}`,
        shirtNumber: index + 1,
        primaryPosition: index === 0 ? 'GK' : 'CM',
        secondaryPositions: [],
        overallRating: 80,
        attackRating: 80,
        defenseRating: 80,
        staminaRating: 80,
        mentalityRating: 80,
        positionFitRating: 85,
        isCorePlayer: index < 3,
        statusTag: 'available',
      },
      state: {
        id: `state-${index + 1}`,
        saveSlotId: 'save-test',
        playerId: `player-${index + 1}`,
        statusTag: 'available',
        fitnessValue: 100,
        moraleValue: 72,
        yellowCardCount: 0,
        injuryFlag: false,
        suspensionFlag: false,
        lastMatchMinutes: 0,
      },
      isStarter: true,
    })),
    validation: {
      isValid: true,
      errors: [],
    },
  }
}

describe('event system', () => {
  it('resolves option effects into simulation modifiers', () => {
    const option = sampleEventOptions.find((entry) => entry.optionKey === 'push_fullbacks')
    if (!option) {
      throw new Error('Missing sample event option.')
    }

    expect(resolveEventOption(option)).toEqual({
      attackDelta: 2,
      defenseDelta: -1,
      moraleDelta: 0,
      fitnessDelta: 0,
      contextTags: ['late_push'],
    })
  })

  it('loads the best matching event selection and preserves a preferred option', async () => {
    const client = await createTestDatabase()
    const setup = createSetupStub()
    const selection = loadMatchEventSelection(
      client,
      setup,
      'in-match',
      'event-option-tactic-late-push-no',
    )

    expect(selection?.template.code).toBe('TACTIC_LATE_PUSH')
    expect(selection?.selectedOptionId).toBe('event-option-tactic-late-push-no')
    expect(selection?.resolvedModifier?.attackDelta).toBe(0)
  })

  it('returns an unselected pre-match event until the player makes a choice', async () => {
    const client = await createTestDatabase()
    const setup = createSetupStub()
    const selection = loadMatchEventSelection(client, setup, 'pre-match')

    expect(selection).not.toBeNull()
    expect(selection?.phaseGroup).toBe('pre-match')
    expect(selection?.selectedOptionId).toBeNull()
    expect(selection?.resolvedModifier?.attackDelta).toBe(0)
  })
})
