import type { GluegunTemplate } from 'gluegun'
import { filesystem, system } from 'gluegun'

import { KnownError } from '../../types'
import { addVitestReactTypesToTsconfig } from '../add-vitest-types-to-tsconfig'
import { openAsSourceFile } from './ts-mod'
import { addVitestDepsForReact } from './vite-config-parser'

export async function addRTLTest(template: GluegunTemplate) {
  await template.generate({
    template: `CONFIGS/react-testing/Text.test.tsx.ejs`,
    target: filesystem.path('.', 'src', 'Text.test.tsx'),
  })
}

export async function addSetupTestsFile() {
  const setupTestsFilePath = './src/testing/setup-tests.ts'
  const hasFile = filesystem.isFile(setupTestsFilePath)
  if (hasFile) {
    throw new KnownError(`File ${setupTestsFilePath} already exists`)
  }
  filesystem.write(
    setupTestsFilePath,
    `
    import '@testing-library/jest-dom/vitest';
    
    import { afterEach } from 'vitest';
    import { cleanup } from '@testing-library/react'

    // runs a clean after each test case (e.g. clearing jsdom)
    afterEach(() => {
      cleanup();
    })
  `
  )
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

  addVitestDepsForReact(sourceFile)
  // Format the entire file to ensure no extra commas
  sourceFile.formatText()
  console.log(sourceFile.getText())
  sourceFile.saveSync()

  // // const testProp = getViteConfigTest(sourceFile)
  await addSetupTestsFile()

  console.log(vitestFilePath, sourceFile.getText())
}

export async function setupTsTypes() {
  return addVitestReactTypesToTsconfig('tsconfig.app.json')
}

export async function addDeps() {
  await system.run('ni -D @testing-library/react @testing-library/jest-dom jsdom')
}

export function setupVitest() {
  return system.run('fii add vitest')
}
