import type { EventOption, EventTemplate } from '../../types/entities'
import type { SQLiteDatabaseClient } from '../db/sqlite'

interface EventTemplateRow {
  id: string
  category: string
  code: string
  title: string
  trigger_phase: string
  trigger_condition_json: string
  text_template: string
  base_weight: number
  repeat_rule: string
  chain_next_codes_json: string
  effect_summary_json: string
}

interface EventOptionRow {
  id: string
  event_template_id: string
  option_key: string
  label: string
  effect_json: string
  sort_order: number
}

function mapTemplate(row: EventTemplateRow): EventTemplate {
  return {
    id: row.id,
    category: row.category,
    code: row.code,
    title: row.title,
    triggerPhase: row.trigger_phase,
    triggerCondition: JSON.parse(row.trigger_condition_json) as Record<string, unknown>,
    textTemplate: row.text_template,
    baseWeight: row.base_weight,
    repeatRule: row.repeat_rule,
    chainNextCodes: JSON.parse(row.chain_next_codes_json) as string[],
    effectSummary: JSON.parse(row.effect_summary_json) as Record<string, unknown>,
  }
}

function mapOption(row: EventOptionRow): EventOption {
  return {
    id: row.id,
    eventTemplateId: row.event_template_id,
    optionKey: row.option_key,
    label: row.label,
    effect: JSON.parse(row.effect_json) as Record<string, unknown>,
    sortOrder: row.sort_order,
  }
}

export class EventRepository {
  constructor(private readonly client: SQLiteDatabaseClient) {}

  getAllTemplates(): EventTemplate[] {
    return this.client
      .query<EventTemplateRow>('SELECT * FROM event_templates ORDER BY category ASC, code ASC')
      .map(mapTemplate)
  }

  getOptionsByTemplateId(templateId: string): EventOption[] {
    return this.client
      .query<EventOptionRow>(
        'SELECT * FROM event_options WHERE event_template_id = ? ORDER BY sort_order ASC',
        [templateId],
      )
      .map(mapOption)
  }
}
