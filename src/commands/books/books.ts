import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'books',
  alias: ['book'],
  run: async (toolbox) => {
    const { print, parameters } = toolbox
    // const name = parameters.first
    print.info(`parameters.raw, ${parameters.string}`)
    // const books = await system.run('libgen-cli search')
    // parameters.raw
    // print.info(name)
    // print.info(books)
  },
}

module.exports = command
