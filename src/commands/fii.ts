import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'fii',
  run: async (toolbox) => {
    const { print } = toolbox
    print.info('Tools for development')
    print.printCommands(toolbox)
  },
}

module.exports = command
