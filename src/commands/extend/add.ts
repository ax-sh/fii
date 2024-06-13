import { type GluegunCommand } from 'gluegun'
import { type ExtendedToolbox, KnownError } from "../../types";

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'add',
  description: 'generate and add new script for fii add subcommand',
  run: async (toolbox) => {
    const { print, template, parameters } = toolbox
    const name = parameters.first.trim()
    if(!name)throw new KnownError("No command name found.")
    const path = `src/commands/add/${name}.ts`

    // const target = await toolbox.cliAppDir(path)

    await template.generate({
      template: 'command.ts.ejs',
      target: path,
      props: { name },
    })
    print.info(
      `Tools generate and add new script for fii add subcommand ${name}`,
    )
  },
}

module.exports = command
