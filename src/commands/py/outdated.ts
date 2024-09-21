import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'outdated',
  run: async (toolbox) => {
    const { system } = toolbox

    // const spinner = print.spin(`Adding py ${name}`)
    const hasPipReview = system.which('pip-review')
    if (hasPipReview) {
      await system.run('pip install pip-review')
    }
    console.log(hasPipReview)

    await system.run('pip list --o')

    // spinner.succeed(`Added py ${name}`)
  },
}

module.exports = command
