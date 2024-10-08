import { system } from 'gluegun'

import { KnownError } from '../types'

export function packageJsonScript(commandName: string) {
  const pm: 'npm' | 'pnpm' = 'npm'
  const opts = { trim: true }
  function set(cmd: string) {
    return system.run(`${pm} pkg set scripts.${commandName}="${cmd}"`, opts)
  }
  function get() {
    return system.run(`${pm} pkg get scripts.${commandName}`, opts)
  }
  function remove() {
    switch (pm) {
      case 'npm':
        return system.run(`${pm} pkg delete scripts.${commandName}`, opts)
      case 'pnpm':
        return system.run(`${pm} pkg remove scripts.${commandName}`, opts)
      default:
        throw new KnownError('Not implemented')
    }
  }
  async function isAvailable() {
    const result = await get()
    return result !== '{}'
  }
  return { set, get, remove, isAvailable }
}

export async function addScriptToPackageJson(scriptName: string, cmd: string) {
  const script = packageJsonScript(scriptName)
  const hasScript = await script.isAvailable()
  if (hasScript) {
    throw new KnownError(`script ${scriptName} already defined Exiting`)
  }

  return script.set(cmd)
}
