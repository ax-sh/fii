import * as os from 'node:os'
import * as jetpack from 'fs-jetpack'

// dayjs import caused error fix later
// import { type FSJetpack } from 'fs-jetpack/types'
// import day from './day'
//
// export function elapsedDuration(date: Date) {
//   return day.duration(day(date).diff())
// }

export const fiiUserDirJoin = async (...paths: string[]) =>
  jetpack.dirAsync(jetpack.path(os.homedir(), '.ax-sh/.fii', ...paths))

export const cliProjectPath = jetpack.path(__dirname, '..', '..')

export function appRootPathJoin(...path: string[]): string {
  return jetpack.path(cliProjectPath, ...path)
}
