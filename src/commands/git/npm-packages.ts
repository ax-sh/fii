import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'npm',
  run: async (toolbox) => {
    const { print } = toolbox

    const { listNPMPackagesFromGithubRegistry } = await import('../../lib/services/github')
    const spinner = print.spin(`fetching npm packages on github registry `)
    const out = await listNPMPackagesFromGithubRegistry()

    spinner.succeed(`Result for npm packages in npm registry`)
    console.table(
      out.map((i) => {
        delete i.owner
        delete i.repository
        delete i.url
        delete i.html_url

        return i
      })
    )
  },
}

module.exports = command
