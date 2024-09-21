import { CleanOptions, type SimpleGit } from 'simple-git'

describe('fii Git', () => {
  it('should use git status', async () => {
    const simpleGit = await import('simple-git')

    const git: SimpleGit = simpleGit.simpleGit({ baseDir: process.cwd() }).clean(CleanOptions.FORCE)
    console.log(process.cwd())
    const status = await git.status()
    expect(status).toBeDefined()
    console.log(status)
  })
})
