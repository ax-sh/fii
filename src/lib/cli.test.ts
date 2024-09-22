import { system } from 'gluegun'

// vi.mock('gluegun/system', { spy: true })
describe('cli', () => {
  it('should check if script exists in package.json', async () => {
    const cli = await import('./cli')
    const script = cli.packageJsonScript('test')
    const has = await script.isAvailable()
    expect(has).toBeTruthy()
  })

  it.fails('fail if script exists in package.json', async () => {
    const cli = await import('./cli')
    const script = cli.packageJsonScript('fooo')
    const has = await script.isAvailable()
    expect(has).toBeTruthy()
  })

  test('should call system.run with the correct command for get()', async () => {
    const systemSpy = vi.spyOn(system, 'run')
    systemSpy.mockResolvedValueOnce(null)
    const out = system.run('echo fooo', { trim: true })
    expect(systemSpy).toHaveBeenCalledTimes(1)
    expect(systemSpy).toHaveBeenCalledWith('echo fooo', { trim: true })
    console.log(await out)
  })
  // it.only('should check if has all required property ', async () => {
  //   const cli = await import('./cli')
  //   const script = cli.packageJsonScript('mooooooo')
  //   await script.set('dooo')
  //   console.log(await script.isAvailable())
  //   // expect(Object.keys(script)).toHaveProperty('set', 'get', 'remove')
  //   console.log(Object.keys(script))
  // })
  // it('should add new script to package.json', async () => {
  //   const cli = await import('./cli')
  //   console.log(await cli.addScriptToPackageJson('moo', 'cow'))
  // })
  // it.fails('should fail if script exists', async () => {
  //   const cli = await import('./cli')
  //   console.log(await cli.addScriptToPackageJson('moo', 'cow'))
  //   console.log(await cli.addScriptToPackageJson('moo', 'dog'))
  // })
})
