import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'pkgroll',
  run: async (toolbox) => {
    const { print, system } = toolbox

    const spinner = print.spin(`Adding pkgroll`)

    await system.run('ni -D pkgroll rimraf')
    await toolbox.addScriptToPackageJson(
      'pub',
      'nr prepublishOnly && npm publish --scope=@ax-sh --registry=https://npm.pkg.github.com'
    )
    await toolbox.addScriptToPackageJson('pub:dry', 'nr pub --dry-run')
    try {
      await toolbox.addScriptToPackageJson('clean', 'rimraf dist')
    } catch (e) {}

    spinner.succeed(`Added pkgroll `)
  },
}

module.exports = command
