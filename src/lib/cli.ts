import { system } from 'gluegun'

import { KnownError } from '../types'

export function packageScript(commandName: string) {
  function set(cmd: string) {
    return system.run(`pnpm pkg set scripts.${commandName}="${cmd}"`)
  }
  function get() {
    return system.run(`pnpm pkg get scripts.${commandName}`, { trim: true })
  }
  function remove() {
    return system.run(`pnpm pkg remove scripts.${commandName}`, { trim: true })
  }
  return { set, get, remove }
}

export async function addScriptToPackageJson(scriptName: string, cmd: string) {
  const script = await system.run(`pnpm pkg get scripts.${scriptName}`, { trim: true })
  const hasScript = script !== '{}'
  if (hasScript) {
    throw new KnownError(`script ${scriptName} already defined Exiting`)
  }

  return await system.run(`pnpm pkg set scripts.${scriptName}="${cmd}"`)
}
