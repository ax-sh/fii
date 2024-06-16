import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'vite-pages',
  run: async (toolbox) => {
    // @ts-expect-error
    const { print, system } = toolbox
    const spinner = print.spin('Adding vite-pages')

    spinner.succeed(`Added vite-pages`)
    // await system.run('ni -D vite-plugin-pages')
    // await system.run('ni react-router react-router-dom')
  },
}

module.exports = command
