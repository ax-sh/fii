import { type GluegunCommand } from 'gluegun'
import { type ExtendedToolbox, KnownError } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'add',
  description: 'generate and add new script for fii add subcommand',
  run: async (toolbox) => {
    const { print, template, parameters, filesystem } = toolbox
    const name = parameters.first.trim()
    if (!name) throw new KnownError('No command name found.')

    const cliProjectPath = filesystem.path(__dirname, '..', '..', '..')
    process.chdir(cliProjectPath)
    const target = `src/commands/add/${name}.ts`
    print.info(`Generating subcommand ${name} on ${cliProjectPath} ${target}`)

    await template.generate({
      template: 'command.ts.ejs',
      target,
      props: { name },
    })
    print.success(`Generated subcommand fii extend add ${name}`)
  },
}

module.exports = command
