import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'gh',
  run: async (toolbox) => {
    const { print, system } = toolbox
    const cmd = 'gh api user -H "Authorization: token $(gh auth token)"'
    const tokenPermissions = await system.run(cmd, {
      trim: true,
    })
    const json = JSON.parse(tokenPermissions)
    print.info(json)
  },
}

module.exports = command
