import * as gh from './get-repo-url'

vi.mock('./get-repo-url', { spy: true })
describe('getRepoBaseName', () => {
  it('should correctly parse', async () => {
    const baseName = await gh.getRepoBaseName()
    console.log(baseName)
    expect(gh.getRepoUrl()).resolves.toBe('https://github.com/ax-sh/fii')
  })
})
