import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'search-all-commits',
  run: async (toolbox) => {
    const { print, parameters } = toolbox
    const str = parameters.first
    const git = await import('../../lib/helpers/git')
    const spinner = print.spin(`Searching all commit with string: ${str}`)
    const out = await git.searchStringInAllCommits(str)

    spinner.succeed(`Result for all commit with string: ${str}`)
    print.info(out)
  },
}

module.exports = command
