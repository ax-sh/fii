import type { GluegunCommand } from 'gluegun'

import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'gh-pages',
  alias: ['gh-page'],
  run: async (toolbox) => {
    const { print, system, filesystem } = toolbox
    const spinner = print.spin('Adding gh-pages')

    const { addBaseOnViteConfig } = await import('../../lib/add-base-on-vite-config')

    const viteConfigPath = 'vite.config.ts'

    if (filesystem.isNotFile(viteConfigPath)) {
      spinner.stopAndPersist({
        symbol: '🚨',
        text: 'Not a vite project vite.config.ts not found!',
      })
      return
    }

    await system.run('ni -D gh-pages')
    try {
      await addBaseOnViteConfig(filesystem.path(viteConfigPath))
    } catch (e) {
      spinner.fail(e.message)
      return
    }

    await toolbox.addScriptToPackageJson('deploy', 'nr build && gh-pages -d dist')
    spinner.succeed('Added gh-pages')
  },
}

module.exports = command
