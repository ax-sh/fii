import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'vite-qr',
  run: async (toolbox) => {
    const { print, system } = toolbox

    const spinner = print.spin(`Adding vite-qr dev util`)

    await system.run('ni -D vite-plugin-qrcode')
    const { openAsSourceFile } = await import('../../lib/helpers/ts-mod')
    const { addImportsToViteConfig, getViteConfigPlugins } = await import(
      '../../lib/helpers/vite-config-parser'
    )
    const viteConfigPath = 'vite.config.ts'
    const sourceFile = openAsSourceFile(viteConfigPath)
    const pluginsArray = getViteConfigPlugins(sourceFile)
    addImportsToViteConfig(sourceFile, [{ name: 'qrcode', moduleSpecifier: 'vite-plugin-qrcode' }])
    pluginsArray.addElement('qrcode()')
    sourceFile.formatText()
    sourceFile.saveSync()

    spinner.succeed(`Added vite-qr dev util`)
  },
}

module.exports = command
