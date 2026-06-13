import type { SQLiteDatabaseClient } from '../../data/db/sqlite'
import type { CurrentRoundEventSelections, MatchEventSelection, MatchSnapshot } from '../../types/entities'
import { finalizeCurrentRound } from './currentRoundFlow'

export function playCurrentRound(
  client: SQLiteDatabaseClient,
  saveSlotId: string,
  selectedEvent: MatchEventSelection | null = null,
): MatchSnapshot[] {
  const selections: CurrentRoundEventSelections = {
    preMatchEvent: selectedEvent,
    inMatchEvent: null,
    postMatchEvent: null,
  }

  return finalizeCurrentRound(client, saveSlotId, selections)
}
