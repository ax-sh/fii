import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'update',
  alias: ['up'],
  run: async (toolbox) => {
    const { print, system } = toolbox
    const spinner = print.spin(`Pip updating packages`)
    const excludedPrefixes = [
      'Requirement already satisfied',
      'Using cached',
      'Collecting',
      // Add more conditions as needed
    ]
    const filterOutput = (line: string): boolean => {
      return !excludedPrefixes.some((prefix) => line.includes(prefix))
      // return !line.startsWith('Requirement already satisfied')
    }
    const printFilterOutput = (out: string) => {
      return out.split('\n').filter(filterOutput).join('\n')
    }

    let out: string
    out = await system.run('pip install --upgrade pip')
    print.info(printFilterOutput(out))

    out = await system.run('pip install yt-dlp gallery_dl -U')
    print.info(printFilterOutput(out))

    out = await system.run('pip install open-webui')
    print.info(printFilterOutput(out))

    out = await system.run('pip install uv ruff pytest jupyter -U')
    print.info(printFilterOutput(out))
    out = await system.run('pip install pipx SQLAlchemy Faker -U')
    print.info(printFilterOutput(out))
    out = await system.run('pip install ell-ai -U')
    print.info(printFilterOutput(out))
    out = await system.run('pip install tqdm pandas pillow numpy matplotlib -U')
    print.info(printFilterOutput(out))
    out = await system.run('pip install jupyterlab streamlit -U')
    print.info(printFilterOutput(out))
    out = await system.run('pip install ollama -U')
    print.info(printFilterOutput(out))

    spinner.succeed(`Pip libs updated`)
  },
}

module.exports = command
