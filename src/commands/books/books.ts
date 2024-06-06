import { GluegunCommand } from 'gluegun'
import { execa } from "execa";

// @see https://github.com/ciehanski/libgen-cli
// @see https://github.com/freereadorg/awesome-libgen
const command: GluegunCommand = {
  name: 'books',
  alias: ['book'],
  run: async (toolbox) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { print, system, parameters } = toolbox
    const name = parameters.string
    const cmd = `libgen-cli search ${name}`
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    // const execa = require('execa')
    await execa(cmd, { shell: true, stdio: 'inherit' })
    //
    // const books = await system.run(cmd)
    // parameters.raw
    // print.info(name)
    // print.info(books)
  },
}

module.exports = command
