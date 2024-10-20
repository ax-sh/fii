import type { GluegunCommand } from 'gluegun'

import { type ExtendedToolbox } from '../../types'

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'update',
  alias: ['up'],
  run: async (toolbox) => {
    const { print } = toolbox
    const spinner = print.spin(`Go updating packages`)
    const { goInstall } = await import('../../lib/go-utils')

    let out: string
    out = await goInstall('go install github.com/charmbracelet/mods@latest')
    print.info(out)
    out = await goInstall('go install github.com/charmbracelet/glow@latest')
    print.info(out)
    out = await goInstall('go install github.com/iawia002/lux@latest')
    print.info(out)
    out = await goInstall('go install github.com/spf13/cobra-cli@latest')
    print.info(out)
    out = await goInstall('go install github.com/danielmiessler/fabric@latest')
    print.info(out)
    out = await goInstall('go install github.com/ciehanski/libgen-cli@latest')
    print.info(out)
    // dev deps
    out = await goInstall('go install mvdan.cc/gofumpt@latest')
    print.info(out)
    out = await goInstall('go install github.com/air-verse/air@latest')
    print.info(out)
    out = await goInstall('go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest')
    print.info(out)
    out = await goInstall('go install honnef.co/go/tools/cmd/staticcheck@latest')
    print.info(out)
    // dev deps
    spinner.succeed(`Pip libs updated`)
  },
}

module.exports = command
