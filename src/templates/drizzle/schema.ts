import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

// .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`)
const updatedAndCreatedAt = {
  updatedAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .default(sql`(unixepoch())`)
    .notNull(),
}

export const history = sqliteTable('histories', {
  id: integer('id').primaryKey(),
  title: text('text'),
  ...updatedAndCreatedAt,
})
