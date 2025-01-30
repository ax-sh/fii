import { getJsonFromCmd } from './cli'

vi.mock('./cli')
describe('cmd utils', () => {
  // it('should use spyon does the same as below', async () => {
  //   const cmd = await import('./cmd-utils')
  //   const spy = vi.spyOn(cmd, 'getJsonFromCmd')
  //   spy.mockResolvedValueOnce({ nameWithOwner: 'username/repo' })
  //   const out = await cmd.getJsonFromCmd<{ nameWithOwner: string }>(
  //     `gh repo view --json nameWithOwner`
  //   )
  //   expect(out.nameWithOwner).toEqual('username/repo')
  // })
  it('should use mocked for it', async () => {
    const mockedGetJsonFromCmd = vi.mocked(getJsonFromCmd)
    mockedGetJsonFromCmd.mockResolvedValueOnce({ nameWithOwner: 'username/repo' })
    const out = await getJsonFromCmd<{ nameWithOwner: string }>(`gh repo view --json nameWithOwner`)
    expect(out.nameWithOwner).toEqual('username/repo')
  })
})
