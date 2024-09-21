import type { GluegunCommand } from 'gluegun'

import { cliProjectPath } from '../lib'
import { type ExtendedToolbox } from '../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'config',
  run: async (toolbox) => {
    const { print } = toolbox

    print.info(`FII config`)
    print.info(cliProjectPath)
    // await system.run('echo ni -D husky')
  },
}

module.exports = command
