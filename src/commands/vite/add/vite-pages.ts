import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'vite-pages',
  run: async (toolbox) => {
    const { print, system } = toolbox
    // https://github.com/hannoeru/vite-plugin-pages
    const spinner = print.spin('Adding vite-pages')
    await system.run('ni -D vite-plugin-pages')
    await system.run('ni react-router react-router-dom')
    spinner.succeed(`Added vite-pages`)
  },
}

module.exports = command
