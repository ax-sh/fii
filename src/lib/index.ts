import { filesystem } from 'gluegun'

import day from './day'

export function elapsedDuration(date: Date) {
  return day.duration(day(date).diff())
}

const fiiUserDirJoin = async (...paths: string[]) =>
  filesystem.dirAsync(filesystem.path(filesystem.homedir(), '.ax-sh/.fii', ...paths))

module.exports = { fiiUserDirJoin }
