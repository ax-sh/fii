import { system } from 'gluegun'
import * as path from 'node:path'

export async function getRepoUrl() {
  return system.run('git remote get-url origin', { trim: true })
}

export async function getRepoBaseName() {
  const url = await getRepoUrl()
  return path.parse(url).base.trim()
}
