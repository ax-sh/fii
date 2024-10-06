import axios from 'axios'
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

export async function listNpmPackages() {
  try {
    const org = '@ax-sh'
    const url = `https://api.github.com/orgs/${org}/packages?package_type=npm`
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${process.env.NPM_TOKEN}`,
        // Authorization: `token ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    })
    console.log(response.data)
  } catch (error) {
    console.error('Error fetching packages:', error.response.data)
  }
}
