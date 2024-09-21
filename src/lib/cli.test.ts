describe('cli', () => {
  it('should add new script to package.json', async () => {
    const cli = await import('./cli')
    console.log(await cli.addScriptToPackageJson('moo', 'cow'))
  })
  it.fails('should fail if script exists', async () => {
    const cli = await import('./cli')
    console.log(await cli.addScriptToPackageJson('moo', 'cow'))
    console.log(await cli.addScriptToPackageJson('moo', 'dog'))
  })
})
