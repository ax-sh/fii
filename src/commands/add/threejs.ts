import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'threejs',
  alias: ['three.js', 'three'],
  run: async (toolbox) => {
    const { print, system } = toolbox

    const spinner = print.spin(`Adding threejs libs`)

    await system.run('ni three @types/three @react-three/fiber @react-three/drei leva')

    spinner.succeed(`Added threejs `)
  },
}

module.exports = command
