import { type GluegunCommand } from 'gluegun'

// @see https://github.com/ciehanski/libgen-cli
// @see https://github.com/freereadorg/awesome-libgen
const command: GluegunCommand = {
  name: 'books',
  alias: ['book'],
  run: async (toolbox) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const { print, system, parameters } = toolbox
    const name = parameters.string
    const cmd = `libgen-cli search -e pdf ${name}`

    // const execa = require('execa')
    // await execa(cmd, { shell: true, stdio: 'inherit' })
    //
    // const books = await system.run(cmd)
    // parameters.raw
    // print.info(name)
    print.info(cmd)
  },
}

module.exports = command
