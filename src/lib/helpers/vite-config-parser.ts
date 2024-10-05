import {
  type CallExpression,
  type ObjectLiteralExpression,
  type SourceFile,
  SyntaxKind,
  ts,
} from 'ts-morph'

export function getViteDefineConfigCall(sourceFile: SourceFile): CallExpression {
  const callExpressions = sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression)

  return callExpressions.find((callExpression) => {
    const calledExpression = callExpression.getExpression()
    return calledExpression.getText() === 'defineConfig'
  })
}

export function addBasePropertyToDefineConfig(
  value: string,
  firstArgument: ObjectLiteralExpression
) {
  const baseProperty = {
    name: 'base',
    initializer: `"${value}"`,
  }
  firstArgument.addPropertyAssignment(baseProperty)
  console.log(baseProperty)
}

export function getViteDefineConfigCallOptions<T = ObjectLiteralExpression>(
  sourceFile: SourceFile
) {
  const defineConfigCall = getViteDefineConfigCall(sourceFile)
  const [firstArgument] = defineConfigCall.getArguments()

  return firstArgument as T
}

export function getViteConfigPlugins(sourceFile: SourceFile) {
  const configObject = getViteDefineConfigCallOptions(sourceFile)
  return configObject
    .asKindOrThrow(ts.SyntaxKind.ObjectLiteralExpression)
    .getPropertyOrThrow('plugins')
    .asKindOrThrow(ts.SyntaxKind.PropertyAssignment)
    .getInitializerIfKindOrThrow(ts.SyntaxKind.ArrayLiteralExpression)
}

export function getVitestConfigTest(sourceFile: SourceFile) {
  const configObject = getViteDefineConfigCallOptions(sourceFile)
  return configObject
    .getPropertyOrThrow('test')
    .asKindOrThrow(ts.SyntaxKind.PropertyAssignment)
    .getInitializerIfKindOrThrow(ts.SyntaxKind.ObjectLiteralExpression)
}

export function addImportsToViteConfig(
  sourceFile: SourceFile,
  newImports: { name: string; moduleSpecifier: string }[]
) {
  for (const newImport of newImports) {
    sourceFile.addImportDeclaration({
      namedImports: [newImport.name],
      moduleSpecifier: newImport.moduleSpecifier,
    })
  }
}
export function getImportsToViteConfig(sourceFile: SourceFile) {
  return sourceFile.getImportDeclarations().map((decl) => ({
    moduleSpecifier: decl.getModuleSpecifierValue(),
    namedImports: decl.getNamedImports().map((namedImport) => namedImport.getName()),
  }))
}

export function addVitestDepsForReact(sourceFile: SourceFile) {
  const config = {
    environment: 'jsdom',
    setupFiles: './src/testing/setup-tests.ts',
    // exclude: ['**/node_modules/**', '**/e2e/**'],
    // coverage: {
    //   include: ['src/**'],
    // },
  }

  const testObjLiteral = getVitestConfigTest(sourceFile)
  for (const [name, value] of Object.entries(config)) {
    const existingProperty = testObjLiteral.getProperty(name)
    if (existingProperty) {
      // for now replacing environment
      // Replace the existing property with the new one
      existingProperty.replaceWithText(`${name}: '${value}'`)
    } else {
      testObjLiteral.insertPropertyAssignment(0, {
        name,
        initializer: `'${value}'`,
      })
    }
  }
  return sourceFile
}
