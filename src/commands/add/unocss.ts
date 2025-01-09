import type { GluegunCommand } from 'gluegun'
import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'unocss',
  run: async (toolbox) => {
    const { print, system } = toolbox

    const spinner = print.spin(`Adding unocss`)

    print.info(`Todo unocss`)
    // https://unocss.dev/integrations/eslint
    await system.run('ni -D unocss @unocss/eslint-config')
    await system.run('ni @unocss/reset')
    // vite.config.ts
    // import UnoCSS from 'unocss/vite'
    // import { defineConfig } from 'vite'
    //
    // export default defineConfig({
    //   plugins: [
    //     UnoCSS(),
    //   ],
    // })
    // // uno.config.ts
    //
    // import { defineConfig } from 'unocss'
    //
    // export default defineConfig({
    //   // ...UnoCSS options
    // })
    // https://unocss.dev/integrations/vite
    // // main.ts
    // import '@unocss/reset/tailwind.css'
    // or import '@unocss/reset/tailwind-compat.css'
    // import 'virtual:uno.css'

    spinner.succeed(`Added unocss ${name}`)
  },
}

module.exports = command