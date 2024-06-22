import type { GluegunCommand } from 'gluegun'
import { type ExtendedToolbox } from  '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'ping',
  run: async (toolbox) => {
    const { print, parameters, system } = toolbox
    const name = parameters.first
    const spinner = print.spin(`Adding ping ${name}`)
    // https://www.cloudping.info/

    print.info(`Todo ping ${name}`)
    await system.run('echo ni -D husky')

    spinner.succeed(`Added ping ${name}`)
  },
}

module.exports = command