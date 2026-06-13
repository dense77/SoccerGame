import { EventRepository } from '../../data/repositories/EventRepository'
import type { SQLiteDatabaseClient } from '../../data/db/sqlite'
import type {
  EventTemplate,
  MatchEventPhaseGroup,
  MatchEventSelection,
  MatchSetupOverview,
} from '../../types/entities'
import { buildMatchEventContext } from './matchEventContext'
import { emptyEventModifier, resolveEventOption } from './resolveEventOption'

function matchesRange(
  value: number,
  rangeValue: unknown,
): boolean {
  if (!Array.isArray(rangeValue) || rangeValue.length !== 2) {
    return true
  }

  const [minimum, maximum] = rangeValue
  if (typeof minimum !== 'number' || typeof maximum !== 'number') {
    return true
  }

  return value >= minimum && value <= maximum
}

function matchesTags(
  sourceTags: string[],
  expectedValue: unknown,
): boolean {
  if (!Array.isArray(expectedValue) || expectedValue.length === 0) {
    return true
  }

  return expectedValue.some(
    (tag) => typeof tag === 'string' && sourceTags.includes(tag),
  )
}

function templateMatches(
  template: EventTemplate,
  context: ReturnType<typeof buildMatchEventContext>,
): boolean {
  const condition = template.triggerCondition

  if (!matchesRange(context.scoreDiff, condition.score_diff_range)) {
    return false
  }

  if (!matchesRange(context.teamMorale, condition.team_morale_range)) {
    return false
  }

  if (!matchesRange(context.teamFitness, condition.team_fitness_range)) {
    return false
  }

  if (
    typeof condition.has_core_player === 'boolean' &&
    condition.has_core_player !== context.hasCorePlayer
  ) {
    return false
  }

  if (!matchesTags(context.formationTags, condition.formation_tags)) {
    return false
  }

  if (!matchesTags(context.tacticTags, condition.tactic_tags)) {
    return false
  }

  return true
}

function templateWeight(
  template: EventTemplate,
  context: ReturnType<typeof buildMatchEventContext>,
): number {
  let weight = template.baseWeight

  if (context.teamFitness < 70 && template.category === 'substitution') {
    weight += 2
  }

  if (context.teamMorale >= 65 && template.category === 'player_demand') {
    weight += 1
  }

  if (context.tacticTags.includes('tactic_adjustment') && template.category === 'tactic_adjustment') {
    weight += 2
  }

  return weight
}

export function loadMatchEventSelection(
  client: SQLiteDatabaseClient,
  setup: MatchSetupOverview,
  phaseGroup: MatchEventPhaseGroup,
  preferredOptionId?: string | null,
): MatchEventSelection | null {
  const eventRepository = new EventRepository(client)
  const context = buildMatchEventContext(setup)
  const candidateTemplates = eventRepository
    .getAllTemplates()
    .filter((template) => {
      if (phaseGroup === 'pre-match') {
        return template.triggerPhase === 'pre_match'
      }

      if (phaseGroup === 'in-match') {
        return template.triggerPhase !== 'pre_match' && template.triggerPhase !== 'post_match'
      }

      return template.triggerPhase === 'post_match'
    })
    .filter((template) => templateMatches(template, context))
    .sort((left, right) => templateWeight(right, context) - templateWeight(left, context))

  const selectedTemplate = candidateTemplates[0]
  if (!selectedTemplate) {
    return null
  }

  const options = eventRepository.getOptionsByTemplateId(selectedTemplate.id)
  if (options.length === 0) {
    return null
  }

  const selectedOption =
    typeof preferredOptionId === 'string'
      ? options.find((option) => option.id === preferredOptionId) ?? null
      : null

  return {
    phaseGroup,
    template: selectedTemplate,
    options,
    selectedOptionId: selectedOption?.id ?? null,
    resolvedModifier: selectedOption ? resolveEventOption(selectedOption) : emptyEventModifier,
  }
}
