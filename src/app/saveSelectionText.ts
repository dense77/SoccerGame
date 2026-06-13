import {
  translateResultLabel,
  translateRoundCode,
  translateSaveStatus,
  translateStage,
  translateTournamentOutcome,
} from './displayText'
import type { SaveSelectionEntry } from '../types/entities'

export interface SaveSelectionCardText {
  title: string
  meta: string
  progress: string
  highlight: string
}

export function buildSaveSelectionCardText(entry: SaveSelectionEntry): SaveSelectionCardText {
  const meta = `${translateStage(entry.currentStage)} · ${translateRoundCode(entry.currentRoundCode)}`
  const progress = `状态：${translateSaveStatus(entry.status)} · 赛事结果：${translateTournamentOutcome(entry.tournamentOutcome)}`

  if (entry.tournamentSummary) {
    return {
      title: `${entry.selectedTeam.shortName}（${entry.selectedTeam.fifaCode}）`,
      meta,
      progress,
      highlight: entry.tournamentSummary.detail,
    }
  }

  if (entry.latestPostMatchReport) {
    return {
      title: `${entry.selectedTeam.shortName}（${entry.selectedTeam.fifaCode}）`,
      meta,
      progress,
      highlight: `上一场：${entry.latestPostMatchReport.teamName} ${entry.latestPostMatchReport.scoreline} ${entry.latestPostMatchReport.opponentTeamName}，${translateResultLabel(entry.latestPostMatchReport.resultLabel)}。`,
    }
  }

  return {
    title: `${entry.selectedTeam.shortName}（${entry.selectedTeam.fifaCode}）`,
    meta,
    progress,
    highlight: entry.completedMatchCount === 0
      ? '尚未进行比赛，已完成开局设置。'
      : `已完成 ${entry.completedMatchCount} 场比赛。`,
  }
}
