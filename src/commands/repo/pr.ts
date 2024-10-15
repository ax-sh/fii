import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox, KnownError } from '../../types'
// todo
// https://claude.ai/chat/d2f5a84d-3e57-4bb5-b098-c277954aa055
const command: GluegunCommand<ExtendedToolbox> = {
  name: 'pr',
  run: async (toolbox) => {
    const { print, system } = toolbox
    const branch = await system.run('git rev-parse --abbrev-ref HEAD', { trim: true })
    try {
      const hasPr = await system.run(`gh pr view "${branch}" --jq`, { trim: true })
      print.info(hasPr)
    } catch (e) {
      console.log(new KnownError([e.cmd, e.stderr]))
    }
  },
}

module.exports = command
