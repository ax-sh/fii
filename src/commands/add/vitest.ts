import type { GluegunCommand } from 'gluegun'
import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'vitest',
  run: async (toolbox) => {
    const { print, system, filesystem } = toolbox
    const spinner = print.spin('Adding vitest')
    await system.run('ni -D vitest')
    const {
      addVitestTypesToTsconfig,
      vitestConfigContent,
      // basic test content for vitest
      sanityTest,
    } = await import('../../lib/add-vitest-types-to-tsconfig')

    await addVitestTypesToTsconfig('tsconfig.json')

    const vitestConfigPath = 'vitest.config.ts'

    if (filesystem.isFile(vitestConfigPath)) {
      spinner.stopAndPersist({
        symbol: '🚨',
        text: 'vite.config.ts already exists; not overwriting with default',
      })
      return
    }

    filesystem.write(vitestConfigPath, vitestConfigContent)
    filesystem.write('sum.test.ts', sanityTest)

    await toolbox.addScriptToPackageJson('test', 'vitest run')
    await toolbox.addScriptToPackageJson('test:watch', 'vitest')
    await toolbox.addScriptToPackageJson('coverage', 'vitest run --coverage')

    spinner.succeed('Added vitest')
  },
}

module.exports = command
