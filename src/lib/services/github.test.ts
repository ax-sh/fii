import { faker } from '@faker-js/faker/locale/ar'
import { getJsonFromCmd } from '../helpers/cmd/cli'
import { getGithubRepoInfo, listNPMPackagesFromGithubRegistry } from './github'

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
  it('should use gh for getting npm packages from github registry', async () => {
    const cmdMock = vi.mocked(getJsonFromCmd)

    cmdMock.mockResolvedValueOnce(
      faker.helpers.multiple(() => ({
        name: faker.helpers.arrayElement(['a', 'b', 'c', 'd']),
      }))
    )
    // uncomment above to use the real thing

    const out = await listNPMPackagesFromGithubRegistry()
    const arr = out.map((i) => {
      delete i.owner
      return i
    })
    console.log(arr)
    expect(arr).toHaveLength(3)
    console.log(arr.map((i) => i.name))
    expect(arr.length).toEqual(3)
    const [pkg] = arr

    console.log(pkg.owner)
    console.log(pkg.package_type)
  })
})
