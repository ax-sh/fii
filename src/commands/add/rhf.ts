import type { GluegunCommand } from 'gluegun'

import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'rhf',
  description: 'adds react hook form on a node/bun repo',
  run: async (toolbox) => {
    const { print, system } = toolbox

    const spinner = print.spin('Adding React hook forms')

    await system.run('ni react-hook-form @hookform/error-message @hookform/resolvers zod')
    // todo add basic test using react testing lib

    spinner.succeed('Added React hook forms')
  },
}

module.exports = command
