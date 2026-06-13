import { bootstrapDatabase } from '../data/db/bootstrap'
import { SQLiteDatabaseClient } from '../data/db/sqlite'
import { BrowserBinaryStorage } from '../data/db/storage'

const storageKey = 'soccer-game.sqlite.v2-world-cup-2026'

export async function createAppDatabase(): Promise<SQLiteDatabaseClient> {
  const client = new SQLiteDatabaseClient(new BrowserBinaryStorage(storageKey))
  await bootstrapDatabase(client)
  return client
}
