import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'
import { Project, SyntaxKind } from 'ts-morph'

import { createSourceFile, formatSourceFile, parseJsonObject } from './ts-mod'
import { getViteConfigPlugins, getVitestConfigTest } from './vite-config-parser'

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
  // modify vars on a ts file
  it.todo('should test ts file content', async () => {
    const sourceFile = await createSourceFile('___vi___.ts', `const theme = {m:4}`)
    // Find the variable declaration
    const variableDeclaration = sourceFile.getFirstDescendantByKind(SyntaxKind.VariableDeclaration)
    const varName = variableDeclaration.getName()
    if (varName === 'theme') {
      const initializer = variableDeclaration.getInitializer()

      if (initializer) {
        const parsed = parseJsonObject(initializer)
        expect(parsed).toEqual({ m: 4 })
      } else {
        console.log('Initializer not found')
      }
    } else {
      console.log('Variable declaration "theme" not found')
    }
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

  // use below for adding to plugins
  it('should add newFunction() to vitest plugins', () => {
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
    // console.log(updatedSourceCode)
    // Check if the plugin was added correctly
    expect(updatedSourceCode).toContain('plugins: [newFunction()],')
  })

  it('should add new property() to vitest test', async () => {
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
    const testSection = getVitestConfigTest(sourceFile)
    testSection.addPropertyAssignment({
      name: 'newProperty',
      initializer: "'new_value'",
    })

    // Get the modified source code and
    // Format using Prettier
    const formattedContent = await formatSourceFile(sourceFile)

    expect(formattedContent).toBeDefined()
    // Check if the plugin was added correctly
    expect(formattedContent).toContain('newProperty: "new_value"')
  })
})
