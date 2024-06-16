import type { GluegunCommand } from 'gluegun'

import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'eslint',
  run: async (toolbox) => {
    const { print, system, template, filesystem } = toolbox
    const spinner = print.spin('Adding eslint')

    await system.run(
      'ni -D eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-unicorn'
    )
    const fileName = 'eslint.config.mjs'
    await template.generate({
      template: `/CONFIGS/eslint/${fileName}`,
      target: filesystem.path('.', fileName),
    })

    spinner.succeed('Added eslint')
  },
}

module.exports = command
