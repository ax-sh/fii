import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'path',
  run: async (toolbox) => {
    const { print, filesystem } = toolbox
    const cliProjectPath = filesystem.path(__dirname, '..', '..', '..')
    const spinner = print.spin(`Location`)

    spinner.succeed(`Fii location: ${cliProjectPath}`)
  },
}

module.exports = command
