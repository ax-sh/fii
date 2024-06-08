import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

const updatedAndCreatedAt = {
  updatedAt: integer('created_at', { mode: 'timestamp_ms' }).notNull(),
  createdAt: integer('created_at', { mode: 'timestamp_ms' })
    .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`)
    .notNull(),
}

export const history = sqliteTable('histories', {
  id: integer('id').primaryKey(),
  title: text('text'),
  ...updatedAndCreatedAt,
})
