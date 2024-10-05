import * as path from 'node:path'
import { Project, ScriptKind } from 'ts-morph'

import { formatSourceFile } from './ts-mod'
import {
  addBasePropertyToDefineConfig,
  addImportsToViteConfig,
  getImportsToViteConfig,
  getViteConfigPlugins,
  getViteDefineConfigCall,
  getViteDefineConfigCallOptions,
} from './vite-config-parser'

function makeBasicSourceFile() {
  const code = `
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react-swc'

  export default defineConfig({
    plugins: [react()]
  })
  `
  const resolvedPath = './__test__vite__config__.ts'
  const project = new Project({ compilerOptions: {} })
  return project.createSourceFile(resolvedPath, code, {
    overwrite: true,
    // Note: .js and .mjs can still be valid for TS projects.
    // We can't infer TypeScript from config.tsx.
    scriptKind: path.extname(resolvedPath) === '.ts' ? ScriptKind.TS : ScriptKind.JS,
  })
}

describe(getViteDefineConfigCall.name, () => {
  const code = `
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react-swc'

  export default defineConfig({
    plugins: [react()]
  })
  `

  it('should get DefineConfig', async () => {
    const project = new Project()
    const sourceFile = project.createSourceFile('./__test__vite__config__.ts', code, {
      overwrite: true,
    })

    const firstArgument = getViteDefineConfigCallOptions(sourceFile)
    const value = 'foo'
    addBasePropertyToDefineConfig(value, firstArgument)
    const content = sourceFile.getFullText()
    console.log(content)
    // expect(content).toEqual(codeAfterAddingBase)
  })

  it('should add new function statement to plugins array', () => {
    const sourceFile = makeBasicSourceFile()
    const pluginsArray = getViteConfigPlugins(sourceFile)
    pluginsArray.addElement('newFunction()')
    const plugins = pluginsArray.getElements().map((element) => element.getText())
    expect(plugins).toContain('newFunction()')
  })
  test('addImportsToViteConfig should add new import statements', async () => {
    const sourceFile = makeBasicSourceFile()
    addImportsToViteConfig(sourceFile, [
      { name: 'newFunction', moduleSpecifier: './newFunction' },
      { name: 'anotherFunction', moduleSpecifier: './anotherFunction' },
    ])

    const importDeclarations = getImportsToViteConfig(sourceFile)

    expect(importDeclarations).toContainEqual({
      moduleSpecifier: './newFunction',
      namedImports: ['newFunction'],
    })
    expect(importDeclarations).toContainEqual({
      moduleSpecifier: './anotherFunction',
      namedImports: ['anotherFunction'],
    })
    const formattedText = await formatSourceFile(sourceFile)
    console.log(formattedText)
  })
})
