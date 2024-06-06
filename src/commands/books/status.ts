import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'status',
  run: async (toolbox) => {
    const { print, system } = toolbox

    const status = await system.run('libgen-cli status')
    print.info(status)
  },
}

module.exports = command
