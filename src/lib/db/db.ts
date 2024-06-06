import { drizzle } from 'drizzle-orm/bun-sqlite'
import { Database } from 'bun:sqlite'
import { sql } from 'drizzle-orm'

const dbPath = 'sqlite.db'
const sqlite = new Database(dbPath)
export const db = drizzle(sqlite)

const query = sql`select "hello world" as text`
const result = db.get<{ text: string }[]>(query)
console.log(result.length, result[0])
// console.log(db);
