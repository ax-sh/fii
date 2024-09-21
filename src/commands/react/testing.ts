import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'testing',
  run: async (toolbox) => {
    const { print, system } = toolbox
    const reactTesting = await import('../../lib/helpers/react-utils')

    const spinner = print.spin(`Adding react testing lib`)
    await system.run('ni -D @testing-library/react @testing-library/jest-dom')

    spinner.succeed(`Added react testing lib testing`)
  },
}

module.exports = command
