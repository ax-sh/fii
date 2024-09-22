import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'testing',
  description: 'Adds react testing lib with vitest',
  run: async (toolbox) => {
    const { print } = toolbox

    const spinner = print.spin(`Adding react testing lib`)
    const reactTesting = await import('../../lib/helpers/react-utils')
    // await reactTesting.addDeps()
    await reactTesting.addRTLToVitest()
    // await reactTesting.setupTsTypes()

    spinner.succeed(`Added react testing lib testing`)
  },
}

module.exports = command
