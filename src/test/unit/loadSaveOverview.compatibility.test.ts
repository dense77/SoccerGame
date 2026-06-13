import { describe, expect, it } from 'vitest'

import { SaveRepository } from '../../data/repositories/SaveRepository'
import { createCareerSave } from '../../modules/save-progress/createCareerSave'
import { loadSaveOverview } from '../../modules/save-progress/loadSaveOverview'
import { createTestDatabase } from '../helpers/createTestDatabase'

describe('loadSaveOverview compatibility', () => {
  it('supports legacy post-match reports without eventReports array', async () => {
    const client = await createTestDatabase()
    const saveSlot = createCareerSave(client, 'team-arg-sample')
    const saveRepository = new SaveRepository(client)

    saveRepository.createMatchSnapshot({
      id: `${saveSlot.id}-fixture-a-1`,
      saveSlotId: saveSlot.id,
      fixtureId: 'fixture-a-1',
      stage: 'group',
      homeTeamId: 'team-arg-sample',
      awayTeamId: 'team-usa-sample',
      homeScore: 2,
      awayScore: 1,
      resultSummary: {
        postMatchReport: {
          snapshotId: `${saveSlot.id}-fixture-a-1`,
          fixtureId: 'fixture-a-1',
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
          eventReport: {
            phaseGroup: 'pre-match',
            templateId: 'event-pre-match-rotation-call',
            title: '赛前轮换请求',
            category: 'player_demand',
            optionId: 'event-option-pre-match-rotation-call-yes',
            optionLabel: '采纳建议，开场提速',
            phase: 'pre_match',
            modifier: {
              attackDelta: 1,
              defenseDelta: 0,
              moraleDelta: 1,
              fitnessDelta: 0,
              contextTags: ['fast_start'],
            },
          },
        },
      },
      appliedModifiers: {},
      completedAt: '2026-06-14T00:00:00.000Z',
    })

    const overview = loadSaveOverview(client, saveSlot.id)

    expect(overview.latestPostMatchReport).not.toBeNull()
    expect(overview.latestPostMatchReport?.eventReports).toHaveLength(1)
    expect(overview.latestPostMatchReport?.eventReports[0].optionLabel).toBe('采纳建议，开场提速')
  })
})
