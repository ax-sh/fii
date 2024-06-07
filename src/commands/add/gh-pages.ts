import type { GluegunCommand } from 'gluegun';

import type { ExtendedToolbox } from '../../types';

const command: GluegunCommand<ExtendedToolbox> = {
  name: 'gh-pages',
  run: async (toolbox) => {
    const { print, system, filesystem } = toolbox;
    const spinner = print.spin('Adding gh-pages');

    const { addBaseOnViteConfig } = await import('../../lib/add-base-on-vite-config');

    const viteConfigPath = 'vite.config.ts';

    if (filesystem.isNotFile(viteConfigPath)) {
      spinner.stopAndPersist({ symbol: '🚨', text: 'Not vite project vite.config.ts not found!' });
      return;
    }
    await system.run('ni -D gh-pages');

    await addBaseOnViteConfig(filesystem.path(viteConfigPath));
    await toolbox.addScriptToPackageJson('deploy', 'pnpm build && gh-pages -d dist');
    spinner.succeed('Added gh-pages');
  }
};

module.exports = command;
