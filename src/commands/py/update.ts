import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'update',
  alias: ['up'],
  run: async (toolbox) => {
    const { print, system } = toolbox
    const spinner = print.spin(`Pip updating packages`)

    let out: string
    out = await system.run('pip install yt-dlp gallery_dl -U')
    print.info(out)
    out = await system.run('pip install uv ruff pytest jupyter -U')
    print.info(out)
    out = await system.run('pip install pipx SQLAlchemy Faker -U')
    print.info(out)
    out = await system.run('pip install tqdm pandas pillow numpy  -U')
    print.info(out)

    spinner.succeed(`Pip libs updated`)
  },
}

module.exports = command
