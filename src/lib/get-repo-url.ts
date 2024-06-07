import * as path from 'node:path'
import { system } from 'gluegun'

export async function getRepoUrl() {
  return system.run('git remote get-url origin')
}

export async function getRepoBaseName() {
  const url = await getRepoUrl()
  return path.parse(url).base.trim()
}
