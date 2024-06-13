import type { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'husky',
  run: async (toolbox) => {
    const { print, system } = toolbox

    // https://typicode.github.io/husky/

    print.info(`Todo Add husky`)
    await system.run('ni -D husky')
    // This does not work for some reason
    // the two lines are equivalent
    // await system.run('nlx husky init')
    // await system.run('bunx husky init')
    await system.run('pnpm exec husky init')
  },
}

module.exports = command
