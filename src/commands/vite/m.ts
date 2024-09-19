import type { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'm',
  description: 'Create a bare minimum vite react ts project',
  run: async (toolbox) => {
    const { print, parameters, system, filesystem } = toolbox
    const appName = parameters.first

    const installedPath = filesystem.path(appName)
    if (filesystem.isDirectory(installedPath)) {
      return print.error(`Folder with the name [${appName}] already exists`)
    }

    const spinner = print.spin(`Creating vite app with react swc and tailwind [${appName}]`)
    await system.run(`bun create vite ${appName} --template react-swc-ts`)
    spinner.info(`Created vite app [${appName}]!`)
    process.chdir(installedPath)

    spinner.info(`Installing clsx and prettier!`)
    await system.run('bun i && ni clsx && fii add prettier && fii add tailwind && fii add release')

    const { gitFlowInit } = await import('../../lib/helpers/git-utils')
    const gitInit = await gitFlowInit()
    spinner.succeed(gitInit)

    spinner.succeed(`Created App ${appName}`)
    print.info(`webstorm ${installedPath}`)
    await system.run(`webstorm ${installedPath}`)
  },
}

module.exports = command
