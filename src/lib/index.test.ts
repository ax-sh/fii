describe('Lib Index', () => {
  it('should test fii project dir', async () => {
    const g = await import('./index')
    console.log(g.fiiUserDirJoin())
    // console.log(g.fiiUserDirJoin)
    expect(1).toBe(1)
  })
})
