import * as gh from './get-repo-url'
import * as git from './helpers/git-utils'

describe('getRepoBaseName', () => {
  it('should correctly get repo url', async () => {
    const baseName = gh.getRepoBaseName()

    await expect(baseName).resolves.toBe('fii')
  })
  it('should correctly get mocked repo url', async () => {
    const getRepoUrlSpy = vi.spyOn(git, 'getRepoUrl')
    getRepoUrlSpy.mockResolvedValue('hhttps://github.com/ax-sh/portfolio.git')
    const repoName = gh.getRepoBaseName()
    expect(getRepoUrlSpy).toHaveBeenCalledTimes(1)

    await expect(repoName).resolves.toBe('portfolio')
  })

  it.skip('should correctly get mocked repo url v2', async () => {
    vi.mocked(git.getRepoUrl).mockResolvedValue('https://github.com/ax-sh/portfolio.git')

    const baseName = await gh.getRepoBaseName()
    // Assert
    // doesnt work for some reason
    // perhaps side-effect function
    // https://stackoverflow.com/questions/76284919/vitest-vi-spyon-does-not-work-on-side-effects
    // https://github.com/vitest-dev/vitest/issues/3733
    // expect(gh.getRepoUrl).toHaveBeenCalled()

    console.log(baseName)
    await expect(git.getRepoUrl()).resolves.toBe('https://github.com/ax-sh/portfolio')
  })
})
