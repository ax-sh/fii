import type * as Parser from 'tree-sitter'
import type { SourceFile } from 'ts-morph'
import { Project, SyntaxKind, ts } from 'ts-morph'

import SemicolonPreference = ts.SemicolonPreference

export type ParsedTreeSitterNodeResult = { start: number; end: number }

export async function parseTsSourceCode(sourceCode: string) {
  const Parser = require('tree-sitter')

  const { typescript } = await import('tree-sitter-typescript')
  const parser = new Parser()
  parser.setLanguage(typescript as Parser.Language)
  const tree: Parser.Tree = parser.parse(sourceCode)
  return tree
}

export function collectIdentifiers(
  node: Parser.SyntaxNode,
  targetName: string,
  results: ParsedTreeSitterNodeResult[]
) {
  if (node.type === 'identifier' && node.text === targetName) {
    results.push({ start: node.startIndex, end: node.endIndex })
  }

  // Recursively check child nodes
  for (const child of node.children) {
    collectIdentifiers(child, targetName, results)
  }
}
export async function renameVariable(sourceCode: string, oldName: string, newName: string) {
  // Parse the source code
  const tree = await parseTsSourceCode(sourceCode)
  const rootNode = tree.rootNode

  // Collect all identifier nodes with the old variable name
  const identifiers: ParsedTreeSitterNodeResult[] = []
  collectIdentifiers(rootNode, oldName, identifiers)

  // Replace each occurrence in reverse order to maintain correct positions
  let modifiedCode = sourceCode
  for (const { start, end } of identifiers.reverse()) {
    modifiedCode = modifiedCode.slice(0, start) + newName + modifiedCode.slice(end)
  }

  return modifiedCode
}

export function geTsFileInMemory(sourceCode: string) {
  const project = new Project({ useInMemoryFileSystem: true }) // 1. Create virtual project
  const sourceFile = project.createSourceFile('virtual___test.ts', sourceCode) // 2. Create virtual source file
  return sourceFile
}

export function formatSourceFile(sourceFile: SourceFile) {
  sourceFile.formatText({
    indentSize: 2,
    semicolons: SemicolonPreference.Insert,
    convertTabsToSpaces: true,
  })
  return sourceFile
}

export function formatSourceFileToString(sourceFile: SourceFile) {
  return formatSourceFile(sourceFile).getFullText()
}

type TsImports = { namedImports?: string[]; defaultImport?: string; moduleSpecifier: string }
// Function to add imports without duplicates
export function addImports(sourceFile: SourceFile, imports: TsImports[]) {
  for (const importInfo of imports) {
    const { namedImports, defaultImport, moduleSpecifier } = importInfo

    // Check if an import for the module already exists
    const existingImport = sourceFile
      .getImportDeclarations()
      .find((imp) => imp.getModuleSpecifierValue() === moduleSpecifier)

    if (existingImport) {
      // Merge named imports if they exist
      if (namedImports) {
        const existingNamedImports = existingImport
          .getNamedImports()
          .map((namedImport) => namedImport.getName())
        const uniqueNamedImports = Array.from(new Set([...existingNamedImports, ...namedImports]))

        // Remove all existing named imports and add the merged ones
        existingImport.removeNamedImports()
        existingImport.addNamedImports(uniqueNamedImports)
      }

      // Add default import if it doesn't already exist
      if (defaultImport && !existingImport.getDefaultImport()) {
        existingImport.setDefaultImport(defaultImport)
      }
    } else {
      // If no existing import, create a new one
      sourceFile.addImportDeclaration({
        namedImports,
        defaultImport,
        moduleSpecifier,
      })
    }
  }
}

export function addImportsToSourceFile(
  sourceFile: SourceFile,
  imports: { imports: string | string[]; from: string }[]
) {
  const modified = imports.map<TsImports>(({ from, imports }) => {
    if (Array.isArray(imports)) {
      return { namedImports: imports, moduleSpecifier: from }
    }
    return { defaultImport: imports, moduleSpecifier: from }
  })
  return addImports(sourceFile, modified)
}

export function getDefineConfigFromSourceFile(sourceFile: SourceFile) {
  const funcName = 'defineConfig'
  // Find the `defineConfig` call expression
  const defineConfigCall = sourceFile
    .getDescendantsOfKind(SyntaxKind.CallExpression)
    .find((callExpr) => callExpr.getExpression().getText() === funcName)
  if (!defineConfigCall) {
    throw new Error('Could not find `defineConfig` in the provided file.')
  }
  // Get the object literal passed to `defineConfig`
  const configObject = defineConfigCall.getArguments()[0]
  if (!configObject || !configObject.isKind(SyntaxKind.ObjectLiteralExpression)) {
    throw new Error('`defineConfig` does not contain an object literal as its argument.')
  }

  return configObject
}

export function addVitePlugins(sourceFile: SourceFile, newPlugins: string[]) {
  const configObject = getDefineConfigFromSourceFile(sourceFile)
  // Find the `plugins` property in the object literal
  const pluginsProperty = configObject.getProperty('plugins')
  if (!pluginsProperty || !pluginsProperty.isKind(SyntaxKind.PropertyAssignment)) {
    throw new Error('`plugins` property not found in the `defineConfig` object.')
  }

  // Get the array literal of the `plugins` property
  const pluginsArray = pluginsProperty.getInitializer()
  if (!pluginsArray || !pluginsArray.isKind(SyntaxKind.ArrayLiteralExpression)) {
    throw new Error('`plugins` property is not initialized with an array.')
  }
  // Get the existing plugin names (to avoid duplicates)
  const existingPlugins = pluginsArray.getElements().map((element) => element.getText())

  // Add new plugins that are not already present
  for (const newPlugin of newPlugins) {
    if (!existingPlugins.includes(newPlugin)) {
      pluginsArray.addElement(newPlugin)
    }
  }
  return sourceFile
}
