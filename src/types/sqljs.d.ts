declare module 'sql.js' {
  export type BindValue = string | number | null | Uint8Array
  export type BindParams = BindValue[] | Record<string, BindValue>

  export interface QueryExecResult {
    columns: string[]
    values: BindValue[][]
  }

  export interface Statement {
    bind(params?: BindParams): void
    step(): boolean
    getAsObject(): Record<string, BindValue>
    free(): void
  }

  export interface Database {
    run(sql: string, params?: BindParams): void
    exec(sql: string): QueryExecResult[]
    prepare(sql: string): Statement
    export(): Uint8Array
  }

  export interface SqlJsStatic {
    Database: new (data?: Uint8Array) => Database
  }

  export interface SqlJsConfig {
    locateFile?: (file: string) => string
  }

  export default function initSqlJs(config?: SqlJsConfig): Promise<SqlJsStatic>
}

declare module 'sql.js/dist/sql-asm.js' {
  export * from 'sql.js'
  export { default } from 'sql.js'
}
