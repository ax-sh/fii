import type { GluegunCommand } from 'gluegun'
import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'drizzle',
  run: async (toolbox) => {
    const { print, system, template, filesystem } = toolbox
    const spinner = print.spin('Adding drizzle')

    await system.run('ni drizzle-orm')
    await system.run('ni -D drizzle-kit @faker-js/faker')

    const fileName = 'schema.ts'

    await template.generate({
      // directory: "CONFIGS/tailwind",
      template: `/drizzle/${fileName}`,
      target: filesystem.path('.', 'src', fileName),
    })
    await toolbox.addScriptToPackageJson(
      'drizzle:generate',
      'nlx drizzle-kit generate --dialect sqlite --schema ./src/lib/db/schema.ts',
    )

    spinner.succeed('Added drizzle')
  },
}

module.exports = command
