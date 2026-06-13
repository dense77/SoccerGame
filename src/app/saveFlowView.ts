import type { SaveOverview } from '../types/entities'

export type SaveFlowView = 'dashboard' | 'post-match' | 'settlement'
export type SaveFlowViewContext = 'new-save' | 'resume' | 'after-round'

export function resolveSaveFlowView(
  saveOverview: Pick<SaveOverview, 'saveSlot' | 'latestPostMatchReport' | 'tournamentOutcome'>,
  context: SaveFlowViewContext,
): SaveFlowView {
  if (context === 'new-save') {
    return 'dashboard'
  }

  const tournamentSettled =
    saveOverview.saveSlot.currentRoundCode === 'tournament-complete' ||
    saveOverview.saveSlot.status === 'champion' ||
    saveOverview.saveSlot.status === 'eliminated' ||
    saveOverview.tournamentOutcome === 'champion' ||
    saveOverview.tournamentOutcome === 'eliminated'

  if (tournamentSettled) {
    return 'settlement'
  }

  if (context === 'after-round' && saveOverview.latestPostMatchReport) {
    return 'post-match'
  }

  return 'dashboard'
}
