import type {
  MatchEventSelection,
  MatchSnapshot,
  ManagedPlayer,
  PostMatchReport,
  SavePlayerState,
} from '../../types/entities'

interface BuildPostMatchReportInput {
  snapshot: MatchSnapshot
  selectedTeamId: string
  selectedTeamName: string
  opponentTeamName: string
  players: ManagedPlayer[]
  nextPlayerStates: SavePlayerState[]
  selectedEvent: MatchEventSelection | null
}

function average(values: number[]): number {
  if (values.length === 0) {
    return 0
  }

  return values.reduce((sum, value) => sum + value, 0) / values.length
}

function roundToOneDecimal(value: number): number {
  return Number(value.toFixed(1))
}

function resolveResultLabel(teamGoals: number, opponentGoals: number): string {
  if (teamGoals > opponentGoals) {
    return 'win'
  }

  if (teamGoals < opponentGoals) {
    return 'loss'
  }

  return 'draw'
}

export function buildPostMatchReport(input: BuildPostMatchReportInput): PostMatchReport {
  const selectedEvent = input.selectedEvent
  const nextStateByPlayerId = new Map(
    input.nextPlayerStates.map((state) => [state.playerId, state]),
  )

  const playerChanges = input.players.map((entry) => {
    const nextState = nextStateByPlayerId.get(entry.player.id)

    if (!nextState) {
      throw new Error(`Missing updated player state for ${entry.player.id}`)
    }

    return {
      playerId: entry.player.id,
      playerName: entry.player.name,
      isStarter: entry.isStarter,
      fitnessBefore: entry.state.fitnessValue,
      fitnessAfter: nextState.fitnessValue,
      moraleBefore: entry.state.moraleValue,
      moraleAfter: nextState.moraleValue,
      fitnessDelta: nextState.fitnessValue - entry.state.fitnessValue,
      moraleDelta: nextState.moraleValue - entry.state.moraleValue,
      minutesPlayed: nextState.lastMatchMinutes,
    }
  })

  const starters = playerChanges.filter((entry) => entry.isStarter)
  const bench = playerChanges.filter((entry) => !entry.isStarter)
  const mostAffectedPlayer = [...playerChanges].sort(
    (left, right) => left.fitnessDelta - right.fitnessDelta,
  )[0]
  const mostBoostedPlayer = [...playerChanges].sort(
    (left, right) => right.moraleDelta - left.moraleDelta,
  )[0]
  const mostDroppedPlayer = [...playerChanges].sort(
    (left, right) => left.moraleDelta - right.moraleDelta,
  )[0]

  const selectedTeamIsHome = input.snapshot.homeTeamId === input.selectedTeamId
  const selectedTeamGoals = selectedTeamIsHome ? input.snapshot.homeScore : input.snapshot.awayScore
  const opponentGoals = selectedTeamIsHome ? input.snapshot.awayScore : input.snapshot.homeScore

  return {
    snapshotId: input.snapshot.id,
    fixtureId: input.snapshot.fixtureId,
    teamId: input.selectedTeamId,
    teamName: input.selectedTeamName,
    opponentTeamName: input.opponentTeamName,
    scoreline: `${selectedTeamGoals}-${opponentGoals}`,
    resultLabel: resolveResultLabel(selectedTeamGoals, opponentGoals),
    fitnessChangeSummary: {
      startersAverageDelta: roundToOneDecimal(average(starters.map((entry) => entry.fitnessDelta))),
      benchAverageDelta: roundToOneDecimal(average(bench.map((entry) => entry.fitnessDelta))),
      mostAffectedPlayer: mostAffectedPlayer?.playerName ?? null,
    },
    moraleChangeSummary: {
      teamAverageDelta: roundToOneDecimal(average(playerChanges.map((entry) => entry.moraleDelta))),
      mostBoostedPlayer:
        mostBoostedPlayer && mostBoostedPlayer.moraleDelta > 0 ? mostBoostedPlayer.playerName : null,
      mostDroppedPlayer:
        mostDroppedPlayer && mostDroppedPlayer.moraleDelta < 0 ? mostDroppedPlayer.playerName : null,
    },
    playerChanges,
    eventReport: selectedEvent
      ? {
          templateId: selectedEvent.template.id,
          title: selectedEvent.template.title,
          category: selectedEvent.template.category,
          optionId: selectedEvent.selectedOptionId,
          optionLabel:
            selectedEvent.options.find(
              (option) => option.id === selectedEvent.selectedOptionId,
            )?.label ?? selectedEvent.selectedOptionId,
          phase: selectedEvent.template.triggerPhase,
          modifier: selectedEvent.resolvedModifier,
        }
      : null,
  }
}
