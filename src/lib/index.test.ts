describe.todo('Lib Index', () => {
  it('should test fii project dir', async () => {
    const lib = await import('./index')
    const dir = lib.fiiUserDirJoin('', '')
    console.log()
    // console.log(g.fiiUserDirJoin)
    await expect(dir).resolves.toHaveBeenCalledTimes(1)
  })
})
