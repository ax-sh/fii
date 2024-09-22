import { filesystem, system } from 'gluegun'

import { KnownError } from '../../types'

export function addRTLToVitest() {
  const vitestFilePath = 'vitest.config.ts'
  const hasVitestConfig = filesystem.isFile(vitestFilePath)
  if (!hasVitestConfig) {
    console.log('No Vitest config found.')
    console.log('Creating Vitest configuration with defaults')
    setupVitest()
  }
  console.log(vitestFilePath)
}

export async function setupTsTypes() {
  throw new KnownError('not implemented')
}

export async function addDeps() {
  await system.run('ni -D @testing-library/react @testing-library/jest-dom')
}

export function setupVitest() {
  return 'todo'
}
