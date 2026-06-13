import type { BindParams, Database, SqlJsStatic } from 'sql.js'

import type { BinaryStorage } from './storage'

async function loadSqlRuntime(): Promise<SqlJsStatic> {
  if (import.meta.env.MODE === 'test') {
    const module = await import('sql.js/dist/sql-asm.js')
    return module.default()
  }

  const { default: sqliteWasmUrl } = await import('sql.js/dist/sql-wasm.wasm?url')
  const module = await import('sql.js')
  return module.default({
    locateFile: () => sqliteWasmUrl,
  })
}

export class SQLiteDatabaseClient {
  private database: Database | null = null
  private persistSuppressed = 0
  private hasPendingPersist = false

  constructor(private readonly storage: BinaryStorage) {}

  async initialize(): Promise<void> {
    if (this.database) {
      return
    }

    const SQL = await loadSqlRuntime()

    const snapshot = this.storage.load()
    this.database = snapshot ? new SQL.Database(snapshot) : new SQL.Database()
    this.database.run('PRAGMA foreign_keys = ON;')
  }

  execute(sql: string, params?: BindParams): void {
    this.getDatabase().run(sql, params)
    this.markPersistRequired()
  }

  executeBatch(statements: string[]): void {
    const database = this.getDatabase()
    statements.forEach((statement) => {
      database.run(statement)
    })
    this.markPersistRequired()
  }

  executeInTransaction<T>(operation: () => T): T {
    const database = this.getDatabase()
    const isTopLevelTransaction = this.persistSuppressed === 0

    this.persistSuppressed += 1

    if (isTopLevelTransaction) {
      database.run('BEGIN;')
    }

    try {
      const result = operation()

      if (isTopLevelTransaction) {
        database.run('COMMIT;')
      }

      return result
    } catch (error) {
      if (isTopLevelTransaction) {
        database.run('ROLLBACK;')
      }

      throw error
    } finally {
      this.persistSuppressed -= 1

      if (this.persistSuppressed === 0 && this.hasPendingPersist) {
        this.persist()
        this.hasPendingPersist = false
      }
    }
  }

  query<T>(sql: string, params?: BindParams): T[] {
    const statement = this.getDatabase().prepare(sql)
    if (params) {
      statement.bind(params)
    }

    const rows: T[] = []
    while (statement.step()) {
      rows.push(statement.getAsObject() as T)
    }
    statement.free()

    return rows
  }

  getOne<T>(sql: string, params?: BindParams): T | null {
    const rows = this.query<T>(sql, params)
    return rows[0] ?? null
  }

  export(): Uint8Array {
    return this.getDatabase().export()
  }

  clear(): void {
    this.storage.clear()
    this.database = null
  }

  private getDatabase(): Database {
    if (!this.database) {
      throw new Error('SQLite database has not been initialized.')
    }

    return this.database
  }

  private markPersistRequired(): void {
    if (this.persistSuppressed > 0) {
      this.hasPendingPersist = true
      return
    }

    this.persist()
  }

  private persist(): void {
    this.storage.save(this.export())
  }
}
