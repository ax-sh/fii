import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox, KnownError } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'pr',
  run: async (toolbox) => {
    const { print, system } = toolbox
    const branch = await system.run('git rev-parse --abbrev-ref HEAD', { trim: true })
    try {
      const hasPr = await system.run(`gh pr view "${branch}"`)
      print.info(hasPr)
    } catch (e) {
      console.log(new KnownError([e.cmd, e.stderr]))
    }
  },
}

module.exports = command
