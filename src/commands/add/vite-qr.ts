import type { GluegunCommand } from 'gluegun'

import { openAsSourceFile } from '../../lib/helpers/ts-mod'
import { getViteConfigPlugins } from '../../lib/helpers/vite-config-parser'
import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'vite-qr',
  run: async (toolbox) => {
    const { print, system } = toolbox

    const spinner = print.spin(`Adding vite-qr dev util`)

    await system.run('ni -D vite-plugin-qrcode')
    const viteConfigPath = 'vite.config.ts'
    const sourceFile = openAsSourceFile(viteConfigPath)
    const pluginsArray = getViteConfigPlugins(sourceFile)
    // todo add import
    pluginsArray.addElement('qrcode()')
    sourceFile.formatText()
    sourceFile.saveSync()

    spinner.succeed(`Added vite-qr dev util`)
  },
}

module.exports = command
