import type { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'vite',
  run: async (toolbox) => {
    const { print, parameters, system } = toolbox
    const name = parameters.first

    print.info(`Todo vite ${name}`)
    await system.run('echo ni -D husky')
  },
}

module.exports = command
