const stageLabels: Record<string, string> = {
  group: '小组赛',
  knockout: '淘汰赛',
}

const roundLabels: Record<string, string> = {
  'group-round-1': '小组赛第 1 轮',
  'group-round-2': '小组赛第 2 轮',
  'group-round-3': '小组赛第 3 轮',
  'group-complete': '小组赛结束',
  'knockout-semi': '半决赛',
  'knockout-final': '决赛',
  'tournament-complete': '赛事结束',
}

const saveStatusLabels: Record<string, string> = {
  active: '进行中',
  qualified: '已晋级',
  eliminated: '已淘汰',
  champion: '已夺冠',
}

const tournamentOutcomeLabels: Record<string, string> = {
  in_progress: '进行中',
  qualified: '已晋级淘汰赛',
  eliminated: '已淘汰',
  champion: '世界杯冠军',
}

const resultLabels: Record<string, string> = {
  win: '胜',
  loss: '负',
  draw: '平',
}

const eventCategoryLabels: Record<string, string> = {
  tactic_adjustment: '战术调整',
  substitution: '换人调整',
  player_demand: '球员诉求',
  referee_conflict: '裁判冲突',
}

const positionLabels: Record<string, string> = {
  GK: '门将',
  LB: '左后卫',
  CB: '中后卫',
  RB: '右后卫',
  DM: '后腰',
  CM: '中前卫',
  AM: '前腰',
  LW: '左边锋',
  RW: '右边锋',
  ST: '前锋',
}

const selectedTeamOutcomeLabels: Record<string, string> = {
  qualified: '已晋级',
  eliminated: '已淘汰',
  pending: '待定',
}

export function translateStage(stage: string): string {
  return stageLabels[stage] ?? stage
}

export function translateRoundCode(roundCode: string): string {
  return roundLabels[roundCode] ?? roundCode
}

export function translateSaveStatus(status: string): string {
  return saveStatusLabels[status] ?? status
}

export function translateTournamentOutcome(outcome: string): string {
  return tournamentOutcomeLabels[outcome] ?? outcome
}

export function translateResultLabel(resultLabel: string): string {
  return resultLabels[resultLabel] ?? resultLabel
}

export function translateEventCategory(category: string): string {
  return eventCategoryLabels[category] ?? category
}

export function translatePosition(position: string): string {
  return positionLabels[position] ?? position
}

export function translateSelectedTeamOutcome(outcome: string): string {
  return selectedTeamOutcomeLabels[outcome] ?? outcome
}
