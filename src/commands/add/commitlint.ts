import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'commitlint',
  run: async (toolbox) => {
    const { print, parameters, system } = toolbox
    const name = parameters.first
    const spinner = print.spin(`Adding commitlint ${name}`)

    await system.run('ni -D @commitlint/{cli,config-conventional}')
    await system.run(`echo '{"extends": ["@commitlint/config-conventional"]}' > .commitlintrc.json`)
    // await system.run(`pnpm i -D husky semantic-release`)
    // // await system.run(`jq -r '.scripts.prepare |= "husky install"' temp.json`)
    // await system.run(`nlx husky install`)
    // await system.run(`nlx husky add .husky/commit-msg 'pnpx commitlint --edit $1'`)

    spinner.succeed(`Added commitlint ${name}`)
  },
}

module.exports = command
