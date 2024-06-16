import type { GluegunCommand } from 'gluegun'

import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'biome',
  run: async (toolbox) => {
    const { print, system } = toolbox
    const spinner = print.spin('Adding biome')

    await system.run('ni -D @biomejs/biome')
    await system.run('nlx @biomejs/biome init')
    await toolbox.addScriptToPackageJson('format', 'nlx @biomejs/biome format --write ./src')
    // for linting
    //  nlx @biomejs/biome lint --apply ./src
    // biome migrate prettier --write
    // biome migrate eslint --write

    spinner.succeed('Added biome')
  },
}

module.exports = command
