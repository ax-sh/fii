import type { FSJetpack } from 'fs-jetpack/types'
import { type GluegunToolbox, print } from 'gluegun'
import { bgRed, dim, white } from 'kolorist'

// import { version } from '../pa'
import type { addScriptToPackageJson } from './lib/cli'

export class KnownError extends Error {
  constructor(message: string | string[]) {
    if (Array.isArray(message)) {
      message = message.join('\n')
    }

    print.error(`${bgRed(white('[KnownError]'))}: ${message}`)
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
}

// Maps a union of string literals (e.g., 'url' | 'name') to an object with keys of those strings.
export type MappedString<T extends string> = {
  [K in T]: string // Iterate over each member of the union `T`
}

// For unknown/dynamic JSON structure, use these types:
type JSONPrimitive = string | number | boolean | null
type JSONArray = JSONValue[]
type JSONObject = { [key: string]: JSONValue }
// use this for json
type JSONValue = JSONPrimitive | JSONObject | JSONArray

// For typing JSON Schema-like structures
// interface JSONSchema {
//   type: 'string' | 'number' | 'boolean' | 'object' | 'array' | 'null';
//   properties?: Record<string, JSONSchema>;
//   items?: JSONSchema;
//   required?: string[];
//   additionalProperties?: boolean | JSONSchema;
// }
