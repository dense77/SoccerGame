import { seedDatabaseIfEmpty } from '../seeds/seedDatabase'
import type { SQLiteDatabaseClient } from './sqlite'
import { initializeSchema } from './schema'

export async function bootstrapDatabase(client: SQLiteDatabaseClient): Promise<void> {
  await client.initialize()
  initializeSchema(client)
  seedDatabaseIfEmpty(client)
}
