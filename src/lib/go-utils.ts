import { print, system } from 'gluegun'

export function goInstall(mod: string) {
  print.info(`Go Installing: ${mod}`)
  return system.run(mod)
}
