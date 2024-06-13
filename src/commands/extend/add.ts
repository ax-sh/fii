import { type GluegunCommand } from 'gluegun'
import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'add',
  description: 'generate and add new script for fii add subcommand',
  run: async (toolbox) => {
    const { print } = toolbox
    print.info('Tools generate and add new script for fii add subcommand')


  },
}

module.exports = command
