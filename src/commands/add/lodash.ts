import type { GluegunCommand } from 'gluegun'

import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'lodash',
  run: async (toolbox) => {
    const { print, system } = toolbox
    const spinner = print.spin('Adding lodash')

    await system.run('ni lodash')
    await system.run('ni -D @types/lodash')

    spinner.succeed('Added lodash')
  },
}

module.exports = command
