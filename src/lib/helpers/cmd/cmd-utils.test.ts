describe('cmd utils', () => {
  it('should ', async () => {
    const cmd = await import('./cmd-utils')
    const spy = vi.spyOn(cmd, 'getJsonFromCmd')
    spy.mockResolvedValueOnce({ nameWithOwner: 'username/repo' })
    const out = await cmd.getJsonFromCmd<{ nameWithOwner: string }>(
      `gh repo view --json nameWithOwner`
    )
    expect(out.nameWithOwner).toEqual('username/repo')
  })
})
