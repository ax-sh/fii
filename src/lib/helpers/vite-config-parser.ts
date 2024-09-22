import * as prettier from 'prettier'
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

export function getViteConfigTest(sourceFile: SourceFile) {
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

export function formatSourceFile(sourceFile: SourceFile) {
  return prettier.format(sourceFile.getFullText(), {
    parser: 'typescript',
  })
}
