import { type GluegunCommand } from 'gluegun'

import { type ExtendedToolbox, KnownError } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'add',
  description: 'generate and add new script for fii add subcommand',
  run: async (toolbox) => {
    const { parameters, template, print, system } = toolbox
    const name = parameters.first.trim()
    if (!name) {
      throw new KnownError('No command name found.')
    }
    const { appRootPathJoin, cliProjectPath } = await import('../../lib')
    process.chdir(cliProjectPath)
    const commandPath = appRootPathJoin(`src/commands/${name}.ts`)
    const commandServicePath = appRootPathJoin(`src/services/${name}.ts`)
    print.info(`Generating subcommand ${name} on ${cliProjectPath} ${commandPath}`)

    await template.generate({
      template: 'command.ts.ejs',
      target: commandPath,
      props: { name },
    })
    await template.generate({
      template: 'service.ts.ejs',
      target: commandServicePath,
      props: { name },
    })

    print.info(`Generated file at models/${name}-model.ts`)
    await system.run('nr pretty')
    print.printCommands(toolbox)
    print.success(`Generated subcommand fii extend add ${name}`)
  },
}

module.exports = command
