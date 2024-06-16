import { Database } from 'bun:sqlite'
import { drizzle } from 'drizzle-orm/bun-sqlite'

const dbPath = 'sqlite.db'
const sqlite = new Database(dbPath)
export const db = drizzle(sqlite)
