import type { SaveSlot } from '../../types/entities'
import type { SQLiteDatabaseClient } from '../db/sqlite'

interface SaveSlotRow {
  id: string
  selected_team_id: string
  current_stage: string
  current_round_code: string
  status: string
}

function mapSaveSlot(row: SaveSlotRow): SaveSlot {
  return {
    id: row.id,
    selectedTeamId: row.selected_team_id,
    currentStage: row.current_stage,
    currentRoundCode: row.current_round_code,
    status: row.status,
  }
}

export class SaveRepository {
  constructor(private readonly client: SQLiteDatabaseClient) {}

  createSaveSlot(input: SaveSlot): void {
    const now = new Date().toISOString()

    this.client.execute(
      `INSERT INTO save_slots (
        id, selected_team_id, current_stage, current_round_code, status, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        input.id,
        input.selectedTeamId,
        input.currentStage,
        input.currentRoundCode,
        input.status,
        now,
        now,
      ],
    )
  }

  getSaveSlotById(saveSlotId: string): SaveSlot | null {
    const row = this.client.getOne<SaveSlotRow>('SELECT * FROM save_slots WHERE id = ?', [saveSlotId])
    return row ? mapSaveSlot(row) : null
  }
}
