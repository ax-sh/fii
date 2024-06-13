import type { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'vite',
  run: async (toolbox) => {
    const { print, parameters } = toolbox
    const name = parameters.first

    print.error(`Todo vite ${name}`)
  },
}

module.exports = command
