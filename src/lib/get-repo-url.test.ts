import * as gh from './get-repo-url'

vi.mock('./get-repo-url', { spy: true })
describe('getRepoBaseName', () => {
  it('should correctly get repo url', async () => {
    const baseName = await gh.getRepoBaseName()
    console.log(baseName)
    expect(gh.getRepoUrl()).resolves.toBe('https://github.com/ax-sh/fii')
  })

  it('should correctly get mocked repo url', async () => {
    const mockVal = 'https://github.com/user/repok.git'

    // gh.getRepoUrl.mockResolvedValue(mockVal)
    // const baseName = await gh.getRepoBaseName()
    const w = gh.getRepoUrl()

    await expect(w).resolves.toHaveBeenCalled()
    await expect(w).resolves.toBe('https://github.com/ax-sh/repo')
  })

  it('should correctly get mocked repo url v2', async () => {
    vi.mocked(gh.getRepoUrl).mockResolvedValue('https://github.com/user/repo.git')

    const baseName = await gh.getRepoBaseName()
    // Assert
    // expect(gh.getRepoUrl).toHaveBeenCalled()
    console.log(baseName)
    expect(gh.getRepoUrl()).resolves.toBe('https://github.com/ax-sh/repo')
  })

  it('should return the base name of the repo from the URL', async () => {
    // Mock the getRepoUrl function
    const getRepoUrlMock = vi
      .spyOn(gh, 'getRepoUrl')
      .mockResolvedValue('https://github.com/user/repo.git')

    // Act
    const baseName = await gh.getRepoBaseName()

    // Assert
    expect(gh.getRepoUrl).toHaveBeenCalled()
    // expect(baseName).toBe('repo.git') // path.parse(url).base will be 'repo.git'
    //
    // // Clean up
    // getRepoUrlMock.mockRestore()
  })
})
