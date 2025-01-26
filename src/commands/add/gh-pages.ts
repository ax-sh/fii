import type { GluegunCommand } from 'gluegun'

import { getGithubPagesUrlForRepo } from '../../lib/helpers/git-utils'
import { type ExtendedToolbox, KnownError } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'gh-pages',
  alias: ['gh-page'],
  run: async (toolbox) => {
    const { print, system, filesystem } = toolbox
    try {
      const checkIfPushedToRemote = await system.run('git ls-remote', { trim: true })
      print.info({ checkIfPushedToRemote })
    } catch (e) {
      throw new KnownError(['Repo doesnt have associated github repo online', e.stderr])
    }

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

    await system.run('ni -D rimraf gh-pages')
    try {
      await addBaseOnViteConfig(filesystem.path(viteConfigPath))
    } catch (e) {
      spinner.fail(e.message)
      return
    }

    await toolbox.addScriptToPackageJson('deploy', 'nr build && gh-pages -d dist')
    await toolbox.addScriptToPackageJson('clean', 'rimraf dist')
    spinner.succeed('Added gh-pages')
    const { setHomepageUrlOnGithubRepoDescription, getGithubPagesUrlForRepo } = await import(
      '../../lib/helpers/git-utils'
    )
    const homepage = await getGithubPagesUrlForRepo()
    print.info(`set homepage to ${homepage}`)
    await setHomepageUrlOnGithubRepoDescription()
  },
}

module.exports = command
