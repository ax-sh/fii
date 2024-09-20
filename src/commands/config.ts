import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'config',
  run: async (toolbox) => {
    const { print } = toolbox

    print.info(`Show config`)
    // await system.run('echo ni -D husky')
  },
}

module.exports = command
