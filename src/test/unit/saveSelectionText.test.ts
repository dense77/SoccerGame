import { describe, expect, it } from 'vitest'

import { buildSaveSelectionCardText } from '../../app/saveSelectionText'
import type { SaveSelectionEntry } from '../../types/entities'

function createEntry(overrides: Partial<SaveSelectionEntry> = {}): SaveSelectionEntry {
  return {
    saveSlotId: 'save-1',
    selectedTeam: {
      id: 'team-arg-sample',
      name: '阿根廷（示例）',
      shortName: '阿根廷',
      fifaCode: 'ARG',
      groupCode: 'A',
      defaultFormationId: 'formation-4-3-3',
      styleTags: ['control'],
      overallRating: 89,
      goalkeepingRating: 87,
      defenseRating: 88,
      midfieldRating: 90,
      attackRating: 91,
    },
    currentStage: 'group',
    currentRoundCode: 'group-round-2',
    status: 'active',
    tournamentOutcome: 'in_progress',
    completedMatchCount: 1,
    latestPostMatchReport: null,
    tournamentSummary: null,
    ...overrides,
  }
}

describe('buildSaveSelectionCardText', () => {
  it('uses tournament summary detail when available', () => {
    const text = buildSaveSelectionCardText(
      createEntry({
        tournamentSummary: {
          title: '世界杯冠军',
          detail: '阿根廷在决赛中夺冠。',
          tone: 'success',
        },
      }),
    )

    expect(text.title).toBe('阿根廷（ARG）')
    expect(text.meta).toContain('小组赛')
    expect(text.progress).toContain('进行中')
    expect(text.highlight).toBe('阿根廷在决赛中夺冠。')
  })

  it('falls back to latest match summary when no tournament summary exists', () => {
    const text = buildSaveSelectionCardText(
      createEntry({
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
    )

    expect(text.highlight).toBe('上一场：阿根廷 2-1 美国，胜。')
  })

  it('shows opening-state copy when no match has been played', () => {
    const text = buildSaveSelectionCardText(
      createEntry({
        completedMatchCount: 0,
      }),
    )

    expect(text.highlight).toBe('尚未进行比赛，已完成开局设置。')
  })
})
