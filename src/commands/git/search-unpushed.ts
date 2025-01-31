import type { GluegunCommand } from 'gluegun'
import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'search-unpushed',
  run: async (toolbox) => {
    const { print, parameters, system } = toolbox
    const str = parameters.first
    const git = await import('../../lib/helpers/git')
    const spinner = print.spin(`Searching search-unpushed ${str}`)
    const out = await git.searchStringInUnpushedCommits(str)

    spinner.succeed(`Result for unpushed commit with  string ${str}`)
    print.info(out)
  },
}

module.exports = command
