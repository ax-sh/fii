import type { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'husky',
  run: async (toolbox) => {
    const { print, system } = toolbox

    // https://typicode.github.io/husky/

    print.info(`Todo Add husky`)
    await system.run('echo ni -D husky')
  },
}

module.exports = command
