import { type GluegunCommand, filesystem } from 'gluegun'

const command: GluegunCommand = {
  name: 'tailwind',
  run: async (toolbox) => {
    const { print, system, template } = toolbox
    const spinner = print.spin('Adding tailwind deps')

    await system.run('ni -D tailwindcss postcss autoprefixer')
    await system.run('nr tailwindcss init -p')
    spinner.info('Added tailwind deps')
    spinner.stopAndPersist()

    const fileName = 'tailwind.config.js'
    const cssFileName = 'index.css'
    const configPath = filesystem.path(__dirname, '..', '..', 'templates', 'CONFIGS')
    console.log(configPath, filesystem.isDirectory(configPath))
    await template.generate({
      // directory: "CONFIGS/tailwind",
      template: `/CONFIGS/tailwind/${fileName}.ejs`,

      target: filesystem.path('.', fileName),
    })
    const i = await template.generate({
      template: `/CONFIGS/tailwind/${cssFileName}.ejs`,
      target: filesystem.path('.', 'src', cssFileName),
    })
    print.info(i)
    print.success('Adding tailwind')
  },
}

module.exports = command
