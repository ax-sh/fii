import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'update',
  alias: ['up'],
  run: async (toolbox) => {
    const { print, system } = toolbox
    const spinner = print.spin(`Go updating packages`)

    let out: string
    out = await system.run('go install github.com/charmbracelet/mods@latest')
    print.info(out)
    out = await system.run('go install github.com/charmbracelet/glow@latest')
    print.info(out)
    out = await system.run('go install github.com/iawia002/lux@latest')
    print.info(out)
    out = await system.run('go install github.com/spf13/cobra-cli@latest')
    print.info(out)
    out = await system.run('go install github.com/danielmiessler/fabric@latest')
    print.info(out)
    out = await system.run('go install github.com/ciehanski/libgen-cli@latest')
    print.info(out)
    out = await system.run('go install mvdan.cc/gofumpt@latest')
    print.info(out)
    out = await system.run('go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest')
    print.info(out)

    spinner.succeed(`Pip libs updated`)
  },
}

module.exports = command
