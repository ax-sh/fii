import type { GluegunCommand } from 'gluegun'
import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'release',
  alias: ['release-it'],
  run: async (toolbox) => {
    const { print, system } = toolbox
    const spinner = print.spin('Adding release-it')
    await toolbox.addScriptToPackageJson(
      'release',
      'dotenv -v DEBUG=1 release-it -- minor --no-git.push --no-git.requireUpstream --ci',
    )
    await system.run('ni -D dotenv-cli release-it')

    spinner.succeed('Added release')
  },
}

module.exports = command
