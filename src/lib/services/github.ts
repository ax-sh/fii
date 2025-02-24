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

export interface GithubNpmPackages {
  id: number
  name: string
  package_type: string
  owner: GithubOwner
  version_count: number
  visibility: string
  url: string
  created_at: Date
  updated_at: Date
  html_url: string
}

export interface GithubOwner {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  user_view_type: string
  site_admin: boolean
}

export async function listNPMPackagesFromGithubRegistry() {
  const user = 'ax-sh'
  const path = `/users/${user}/packages?package_type=npm`
  const cmd = `gh api ${path}`
  // gh api \
  // -H "Accept: application/vnd.github+json" \
  // -H "X-GitHub-Api-Version: 2022-11-28" \
  return getJsonFromCmd<GithubNpmPackages[]>(cmd)
}
