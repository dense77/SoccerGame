import { describe, expect, it } from 'vitest'

import { buildPostMatchReport } from '../../modules/match-engine/buildPostMatchReport'
import type { ManagedPlayer, MatchEventSelection, MatchSnapshot, SavePlayerState } from '../../types/entities'

function createManagedPlayers(): ManagedPlayer[] {
  return Array.from({ length: 3 }, (_, index) => ({
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
      isCorePlayer: index < 2,
      statusTag: 'available',
    },
    state: {
      id: `state-${index + 1}`,
      saveSlotId: 'save-1',
      playerId: `player-${index + 1}`,
      statusTag: 'available',
      fitnessValue: index < 2 ? 100 : 94,
      moraleValue: 70,
      yellowCardCount: 0,
      injuryFlag: false,
      suspensionFlag: false,
      lastMatchMinutes: 0,
    },
    isStarter: index < 2,
  }))
}

function createNextStates(): SavePlayerState[] {
  return [
    {
      id: 'state-1',
      saveSlotId: 'save-1',
      playerId: 'player-1',
      statusTag: 'available',
      fitnessValue: 82,
      moraleValue: 74,
      yellowCardCount: 0,
      injuryFlag: false,
      suspensionFlag: false,
      lastMatchMinutes: 90,
    },
    {
      id: 'state-2',
      saveSlotId: 'save-1',
      playerId: 'player-2',
      statusTag: 'available',
      fitnessValue: 82,
      moraleValue: 74,
      yellowCardCount: 0,
      injuryFlag: false,
      suspensionFlag: false,
      lastMatchMinutes: 90,
    },
    {
      id: 'state-3',
      saveSlotId: 'save-1',
      playerId: 'player-3',
      statusTag: 'available',
      fitnessValue: 90,
      moraleValue: 74,
      yellowCardCount: 0,
      injuryFlag: false,
      suspensionFlag: false,
      lastMatchMinutes: 0,
    },
  ]
}

function createSnapshot(): MatchSnapshot {
  return {
    id: 'save-1-fixture-1',
    saveSlotId: 'save-1',
    fixtureId: 'fixture-1',
    stage: 'group',
    homeTeamId: 'team-arg-sample',
    awayTeamId: 'team-usa-sample',
    homeScore: 2,
    awayScore: 0,
    resultSummary: {},
    appliedModifiers: {},
    completedAt: '2026-06-13T00:00:00.000Z',
  }
}

function createEventSelection(): MatchEventSelection {
  return {
    phaseGroup: 'in-match',
    template: {
      id: 'event-template-1',
      code: 'TACTIC_LATE_PUSH',
      category: 'tactic_adjustment',
      title: 'Final Push',
      triggerPhase: 'second_half',
      triggerCondition: {},
      textTemplate: 'Push higher in the final minutes.',
      baseWeight: 10,
      repeatRule: 'once',
      chainNextCodes: [],
      effectSummary: {},
    },
    options: [
      {
        id: 'event-option-1',
        eventTemplateId: 'event-template-1',
        optionKey: 'push',
        label: 'Commit numbers forward',
        effect: {},
        sortOrder: 1,
      },
    ],
    selectedOptionId: 'event-option-1',
    resolvedModifier: {
      attackDelta: 2,
      defenseDelta: -1,
      moraleDelta: 1,
      fitnessDelta: 0,
      contextTags: ['late_push'],
    },
  }
}

describe('buildPostMatchReport', () => {
  it('summarizes player state changes and chosen event effects', () => {
    const report = buildPostMatchReport({
      snapshot: createSnapshot(),
      selectedTeamId: 'team-arg-sample',
      selectedTeamName: 'Argentina',
      opponentTeamName: 'USA',
      players: createManagedPlayers(),
      nextPlayerStates: createNextStates(),
      selectedEvents: [createEventSelection()],
    })

    expect(report.resultLabel).toBe('win')
    expect(report.stage).toBe('group')
    expect(report.scoreline).toBe('2-0')
    expect(report.fitnessChangeSummary.startersAverageDelta).toBe(-18)
    expect(report.fitnessChangeSummary.benchAverageDelta).toBe(-4)
    expect(report.moraleChangeSummary.teamAverageDelta).toBe(4)
    expect(report.eventReport?.optionLabel).toBe('Commit numbers forward')
    expect(report.eventReports).toHaveLength(1)
    expect(report.eventReports[0].phaseGroup).toBe('in-match')
    expect(report.playerChanges[0].minutesPlayed).toBe(90)
  })
})
