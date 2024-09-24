import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'testing',
  description: 'Adds react testing lib with vitest',
  run: async (toolbox) => {
    const { print } = toolbox

    const spinner = print.spin(`Adding react testing lib`)
    const rt = await import('../../lib/helpers/react-utils')
    await rt.addDeps()

    await rt.addRTLToVitest()

    spinner.succeed(`Added react testing lib testing`)
    await rt.setupTsTypes()
  },
}

module.exports = command
