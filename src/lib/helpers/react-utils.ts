import { system } from 'gluegun'

import { KnownError } from '../../types'

export async function setupTsTypes() {
  throw new KnownError('not implemented')
}

export async function addDeps() {
  await system.run('ni -D @testing-library/react @testing-library/jest-dom')
}

export function setupVitest() {
  return 'todo'
}
