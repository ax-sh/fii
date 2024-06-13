import { filesystem } from 'gluegun'
import {
  type ExtendedToolbox,
  KnownError,
  UsableBinaryNotFound,
} from '../types'

module.exports = (toolbox: ExtendedToolbox) => {
  const hasPnpm = toolbox.system.which('pnpm')
  const hasNi = toolbox.system.which('ni')
  const hasNr = toolbox.system.which('nr')
  if (!hasPnpm) {
    throw new Error('No pnpm available')
  }

  if (!hasNi || !hasNr) {
    toolbox.print.error(
      'Package identifier not available, use the command below to add',
    )
    // @see https://github.com/antfu/ni
    toolbox.print.success('npm i -g @antfu/ni')
    throw new UsableBinaryNotFound()
  }

  toolbox.cliAppDir = async (...paths: string[]) =>
    filesystem.dirAsync(
      filesystem.path(filesystem.homedir(), '.ax-sh/.fii', ...paths),
    )

  toolbox.killProcess = async (processEXE: string) =>
    toolbox.system.run(`taskkill /F /IM ${processEXE}`, { trim: true })

  toolbox.addScriptToPackageJson = async (scriptName: string, cmd: string) => {
    const script = await toolbox.system.run(
      `pnpm pkg get scripts.${scriptName}`,
      { trim: true },
    )
    const hasScript = script !== '{}'
    if (hasScript) {
      toolbox.print.error(`script ${scriptName} already defined Exiting`)
      // print.spinner.stopAndPersist({ symbol: '🚨', text: '!' });

      throw new KnownError(`script ${scriptName} already defined Exiting`)
    }

    await toolbox.system.run(`pnpm pkg set scripts.${scriptName}="${cmd}"`)
  }

  // enable this if you want to read configuration in from
  // the current folder's package.json (in a "fii" property),
  // fii.config.json, etc.
  // toolbox.config = {
  //   ...toolbox.config,
  //   ...toolbox.config.loadConfig("fii", process.cwd())
  // }
}
