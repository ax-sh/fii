import { print, system } from 'gluegun'

export async function goInstall(mod: string) {
  print.info(`Go Installing: ${mod}`)
  const out = await system.run(mod)

  print.success(`\nGo DONE Installing: ${mod}`)
  return out
}
