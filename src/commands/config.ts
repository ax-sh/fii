import type { GluegunCommand } from 'gluegun'

import { cliProjectPath } from '../lib'

import { type ExtendedToolbox } from '../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'config',
  run: async (toolbox) => {
    const { print, getJsonFromCmd } = toolbox

    print.info(`FII config`)
    print.info(cliProjectPath)

    const pc = await getJsonFromCmd(
      "system_profiler SPPowerDataType -json | jq '.SPPowerDataType[0].sppower_battery_health_info'"
    )
    console.info(pc)
  },
}

module.exports = command
