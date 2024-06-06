import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'fii',
  run: async (toolbox) => {
    const { print } = toolbox
    const day = await import('../lib/day')
    console.log(day)

    print.info('Welcome to your CLI')
  },
}

module.exports = command
