import type { GluegunCommand } from 'gluegun'
import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'drizzle',
  run: async (toolbox) => {
    const { print, system } = toolbox
    const spinner = print.spin('Adding drizzle')

    await system.run('ni drizzle-orm')
    await system.run('ni -D drizzle-kit')
    await toolbox.addScriptToPackageJson(
      'format',
      'nlx drizzle-kit generate:sqlite --schema ./src/lib/db/schema.ts',
    )

    spinner.succeed('Added drizzle')
  },
}

module.exports = command
