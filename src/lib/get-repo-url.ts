import * as path from 'node:path'

import { getRepoUrl } from './helpers/git-utils'

export async function getRepoBaseName() {
  const url = await getRepoUrl()
  const parsed = path.parse(url)
  /**
   * {
   *   root: '',
   *   dir: 'https://github.com/ax-sh',
   *   base: 'fii',
   *   ext: '',
   *   name: 'fii',
   * }
   */
  const repoName = parsed.name.trim()

  return repoName
}
