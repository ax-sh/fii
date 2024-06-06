import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'books',
  alias: ['book'],
  run: async (toolbox) => {
    const { print, system, parameters } = toolbox
    const name = parameters.string

    const books = await system.run(`libgen-cli search ${name}`)
    // parameters.raw
    // print.info(name)
    print.info(books)
  },
}

module.exports = command
