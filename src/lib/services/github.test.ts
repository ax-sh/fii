import { getJsonFromCmd } from '../helpers/cmd/cli'
import { getGithubRepoInfo } from './github'

// Mock the system module
vi.mock(
  '../helpers/cmd/cli',
  // this allows pass through when not using implementation
  { spy: true }
)

describe('test gh cli', () => {
  it('should use gh for getting repo info', async () => {
    const cmdMock = vi.mocked(getJsonFromCmd)

    // comment out below to use the actual implementation only works when spy is true
    cmdMock.mockResolvedValueOnce({
      name: 'repo',
      url: 'https://github.com/user/repo',
      visibility: 'PUBLIC',
    })

    const json = await getGithubRepoInfo()

    expect(json).toEqual({
      name: 'repo',
      url: expect.stringContaining('user/repo'),
      visibility: 'PUBLIC',
    })
  })
})
