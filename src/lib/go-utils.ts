import { print, system } from 'gluegun'

export async function goInstall(mod: string) {
  print.info(`\nGo Installing: ${mod}`)
  const out = await system.run(mod, { trim: true })

  print.success(`\nGo DONE Installing: ${mod}`)
  return out
}
