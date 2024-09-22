import type { BrowserCookiesSingleton } from '@ax-sh/browser-cookies'
import type { FSJetpack } from 'fs-jetpack/types'
import { type GluegunToolbox, print } from 'gluegun'

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

export class UsableBinaryNotFound extends Error {}

type ProcessOptions = 'python.exe' | 'node.exe' | 'bun.exe' | 'chrome.exe' | string

export type ExtendedToolbox = GluegunToolbox & {
  addScriptToPackageJson: typeof addScriptToPackageJson
  killProcess(killProcess: ProcessOptions): Promise<string>
  mkCd(dirPath: ProcessOptions): Promise<void>
  cliAppDir(...paths: string[]): Promise<FSJetpack>
  loadBrowser: typeof BrowserCookiesSingleton.instance
}
