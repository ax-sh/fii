import { system } from 'gluegun'

import { KnownError } from '../types'

export function packageJsonScript(commandName: string) {
  const opts = { trim: true }
  function set(cmd: string) {
    return system.run(`npm pkg set scripts.${commandName}="${cmd}"`, opts)
  }
  function get() {
    return system.run(`npm pkg get scripts.${commandName}`, opts)
  }
  function remove() {
    return system.run(`npm pkg delete scripts.${commandName}`, opts)
    // return system.run(`npm pkg remove scripts.${commandName}`, opts)
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
