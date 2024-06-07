import { GluegunCommand } from 'gluegun'
import { ExtendedToolbox } from '../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'extend',
  description: 'Open Fii project on a webstorm editor for further extension',
  run: async (toolbox) => {
    const { print, system, filesystem } = toolbox
    print.info('Tools for development')
    const cacheDir = await toolbox.cliAppDir()
    const cliProjectPath = filesystem.path(__dirname, '..', '..')

    print.info(`CacheDir : ${cacheDir}`)

    await system.run(`webstorm ${cliProjectPath}`)
  },
}

module.exports = command
