import { Octokit } from 'octokit'

describe('Repo', () => {
  it('should check github node registery', async () => {
    // const RegClient = await import('npm-registry-client') // depricated
    // console.log(RegClient.default)

    // Octokit.js
    // https://github.com/octokit/core.js#readme
    const octokit = new Octokit({})
    const package_name = '%40ax-sh%2Fanilist-next-auth'
    const o = await octokit.request(
      'GET /orgs/{org}/packages/{package_type}/{package_name}/versions',
      {
        package_type: 'npm',
        package_name,
        org: 'ax-sh',
        // headers: {
        //   'X-GitHub-Api-Version': '2022-11-28',
        // },
      }
    )
    // const org = 'ax-sh'
    // const package_name = '@ax-sh/anilist-next-auth'
    //
    //
    // const o = await octokit.request(`GET /orgs/${org}/packages/npm/${package_name}/versions`, {
    //   package_type: 'PACKAGE_TYPE',
    //   package_name,
    //   org: 'ax-sh',
    //   headers: {
    //     'X-GitHub-Api-Version': '2022-11-28',
    //   },
    // })
    console.log(o)
  })
})
