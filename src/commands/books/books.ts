import { GluegunCommand } from 'gluegun'

// @see https://github.com/ciehanski/libgen-cli
// @see https://github.com/freereadorg/awesome-libgen
const command: GluegunCommand = {
  name: 'books',
  alias: ['book'],
  run: async (toolbox) => {
    const { print, system, parameters } = toolbox
    const name = parameters.string
    const cmd = `libgen-cli search ${name}`
    // const execa = require('execa')

    const books = await system.run(cmd)
    // parameters.raw
    // print.info(name)
    print.info(books)
  },
}

module.exports = command
