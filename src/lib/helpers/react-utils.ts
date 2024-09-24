import { filesystem, system } from 'gluegun'
import { SyntaxKind } from 'ts-morph'

import { KnownError } from '../../types'
import { openAsSourceFile } from './ts-mod'

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
  const sourceFile = openAsSourceFile(vitestFilePath)
  const objLiteral = sourceFile.getFirstDescendantByKindOrThrow(SyntaxKind.ObjectLiteralExpression)
  // Find the "test" property
  const testProp = objLiteral.getPropertyOrThrow('test')
  // Get the object literal inside "test"
  const testObjLiteral = testProp.getFirstDescendantByKindOrThrow(
    SyntaxKind.ObjectLiteralExpression
  )
  // Add a new property and format the result
  testObjLiteral.addPropertyAssignment({
    name: 'newProp',
    initializer: "'newValue'",
  })
  // Format the entire file to ensure no extra commas
  sourceFile.formatText()

  console.log(sourceFile.getText())

  // const hasVitestConfig = filesystem.isFile(vitestFilePath)
  // if (!hasVitestConfig) {
  //   console.log('No Vitest config found.')
  //   console.log('Creating Vitest configuration with defaults')
  //   await setupVitest()
  // }
  // const sourceFile = openAsSourceFile(vitestFilePath)
  //
  // sourceFile.formatText()
  // const testProp = getViteConfigTest(sourceFile)
  // const setupTestsFile = await addSetupTestsFile()
  // const o = { environment: 'jsdom', setupFiles: setupTestsFile }
  //
  // for (const name in o) {
  //   const initializer = `'${o[name]}'`
  //   testProp.addPropertyAssignment({
  //     name,
  //     initializer,
  //   })
  // }
  // sourceFile.formatText()
  //
  // // const updated = await formatSourceFile(sourceFile)
  // console.log(vitestFilePath, sourceFile.getText())
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
