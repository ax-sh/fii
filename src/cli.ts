import { build } from 'gluegun'

/**
 * Create the cli and kick it off
 */
async function run(argv) {
  // create a CLI runtime
  const cli = build()
    .brand('fii')
    .src(__dirname)
    .plugins('./node_modules', { matching: 'fii-*', hidden: true })
    .help() // provides default for help, h, --help, -h
    .version({
      name: 'version',
      alias: 'v',
      description: 'Output the version number',
      dashed: true,
      run: async (toolbox) => {
        const localVersion = toolbox.meta.version()
        toolbox.print.info(localVersion)
        const user = 'ax-sh'
        const repo = 'fii'
        // const remoteVersion = await toolbox.system.run(
        //   `gh api repos/${user}/${repo}/contents/package.json | jq .download_url`,
        // )
        const url = `https://raw.githubusercontent.com/${user}/${repo}/master/package.json`
        const resp = await toolbox.http
          .create({ headers: { Accept: 'application/vnd.github.v3+json' } })
          .get(url)
        const remoteVersion = resp.data.version
        console.log()
        toolbox.print.success(`Remote ${remoteVersion}`)
        toolbox.print.success(`Local  ${localVersion}`)
      },
    }) // provides default for version, v, --version, -v
    .create()
  // enable the following method if you'd like to skip loading one of these core extensions
  // this can improve performance if they're not necessary for your project:
  // .exclude(['meta', 'strings', 'print', 'filesystem', 'semver', 'system', 'prompt', 'http', 'template', 'patching', 'package-manager'])
  // and run it
  // send it back (for testing, mostly)
  return await cli.run(argv)
}

module.exports = { run }
