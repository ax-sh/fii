import { db } from './db'
import * as schema from './schema'
import { faker } from '@faker-js/faker'
import { sql } from 'drizzle-orm'

async function main() {
  await db.insert(schema.history).values([
    {
      title: faker.person.jobTitle(),
      updatedAt: sql`(unixepoch())`,
    },
  ])
  console.log(`Seeding complete.`)
}
void main()
