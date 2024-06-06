import { system } from 'gluegun'
import * as path from 'node:path'

export function getRepoUrl() {
  return system.run('git remote get-url origin')
}

export async function getRepoBaseName() {
  const url = await getRepoUrl()
  return path.parse(url).base.trim()
}
