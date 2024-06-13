import { type GluegunCommand } from 'gluegun'
import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'add',
  description: 'generate and add new script for fii add subcommand',
  run: async (toolbox) => {
    const { print, template, parameters } = toolbox
    const name = parameters.first
    // todo check if in right path

    await template.generate({
      template: 'command.ts.ejs',
      target: `src/commands/add/${name}.ts`,
      props: { name },
    })
    print.info(
      `Tools generate and add new script for fii add subcommand ${name}`,
    )
  },
}

module.exports = command
