import { bootstrapDatabase } from '../../data/db/bootstrap'
import { SQLiteDatabaseClient } from '../../data/db/sqlite'
import { MemoryBinaryStorage } from '../../data/db/storage'

export async function createTestDatabase(): Promise<SQLiteDatabaseClient> {
  const client = new SQLiteDatabaseClient(new MemoryBinaryStorage())
  await bootstrapDatabase(client)
  return client
}
