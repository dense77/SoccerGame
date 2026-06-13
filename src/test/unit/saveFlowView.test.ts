import { describe, expect, it } from 'vitest'

import { resolveSaveFlowView } from '../../app/saveFlowView'
import type { SaveOverview } from '../../types/entities'

function createOverview(
  overrides: Partial<Pick<SaveOverview, 'saveSlot' | 'latestPostMatchReport' | 'tournamentOutcome'>> = {},
): Pick<SaveOverview, 'saveSlot' | 'latestPostMatchReport' | 'tournamentOutcome'> {
  return {
    saveSlot: {
      id: 'save-1',
      selectedTeamId: 'team-arg-sample',
      currentStage: 'group',
      currentRoundCode: 'group-round-2',
      status: 'active',
    },
    latestPostMatchReport: null,
    tournamentOutcome: 'in_progress',
    ...overrides,
  }
}

describe('resolveSaveFlowView', () => {
  it('keeps a newly created save on the dashboard', () => {
    expect(resolveSaveFlowView(createOverview(), 'new-save')).toBe('dashboard')
  })

  it('opens the post-match page after a round when a report exists', () => {
    expect(
      resolveSaveFlowView(
        createOverview({
          latestPostMatchReport: {
            snapshotId: 'snapshot-1',
            fixtureId: 'fixture-1',
            stage: 'group',
            roundCode: 'group-round-1',
            knockoutSlot: null,
            teamId: 'team-arg-sample',
            teamName: '阿根廷',
            opponentTeamName: '美国',
            scoreline: '2-1',
            resultLabel: 'win',
            fitnessChangeSummary: {
              startersAverageDelta: -18,
              benchAverageDelta: -4,
              mostAffectedPlayer: '阿根廷1号球员',
            },
            moraleChangeSummary: {
              teamAverageDelta: 4,
              mostBoostedPlayer: '阿根廷2号球员',
              mostDroppedPlayer: null,
            },
            playerChanges: [],
            eventReport: null,
          },
        }),
        'after-round',
      ),
    ).toBe('post-match')
  })

  it('opens the settlement page when the tournament is complete', () => {
    expect(
      resolveSaveFlowView(
        createOverview({
          saveSlot: {
            id: 'save-1',
            selectedTeamId: 'team-arg-sample',
            currentStage: 'knockout',
            currentRoundCode: 'tournament-complete',
            status: 'champion',
          },
          tournamentOutcome: 'champion',
        }),
        'resume',
      ),
    ).toBe('settlement')
  })
})
