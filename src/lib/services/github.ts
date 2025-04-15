import { system } from 'gluegun'

import type { MappedString } from '../../types'
import { getJsonFromCmd } from '../helpers/cmd/cli'

export async function getGithubPagesUrlForRepo() {
  const repoName = await system.run("gh repo view --json name -q '.name'", { trim: true })
  const homepage = `https://ax-sh.github.io/${repoName}`
  return homepage
}

export async function setHomepageUrlOnGithubRepoDescription() {
  const repoPath = await system.run("gh repo view --json url --jq '.url'", { trim: true })
  const homepage = await getGithubPagesUrlForRepo()

  const out = await system.run(`gh repo edit ${repoPath} --homepage ${homepage}`, {
    trim: true,
  })
  return out
}

export async function getGithubRepoInfo() {
  const props = [
    'url',
    'name',
    'createdAt',
    'description',
    'homepageUrl',
    'id',
    'nameWithOwner',
    'pushedAt',
    'sshUrl',
    'visibility',
  ] as const
  const cmd = `gh repo view --json ${props.join(',')}`
  return getJsonFromCmd<MappedString<(typeof props)[number]>>(cmd)
}
