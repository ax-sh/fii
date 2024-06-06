import { type GluegunCommand } from 'gluegun'
import { type ExtendedToolbox } from '../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'creators',
  run: async (toolbox) => {
    const { print } = toolbox
    print.info('Tools for development')
    const cacheDir = await toolbox.cliAppDir()

    print.info(`CacheDir : ${cacheDir}`)
  },
}

module.exports = command
