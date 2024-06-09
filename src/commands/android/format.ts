import { type GluegunCommand } from 'gluegun'
// https://chatgpt.com/c/50e14c29-fe89-4825-9dc1-da19a1b90d10
const command: GluegunCommand = {
  name: 'format',
  alias:['fmt', 'f'],
  run: async (toolbox) => {
    const { print, system } = toolbox
    const spinner = print.spin('Formatting project status of servers')

    const status = await system.run('ktlint -F "**/*.kt"')
    spinner.succeed(status)
  },
}

module.exports = command
