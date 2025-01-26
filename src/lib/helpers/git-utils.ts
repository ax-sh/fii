import { system } from 'gluegun'

export async function getRepoUrl() {
  return system.run('git remote get-url origin', { trim: true })
}

export async function gitFlowInit() {
  return system.run('git flow init -d && git add . && git commit -m init', { trim: true })
}

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
