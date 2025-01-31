import { system } from 'gluegun'
import { CleanOptions, type SimpleGit } from 'simple-git'

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
