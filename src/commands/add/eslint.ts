import type { GluegunCommand } from 'gluegun'
import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'eslint',
  run: async (toolbox) => {
    const { print, system } = toolbox
    const spinner = print.spin('Adding eslint')

    await system.run(
      'ni -D eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-unicorn',
    )
    // await toolbox.addScriptToPackageJson(
    //   'format',
    //   'nlx @biomejs/biome format --write ./src',
    // )

    spinner.succeed('Added eslint')
  },
}

module.exports = command
