import { system } from 'gluegun'

import { KnownError } from '../types'

export function packageJsonScript(commandName: string) {
  const opts = { trim: true }
  function set(cmd: string) {
    return system.run(`pnpm pkg set scripts.${commandName}="${cmd}"`, opts)
  }
  function get() {
    return system.run(`pnpm pkg get scripts.${commandName}`, opts)
  }
  function remove() {
    return system.run(`pnpm pkg remove scripts.${commandName}`, opts)
  }
  async function isAvailable() {
    return (await get()) !== '{}'
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
