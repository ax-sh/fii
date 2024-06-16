import type { GluegunCommand } from 'gluegun'

import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'node',
  alias: ['bun'],
  description: 'Kill all node process',
  run: async (toolbox) => {
    const { print } = toolbox
    const spinner = print.spin('killing all node processes')

    try {
      await toolbox.killProcess('node.exe')
      await toolbox.killProcess('bun.exe')
    } catch {
      return spinner.warn('Killing failed')
    }

    spinner.succeed('Done')
  },
}

module.exports = command
