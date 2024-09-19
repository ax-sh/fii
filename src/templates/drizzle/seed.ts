import { faker } from '@faker-js/faker'
import { sql } from 'drizzle-orm'

import { db } from './db'
import * as schema from './schema'

async function main() {
  await db.insert(schema.history).values([
    {
      title: faker.person.jobTitle(),
      updatedAt: sql`(unixepoch())`,
    },
  ])
  console.log(`Seeding complete.`)
}

main()
