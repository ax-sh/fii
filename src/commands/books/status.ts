import { type GluegunCommand } from 'gluegun'

// @see https://github.com/ciehanski/libgen-cli
// @see https://github.com/freereadorg/awesome-libgen
const command: GluegunCommand = {
  name: 'status',
  run: async (toolbox) => {
    const { print, system } = toolbox
    const spinner = print.spin('Getting status of servers')
    /**
     * `libgen-cli search -e pdf ${name}`
     * const execa = require('execa')
     * await execa(cmd, { shell: true, stdio: 'inherit' })
     *
     * const books = await system.run(cmd)
     */
    const status = await system.run('libgen-cli status')
    spinner.succeed(status)
  },
}

module.exports = command
