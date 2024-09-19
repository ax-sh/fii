import * as gh from './get-repo-url'
import * as github from './helpers/git-utils'

describe('getRepoBaseName', () => {
  it('should correctly get repo url', async () => {
    const baseName = await gh.getRepoBaseName()

    console.log(baseName)
    expect(baseName).resolves.toBe('https://github.com/ax-sh/fii')
  })
  it('should correctly get mocked repo url', async () => {
    const getRepoUrlSpy = vi.spyOn(github, 'getRepoUrl')
    getRepoUrlSpy.mockResolvedValue('https://github.com/ax-sh/fii.git')
    const baseName = await gh.getRepoBaseName()
    expect(getRepoUrlSpy).toHaveBeenCalledTimes(1)
    console.log(baseName)
    expect(baseName).resolves.toBe('https://github.com/ax-sh/fii')
  })

  it.skip('should correctly get mocked repo url v2', async () => {
    vi.mocked(github.getRepoUrl).mockResolvedValue('https://github.com/ax-sh/portfolio.git')

    const baseName = await gh.getRepoBaseName()
    // Assert
    // doesnt work for some reason
    // perhaps side-effect function
    // https://stackoverflow.com/questions/76284919/vitest-vi-spyon-does-not-work-on-side-effects
    // https://github.com/vitest-dev/vitest/issues/3733
    // expect(gh.getRepoUrl).toHaveBeenCalled()

    console.log(baseName)
    await expect(github.getRepoUrl()).resolves.toBe('https://github.com/ax-sh/portfolio')
  })
})
