import { filesystem } from 'gluegun'

import { type ExtendedToolbox, UsableBinaryNotFound } from '../types'

module.exports = async (toolbox: ExtendedToolbox) => {
  const hasPnpm = toolbox.system.which('pnpm')
  const hasNi = toolbox.system.which('ni')
  const hasNr = toolbox.system.which('nr')
  const hasPython = toolbox.system.which('python')
  const cli = await import('../lib/cli')

  if (hasPython) {
    process.env.PYTHON_BIN = hasPython
  }

  if (!hasPnpm) {
    throw new Error('No pnpm available')
  }

  if (!hasNi || !hasNr) {
    toolbox.print.error('Package identifier not available, use the command below to add')
    // @see https://github.com/antfu/ni
    toolbox.print.success('npm i -g @antfu/ni')
    throw new UsableBinaryNotFound()
  }

  toolbox.cliAppDir = async (...paths: string[]) =>
    filesystem.dirAsync(filesystem.path(filesystem.homedir(), '.ax-sh/.fii', ...paths))

  toolbox.killProcess = async (processEXE: string) =>
    toolbox.system.run(`taskkill /F /IM ${processEXE}`, { trim: true })

  toolbox.addScriptToPackageJson = cli.addScriptToPackageJson

  // const { BrowserCookiesSingleton } = await import('@ax-sh/browser-cookies/dist/browser-cookies.js')
  // console.log(BrowserCookiesSingleton)
  // toolbox.loadBrowser = BrowserCookiesSingleton.instance

  // enable this if you want to read configuration in from
  // the current folder's package.json (in a "fii" property),
  // fii.config.json, etc.
  // toolbox.config = {
  //   ...toolbox.config,
  //   ...toolbox.config.loadConfig("fii", process.cwd())
  // }
}
