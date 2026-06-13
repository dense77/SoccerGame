import type { EventOption, MatchEventModifier } from '../../types/entities'

export const emptyEventModifier: MatchEventModifier = {
  attackDelta: 0,
  defenseDelta: 0,
  moraleDelta: 0,
  fitnessDelta: 0,
  contextTags: [],
}

export function resolveEventOption(option: EventOption): MatchEventModifier {
  const effect = option.effect

  return {
    attackDelta:
      typeof effect.modify_attack_bias === 'number' ? effect.modify_attack_bias : 0,
    defenseDelta:
      typeof effect.modify_defense_bias === 'number' ? effect.modify_defense_bias : 0,
    moraleDelta:
      typeof effect.modify_team_morale === 'number' ? effect.modify_team_morale : 0,
    fitnessDelta:
      typeof effect.modify_team_fitness === 'number' ? effect.modify_team_fitness : 0,
    contextTags:
      typeof effect.add_context_tag === 'string' ? [effect.add_context_tag] : [],
  }
}
