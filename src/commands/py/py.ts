import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'py',
  run: async (toolbox) => {
    const { print, parameters, system } = toolbox
    const name = parameters.first
    const spinner = print.spin(`Adding py ${name}`)

    print.info(`Todo py ${name}`)
    await system.run('echo ni -D husky')

    spinner.succeed(`Added py ${name}`)
  },
}

module.exports = command
