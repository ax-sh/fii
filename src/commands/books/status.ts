import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'status',
  run: async (toolbox) => {
    const { print, system } = toolbox
    const spinner = print.spin('Getting status of servers')

    const status = await system.run('libgen-cli status')
    spinner.succeed(status)
  },
}

module.exports = command
