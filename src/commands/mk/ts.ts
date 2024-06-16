import type { GluegunCommand } from 'gluegun'

import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'ts',
  description: 'Make a ts project',
  run: async (toolbox) => {
    const { print, filesystem, system, parameters } = toolbox
    const appName = parameters.first
    const spinner = print.spin(`Creating project with  ${appName}`)
    const dir = await filesystem.dirAsync(appName)
    process.chdir(dir.path())

    await system.run('bun init -y')
    await toolbox.addScriptToPackageJson('dev', 'bun --hot index.ts')
    await toolbox.addScriptToPackageJson('dev:watch', 'bun --watch index.ts')

    spinner.succeed(`Done ${dir.path()}`)
  },
}

module.exports = command
