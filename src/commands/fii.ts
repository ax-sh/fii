import { type GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'fii',
  run: async (toolbox) => {
    const { print } = toolbox
    print.success('Fii workflow helper for development')
    print.printCommands(toolbox)
    // const { listNpmPackages } = await import('../lib/get-repo-url')
    // listNpmPackages()
  },
}

module.exports = command
