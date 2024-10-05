import * as path from 'node:path'
import * as prettier from 'prettier'
import type {
  Expression,
  LiteralExpression,
  ObjectLiteralExpression,
  PropertyAssignment,
  ts,
} from 'ts-morph'
import { Project, ScriptKind, type SourceFile, SyntaxKind } from 'ts-morph'

export function openAsSourceFile(filePath: string) {
  const project = new Project({ compilerOptions: {} })
  const sourceFile = project.addSourceFileAtPath(filePath)

  return sourceFile
}

export async function createMemorySourceFile(tempFile: string, input: string) {
  const project = new Project({
    compilerOptions: {},
    useInMemoryFileSystem: true,
  })
  const sourceFile = project.createSourceFile(tempFile, input, {
    // Note: .js and .mjs can still be valid for TS projects.
    // We can't infer TypeScript from config.tsx.
    scriptKind: path.extname(tempFile) === '.ts' ? ScriptKind.TS : ScriptKind.JS,
  })

  return sourceFile
}

export async function createSourceFile(tempFile: string, input: string) {
  const project = new Project({
    compilerOptions: {},
  })
  const sourceFile = project.createSourceFile(tempFile, input, {
    // Note: .js and .mjs can still be valid for TS projects.
    // We can't infer TypeScript from config.tsx.
    scriptKind: path.extname(tempFile) === '.ts' ? ScriptKind.TS : ScriptKind.JS,
  })

  return sourceFile
}

export const parseValue = (value: LiteralExpression): unknown => {
  switch (value.getKind()) {
    case SyntaxKind.NumericLiteral:
      return Number(value.getText())
    case SyntaxKind.StringLiteral:
      return value.getLiteralText()
    case SyntaxKind.TrueKeyword:
      return true
    case SyntaxKind.FalseKeyword:
      return false
    default:
      return value.getText()
  }
}

export function parseJsonObject(initializer: Expression<ts.Expression>) {
  const objectLiteral = initializer as ObjectLiteralExpression
  // Create an object to store the parsed properties
  // const parsedObject: Record<string, unknown> = {}
  const properties = objectLiteral.getProperties()
  // properties.forEach((property) => {
  //   if (property.isKind(SyntaxKind.PropertyAssignment)) {
  //     const name = property.getName()
  //     const value = property.getInitializer()
  //     console.log(name, value, 999)
  //
  //     if (value) {
  //       if (value.isKind(SyntaxKind.NumericLiteral)) {
  //         parsedObject[name] = Number(value.getText())
  //       } else if (value.isKind(SyntaxKind.StringLiteral)) {
  //         parsedObject[name] = value.getLiteralText()
  //       } else if (value.isKind(SyntaxKind.TrueKeyword) || value.isKind(SyntaxKind.FalseKeyword)) {
  //         parsedObject[name] = value.getText() === 'true'
  //       } else {
  //         // For other types, store as string (you might want to handle more types)
  //         parsedObject[name] = value.getText()
  //       }
  //     }
  //   }
  // })
  const parsedObject: Record<string, unknown> = Object.fromEntries(
    properties
      .filter((property): property is PropertyAssignment =>
        property.isKind(SyntaxKind.PropertyAssignment)
      )
      .map((property) => {
        const name = property.getName()
        const value = property.getInitializer()
        console.log(22222, value.getType())
        return [name, value ? parseValue(value as LiteralExpression) : undefined]
      })
  )

  console.log(parsedObject, objectLiteral.getFullText())
  return parsedObject
}

export function formatSourceFile(sourceFile: SourceFile) {
  return prettier.format(sourceFile.getFullText(), {
    parser: 'typescript',
  })
}

export function formatTsFile(script: string) {
  return prettier.format(script, {
    parser: 'typescript',
  })
}
