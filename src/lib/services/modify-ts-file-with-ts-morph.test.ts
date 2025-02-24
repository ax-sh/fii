import * as path from 'node:path'
import { Project, ScriptKind, SourceFile, SyntaxKind } from 'ts-morph'

import {
  addImports,
  addImportsToSourceFile,
  addVitePlugins,
  formatSourceFileToString,
  getDefineConfigFromSourceFile,
} from './parse-ts'

describe('Import Management', () => {
  let project: Project
  let sourceFile: SourceFile

  beforeEach(() => {
    project = new Project({ useInMemoryFileSystem: true })
  })

  const createSource = (code: string) => {
    const resolvedPath = 'test.ts'
    sourceFile = project.createSourceFile(resolvedPath, code, {
      scriptKind: path.extname(resolvedPath) === '.ts' ? ScriptKind.TS : ScriptKind.JS,
    })
    return sourceFile
  }

  test('should add new imports to empty file without duplicates', () => {
    const sf = createSource('const x:number = 3')

    addImportsToSourceFile(sf, [
      { from: 'react', imports: 'React' },
      { from: 'react', imports: 'React' },
      { from: 'react', imports: ['useState'] },
      { from: 'react', imports: ['useState', 'useEffect'] },
      { from: 'react', imports: ['useEffect'] },
    ])
    const raw = formatSourceFileToString(sf)
    expect(raw).toMatchSnapshot()
    const imports = sf.getImportDeclarations()

    expect(imports).toHaveLength(1)
    expect(imports[0].getModuleSpecifierValue()).toBe('react')
    expect(imports[0].getDefaultImport()?.getText()).toBe('React')
  })

  test('should add multiple imports types', () => {
    const sf = createSource(`export const x = 10;`)

    addImports(sf, [
      { moduleSpecifier: 'react', defaultImport: 'React' },
      { moduleSpecifier: 'components', namedImports: ['Button', 'Input'] },
      { moduleSpecifier: 'lib', defaultImport: 'lib', namedImports: ['util'] },
    ])
    const imports = sf.getImportDeclarations()
    expect(imports).toHaveLength(3)
    expect(imports[0].getDefaultImport().getText()).toEqual('React')
    expect(imports[1].getNamedImports()[0].getName()).toEqual('Button')
    expect(imports[2].getNamedImports()[0].getName()).toEqual('util')
    const output = sf.getFullText()
    expect(output).toMatchSnapshot()
  })

  test('should not duplicate existing imports', () => {
    const sf = createSource(`
      import React from 'react';
      export const x = 10;
    `)

    addImportsToSourceFile(sf, [
      { from: 'react', imports: 'React' },
      { from: 'react', imports: ['useState'] },
    ])
    console.log(formatSourceFileToString(sf))

    const imports = sf.getImportDeclarations()
    expect(imports).toHaveLength(1)
    expect(imports[0].getNamedImports()[0].getName()).toBe('useState')
  })

  test('should check if modify plugins property exists', () => {
    const sf = createSource(`
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({

});`)
    const configObject = getDefineConfigFromSourceFile(sf)
    const newBasePath = 'foo'
    // Check if the `base` property exists
    const baseProperty = configObject.getProperty('base')
    if (!baseProperty || !baseProperty.isKind(SyntaxKind.PropertyAssignment)) {
      // If the `base` property doesn't exist, create it with a default value
      configObject.addPropertyAssignment({
        name: 'base',
        initializer: `"${newBasePath}"`, // Default value for `base`
      })
      console.log("`base` property was added with a default value of '/'")
    } else {
      // If the `base` property doesn't exist, create it with the new value
      configObject.addPropertyAssignment({
        name: 'base',
        initializer: `"${newBasePath}"`, // Default value for `base`
      })
      console.log('`base` property was added with a default value:', newBasePath)
    }
    const updatedContent = formatSourceFileToString(configObject.getSourceFile())
    expect(updatedContent).toContain(`base: "${newBasePath}"`)
    console.log(updatedContent)
  })

  const viteConfig = `
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({
plugins: [UnoCSS(), react()],
});`

  test('should modify plugins', () => {
    const sf = createSource(viteConfig)
    const modified = getDefineConfigFromSourceFile(sf)

    console.log(formatSourceFileToString(modified.getSourceFile()))
  })

  test('should modify plugins without duplicates', () => {
    const sf = createSource(viteConfig)
    const modified = addVitePlugins(sf, ['dff', 'daff'])

    console.log(formatSourceFileToString(modified.getSourceFile()))
  })
})
