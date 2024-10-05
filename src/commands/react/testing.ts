import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'testing',
  alias: ['test'],
  description: 'Adds react testing lib with vitest',
  run: async (toolbox) => {
    const { print, template } = toolbox

    const spinner = print.spin(`Adding react testing lib`)
    const rt = await import('../../lib/helpers/react-utils')
    await rt.addDeps()
    await rt.setupTsTypes()
    await rt.addRTLToVitest()
    await rt.addRTLTest(template)

    spinner.succeed(`Added react testing lib testing`)
  },
}

module.exports = command
