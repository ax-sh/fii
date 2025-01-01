import type { GluegunCommand } from 'gluegun'

import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'npm',
  description: 'login ax-sh npm',
  run: async (toolbox) => {
    const { print } = toolbox
    const cmd = 'npm login --scope=@ax-sh --registry=https://npm.pkg.github.com'
    print.info(cmd)
    // const tokenPermissions = await system.run(cmd, {
    //   trim: true,
    // })
    // const json = JSON.parse(tokenPermissions)
    // print.info(json)
  },
}

module.exports = command
