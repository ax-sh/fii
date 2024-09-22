import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'
import { Project, SyntaxKind } from 'ts-morph'

import { getViteConfigPlugins } from './helpers/vite-config-parser'
import { createSourceFile } from './ts-mod'

describe('File operations', () => {
  let tempFilePath: string

  beforeEach(() => {
    tempFilePath = path.join(os.tmpdir(), `test-file-${Date.now()}.txt`)
  })

  afterEach(() => {
    if (fs.existsSync(tempFilePath)) {
      fs.unlinkSync(tempFilePath)
    }
  })

  test('should write and read from temp file', () => {
    fs.writeFileSync(tempFilePath, 'Hello, temp file!')
    const content = fs.readFileSync(tempFilePath, 'utf8')
    expect(content).toBe('Hello, temp file!')
  })
  test('should write and read from temp file', () => {
    fs.writeFileSync(tempFilePath, 'Hello, temp file!')
    const content = fs.readFileSync(tempFilePath, 'utf8')
    console.log(content)
  })
  it('should test ts file content', async () => {
    const sourceFile = createSourceFile('___vi___.ts', `const theme = {}`)
    // Find the variable declaration
    const variableDeclaration = sourceFile.getFirstDescendantByKind(SyntaxKind.VariableDeclaration)

    console.log(variableDeclaration)
  })
  //   temp dis
  //   it('should add react to vitest plugins', () => {
  //     const sourceCode = `
  //     import { defineConfig } from 'vitest/config';
  //
  //     export default defineConfig({
  //       plugins: [],
  //       test: {
  //         environment: 'node',
  //         globals: true,
  //       },
  //     });
  // `
  //     // const sourceFile = createSourceFile('__test___vi___.ts', sourceCode)
  //     const project = new Project({ useInMemoryFileSystem: true })
  //     const sourceFile = project.createSourceFile('__test___vi___.ts', sourceCode)
  //     // Find the defineConfig call expression
  //     // Find the defineConfig call expression
  //     const defineConfigCall = sourceFile
  //       .getDescendantsOfKind(ts.SyntaxKind.CallExpression)
  //       .find((node) => node.getExpression().getText() === 'defineConfig')
  //     console.log(defineConfigCall)
  //   })

  it('should add moo() to vitest plugins', () => {
    const sourceCode = `
  import { defineConfig } from 'vitest/config';

  export default defineConfig({
    plugins: [],
    test: {
      environment: 'node',
      globals: true,
    },
  });
  `

    const project = new Project({ useInMemoryFileSystem: true })
    const sourceFile = project.createSourceFile('__test___vi___.ts', sourceCode)
    const pluginsArray = getViteConfigPlugins(sourceFile)
    pluginsArray.addElement('newFunction()')

    // Get the modified source code
    const updatedSourceCode = sourceFile.getFullText()
    console.log(updatedSourceCode)
    // Check if the plugin was added correctly
    // expect(updatedSourceCode).toContain('plugins: [moo()],')
  })
})
