import type { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'repo-url',
  run: async (toolbox) => {
    const { print } = toolbox
    const { getRepoUrl } = await import('../lib/helpers/git-utils')

    const url = await getRepoUrl()
    print.success(url)
  },
}

module.exports = command
