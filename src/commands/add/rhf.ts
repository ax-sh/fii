import type { GluegunCommand } from 'gluegun'

import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'rhf',
  run: async (toolbox) => {
    const { print, system } = toolbox

    const spinner = print.spin('Adding React hook forms')

    await system.run('ni react-hook-form @hookform/error-message @hookform/resolvers zod')

    spinner.succeed('Added React hook forms')
  },
}

module.exports = command
