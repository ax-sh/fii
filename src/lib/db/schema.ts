import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

const updatedAndCreatedAt = {
  updatedAt: integer('updatd_at', { mode: 'timestamp' }).notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
}

export const history = sqliteTable('history', {
  id: integer('id').primaryKey(),
  title: text('title'),
  ...updatedAndCreatedAt,
})
