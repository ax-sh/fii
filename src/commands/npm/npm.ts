import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'npm',
  run: async (toolbox) => {
    const { print, parameters, system } = toolbox
    const name = parameters.first
    const spinner = print.spin(`Adding npm ${name}`)

    const root = await import('../../services/npm')
    await root.run()
    print.info(`Todo npm ${name}`)
    await system.run('echo ni -D husky')
    spinner.succeed(`Added npm ${name}`)
  },
}

module.exports = command
