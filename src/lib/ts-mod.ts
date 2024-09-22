import * as fs from 'node:fs'
import * as os from 'node:os'
import * as path from 'node:path'
import { Project, ScriptKind } from 'ts-morph'

export function openAsSourceFile(filePath: string) {
  const project = new Project({ compilerOptions: {} })
  const sourceFile = project.addSourceFileAtPath(filePath)

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
