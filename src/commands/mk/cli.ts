import type { GluegunCommand } from 'gluegun'

import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'cli',
  description: 'Make a bun cli project',
  run: async (toolbox) => {
    const { print, filesystem, system, parameters } = toolbox
    const cliName = parameters.first
    const spinner = print.spin(`Creating project with  ${cliName}`)
    const dir = await filesystem.dirAsync(cliName)
    process.chdir(dir.path())

    await system.run('bun init -y')
    await toolbox.addScriptToPackageJson('dev', 'bun --hot index.ts')
    await toolbox.addScriptToPackageJson('dev:watch', 'bun --watch index.ts')

    spinner.succeed(`Done ${dir.path()}`)
  },
}

module.exports = command
