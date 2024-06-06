import type { GluegunCommand } from 'gluegun'

import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'kill',
  description: 'Kill all python processes',
  run: async (toolbox) => {
    const { print, parameters } = toolbox
    const process = parameters.first
    const spinner = print.spin(`killing all ${[process]} processes`)

    try {
      await toolbox.killProcess(process)
    } catch (e) {
      return spinner.warn('Killing failed')
    }
    spinner.succeed('Done')
  },
}

module.exports = command
