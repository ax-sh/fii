import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'update',
  alias: ['up'],
  run: async (toolbox) => {
    const { print, system } = toolbox
    const { cliProjectPath } = await import('../lib')

    const spinner = print.spin(`Updating`)

    await system.run('echo git pull')

    spinner.succeed(`Updated`)
    // fyi system run for cd does not work
    // await system.run(`cd ${cliProjectPath}`)
    process.chdir(cliProjectPath)
    const info = await system.run(`git status`)

    console.log(process.cwd(), info)
  },
}

module.exports = command
