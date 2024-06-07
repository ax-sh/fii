import type { GluegunCommand } from 'gluegun'
import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'chrome',
  description: 'Kill all chrome processes',
  run: async (toolbox) => {
    const { print } = toolbox
    const spinner = print.spin('killing all chrome processes')

    try {
      await toolbox.killProcess('chrome.exe')
    } catch (e) {
      return spinner.warn('Killing failed')
    }

    spinner.succeed('Done')
  },
}

module.exports = command
