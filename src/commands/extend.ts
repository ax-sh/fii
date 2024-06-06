import { GluegunCommand } from 'gluegun'
import { ExtendedToolbox } from "../types";

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'extend',
  run: async (toolbox) => {
    const { print } = toolbox
    print.info('Tools for development')
    const cacheDir =await toolbox.cliAppDir()

    print.info(`CacheDir : ${cacheDir}`)
  },
}

module.exports = command
