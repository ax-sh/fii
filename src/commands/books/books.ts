import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'books',
  run: async (toolbox) => {
    const { print, system, parameters } = toolbox
    const name = parameters.first
    const books = await system.run('libgen-cli')
    print.info(name)
    print.info(books)
  },
}

module.exports = command
