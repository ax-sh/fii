import { type GluegunToolbox, print } from 'gluegun'
import { type FSJetpack } from 'fs-jetpack/types'

export class KnownError extends Error {
  constructor(msg: string | string[]) {
    let message: string
    if (Array.isArray(msg)) {
      message = msg.join('\n')
    }
    print.error(message)
    super(message)
  }
}

export class UsableBinaryNotFound extends Error {}

type ProcessOptions = 'python.exe' | 'node.exe' | 'bun.exe' | string

export type ExtendedToolbox = GluegunToolbox & {
  addScriptToPackageJson(scriptName: string, cmd: string): Promise<void>
  killProcess(killProcess: ProcessOptions): Promise<string>
  mkCd(dirPath: ProcessOptions): Promise<void>
  cliAppDir(): Promise<FSJetpack>
}
