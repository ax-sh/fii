import type { GluegunCommand } from 'gluegun'
import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'python',
  alias: ['py'],
  description: 'Kill all python processes',
  run: async (toolbox) => {
    const { print } = toolbox
    const spinner = print.spin('killing all python processes')

    try {
      await toolbox.killProcess('python.exe')
    } catch {
      return spinner.warn('Killing failed')
    }

    spinner.succeed('Done')
  },
}

module.exports = command
