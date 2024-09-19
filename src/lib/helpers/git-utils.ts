import { system } from 'gluegun'

export async function getRepoUrl() {
  return system.run('git remote get-url origin', { trim: true })
}
