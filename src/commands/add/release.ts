import type { GluegunCommand } from 'gluegun'

import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'release',
  alias: ['release-it'],
  description: 'Adds release-it and dotenv-cli to work with git-flow locally',
  run: async (toolbox) => {
    const { print, system, template, filesystem } = toolbox
    const spinner = print.spin('Adding release-it')
    // NOTE option --no-git.push --no-git.requireUpstream makes it work locally without internet
    await toolbox.addScriptToPackageJson(
      'release',
      'dotenv -v DEBUG=1 release-it -- minor --no-git.push --no-git.requireUpstream --ci'
    )

    await toolbox.addScriptToPackageJson('changelog:latest', 'nr git-cliff -l')
    await system.run(
      'ni -D dotenv-cli release-it @release-it/conventional-changelog git-cliff is-ci'
    )
    const fileName = '.release-it.cjs'
    await template.generate({
      template: `/CONFIGS/release-it/${fileName}`,
      target: filesystem.path('.', fileName),
    })

    spinner.succeed('Added release-it and its config')
  },
}

module.exports = command
