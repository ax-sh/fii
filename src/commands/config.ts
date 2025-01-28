import type { GluegunCommand } from 'gluegun'

import { cliProjectPath } from '../lib'
import { type ExtendedToolbox } from '../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'config',
  run: async (toolbox) => {
    const { print, system } = toolbox

    print.info(`FII config`)
    print.info(cliProjectPath)
    const pc = await system.run('system_profiler SPPowerDataType | grep "Cycle Count"', {
      trim: true,
    })
    print.info(pc)
  },
}

module.exports = command
