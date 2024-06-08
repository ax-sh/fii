import type { GluegunCommand } from 'gluegun'
import type { ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'cli',
  description: 'Make a bun cli project',
  run: async (toolbox) => {
    const { print, filesystem, system, parameters } = toolbox
    const cliName = parameters.first
    const spinner = print.spin(`Creating cli project with  ${cliName}`)
    const dir = await filesystem.dirAsync(cliName)
    process.chdir(dir.path())

    await system.run('bun init -y')
    await toolbox.addScriptToPackageJson('dev', 'bun --hot index.ts')
    await toolbox.addScriptToPackageJson('dev:watch', 'bun --watch index.ts')
    type PackageJsonType = Record<string, any>
    const packageJson = filesystem.read(
      'package.json',
      'json',
    ) as PackageJsonType
    packageJson['bin'] = {
      [cliName]: './index.ts',
    }
    const indexCMD = `#! /usr/bin/env bun
    import "./src/command.ts";
    `
    const cliCmd = `import yargs from "yargs"
    import { hideBin } from "yargs/helpers"

    yargs(hideBin(process.argv)) .command(
    "new <note>",
    "Creates a new Note",
    (yargs) => yargs.positional("note", {
      description: "The content of the note",
      type: "string",
    }),
    (argv) => console.log(argv.note)
  )
    .parse()
`

    filesystem.write('package.json', packageJson)
    filesystem.write('index.ts', indexCMD)
    const src = await filesystem.dirAsync('src')
    src.write('command.ts', cliCmd)
    const dbContent = `import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";

const sqlite = new Database("sqlite.db");
export const db = drizzle(sqlite);`
    src.write('db.ts', dbContent)

    await system.run('ni yargs drizzle-orm fs-jetpack rimraf')
    await system.run('ni -D @types/yargs drizzle-kit')

    spinner.succeed(`Done ${dir.path()}`)
  },
}

module.exports = command
