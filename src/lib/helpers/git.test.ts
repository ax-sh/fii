import { system } from 'gluegun'
import { CleanOptions, type SimpleGit } from 'simple-git'

import { getJsonFromCmd } from './cmd/cli'
import { searchStringInUnpushedCommits } from './git'

describe('fii simpleGit', () => {
  it('should use git status', async () => {
    const simpleGit = await import('simple-git')
    const baseDir = process.cwd()

    const git: SimpleGit = simpleGit.simpleGit({ baseDir }).clean(CleanOptions.FORCE)
    console.log(baseDir)
    const status = await git.status()
    expect(status).toBeDefined()
    console.log(status)
  })
  it('should search unpushed commits', async () => {
    console.log(await searchStringInUnpushedCommits('gh'))
  })
})

describe.todo('fii Git', () => {
  it('should use gh for updating description', async () => {
    const { setHomepageUrlOnGithubRepoDescription } = await import('../services/github')
    // Mock return values
    const mockRepoUrl = 'https://github.com/user/repo'
    const systemSpy = vi.spyOn(system, 'run')

    // First call returns repo URL
    systemSpy.mockResolvedValueOnce(mockRepoUrl)

    // Second call returns success message
    systemSpy.mockResolvedValueOnce('moooo')

    // Third call returns success message
    systemSpy.mockResolvedValueOnce('moooo') // this will be empty on real one

    const out = await setHomepageUrlOnGithubRepoDescription()

    // Verify first call to get repo URL
    expect(systemSpy).toHaveBeenNthCalledWith(1, "gh repo view --json url --jq '.url'", {
      trim: true,
    })

    // Verify second call to get repo name
    expect(systemSpy).toHaveBeenNthCalledWith(2, `gh repo view --json name -q '.name'`, {
      trim: true,
    })
    // Verify third call to update homepage
    expect(systemSpy).toHaveBeenNthCalledWith(
      3,
      `gh repo edit ${mockRepoUrl} --homepage https://ax-sh.github.io/moooo`,
      {
        trim: true,
      }
    )

    expect(out).toBe('moooo')
  })
})

async function getPushJson(dryRun: boolean = false) {
  let mainCmd: string
  if (dryRun) {
    mainCmd = `git push --dry-run --porcelain`
  } else {
    mainCmd = `git push --porcelain`
  }

  const cmd = `${mainCmd} 2>/dev/null | awk '/^To / { remote=$2; next } { print remote"|"$0 }' | jq -R 'split("|") | { remote: .[0], status: (.[1]|split("\\t")[0]), source: (.[1]|split("\\t")[1]|split(":")[0]), destination: (.[1]|split("\\t")[1]|split(":")[1]) }' | jq -s`
  const out = await getJsonFromCmd<string[]>(cmd)

  return out
}

test('should print in json', async function () {
  const out = await getPushJson(true)
  console.log(out)
})
