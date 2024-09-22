import { Project } from 'ts-morph'

export function openAsSourceFile(filePath: string) {
  const project = new Project({ compilerOptions: {} })
  const sourceFile = project.addSourceFileAtPath(filePath)

  return sourceFile
}
