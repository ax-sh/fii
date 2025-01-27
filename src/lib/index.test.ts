import * as jetpack from 'fs-jetpack'

vi.mock('fs-jetpack', () => ({
  path: (...args: string[]) => args.join('/'),
  dirAsync: vi.fn(async (path) => path),
}))

// Mock the entire os module
vi.mock('node:os', () => ({
  homedir: vi.fn(() => '/home/user'), // Mock homedir to return a fixed value
}))
describe('Lib Index', () => {
  it('should test fii project dir', async () => {
    const lib = await import('./index')

    const dir = lib.fiiUserDirJoin('aa', 'bb')

    await expect(dir).resolves.toEqual('/home/user/.ax-sh/.fii/aa/bb')
    expect(jetpack.dirAsync).toHaveBeenCalledTimes(1)
    expect(jetpack.dirAsync).toHaveResolvedTimes(1)
    expect(vi.spyOn(jetpack, 'dirAsync')).toHaveResolvedTimes(1)
  })
  //
  // it.todo('should test fii project dir using spy', async () => {
  //   // try using spy for integration test
  //   const lib = await import('./index')
  //
  //   const dir = lib.fiiUserDirJoin('aa', 'bb')
  //
  //   await expect(dir).resolves.toEqual('/home/user/.ax-sh/.fii/aa/bb')
  //   expect(jetpack.dirAsync).toHaveBeenCalledTimes(1)
  //   expect(jetpack.dirAsync).toHaveResolvedTimes(1)
  //   expect(vi.spyOn(jetpack, 'dirAsync')).toHaveResolvedTimes(1)
  // })
})
