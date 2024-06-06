import { type GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'prettier',
  alias: ['pretty'],
  run: async (toolbox) => {
    const { print, system, template, filesystem } = toolbox

    const spinner = print.spin('Adding prettier deps')

    await system.run(
      'ni -D prettier pretty-quick @trivago/prettier-plugin-sort-imports',
      { trim: true },
    )
    await toolbox.addScriptToPackageJson('pretty', 'pretty-quick')

    spinner.info('Added prettier deps')

    const fileNames = ['.prettierrc', '.prettierignore']
    for (const fileName of fileNames) {
      await template.generate({
        // directory: "CONFIGS/tailwind",
        template: `/CONFIGS/prettier/${fileName}`,
        target: filesystem.path('.', fileName),
      })
    }
    spinner.info('Added prettier configs')
    spinner.stopAndPersist()
    await system.run('nr prettier . --write')
  },
}

module.exports = command
