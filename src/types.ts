import type { BrowserCookiesSingleton } from '@ax-sh/browser-cookies'
import type { FSJetpack } from 'fs-jetpack/types'
import { type GluegunToolbox, print } from 'gluegun'
import { dim } from 'kolorist'

// import { version } from '../pa'
import type { addScriptToPackageJson } from './lib/cli'

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
// const indent = '    '
export const handleCliError = (error: unknown) => {
  if (error instanceof Error && !(error instanceof KnownError)) {
    if (error.stack) {
      console.error(dim(error.stack.split('\n').slice(1).join('\n')))
    }
    // console.error(`\n${indent}${dim(`  v${version}`)}`)
    // console.error(`\n${indent}Please open a Bug report with the information above:`)
    // console.error(`${indent}https://github.com/Nutlope/aicommits/issues/new/choose`)
  }
}

export class UsableBinaryNotFound extends Error {}

type ProcessOptions = 'python.exe' | 'node.exe' | 'bun.exe' | 'chrome.exe' | string

export type ExtendedToolbox = GluegunToolbox & {
  addScriptToPackageJson: typeof addScriptToPackageJson
  killProcess(killProcess: ProcessOptions): Promise<string>
  mkCd(dirPath: ProcessOptions): Promise<void>
  cliAppDir(...paths: string[]): Promise<FSJetpack>
  loadBrowser: typeof BrowserCookiesSingleton.instance
}
