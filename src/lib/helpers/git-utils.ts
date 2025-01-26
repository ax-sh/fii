import { system } from 'gluegun'

export async function getRepoUrl() {
  return system.run('git remote get-url origin', { trim: true })
}

export async function gitFlowInit() {
  return system.run('git flow init -d && git add . && git commit -m init', { trim: true })
}

export async function setHomepageUrlOnGithubRepoDescription(githubPageUrl: string) {
  const repoPath = await system.run("gh repo view --json url --jq '.url'", { trim: true })

  const out = await system.run(`gh repo edit ${repoPath} --homepage ${githubPageUrl}`, {
    trim: true,
  })
  return out
}
