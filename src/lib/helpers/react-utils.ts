import { filesystem, system } from 'gluegun'

import { KnownError } from '../../types'
import { formatSourceFile, openAsSourceFile } from './ts-mod'
import { getViteConfigTest } from './vite-config-parser'

export async function addSetupTestsFile() {
  const setupTestsFilePath = 'src/testing/setup-tests.ts'
  const hasFile = filesystem.isFile(setupTestsFilePath)
  if (hasFile) {
    throw new KnownError(`File ${setupTestsFilePath} already exists`)
  }
  filesystem.write(setupTestsFilePath, `import '@testing-library/jest-dom/vitest';`)
  return setupTestsFilePath
}

export async function addRTLToVitest() {
  const vitestFilePath = 'vitest.config.ts'
  const hasVitestConfig = filesystem.isFile(vitestFilePath)
  if (!hasVitestConfig) {
    console.log('No Vitest config found.')
    console.log('Creating Vitest configuration with defaults')
    await setupVitest()
  }
  const sourceFile = openAsSourceFile(vitestFilePath)
  const testProp = getViteConfigTest(sourceFile)
  const setupTestsFile = await addSetupTestsFile()
  const o = { environment: 'jsdom', setupFiles: setupTestsFile }
  for (const name in o) {
    const initializer = `'${o[name]}'`
    testProp.addPropertyAssignment({
      name,
      initializer,
    })
  }
  await sourceFile.formatText()

  // const updated = await formatSourceFile(sourceFile)
  console.log(vitestFilePath, sourceFile.getText())
}

export async function setupTsTypes() {
  throw new KnownError('not implemented')
}

export async function addDeps() {
  await system.run('ni -D @testing-library/react @testing-library/jest-dom')
}

export function setupVitest() {
  return system.run('fii add vitest')
}
