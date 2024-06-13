import type { GluegunCommand } from 'gluegun';

import { KnownError } from '../../types';

const command: GluegunCommand = {
  name: 'msw',
  run: async (toolbox) => {
    const { print, system, filesystem } = toolbox;
    const spinner = print.spin('Adding MSW and Faker');
    const { handlerTemplate, browserTemplate, endMessage, dbTemplate } = await import(
      '../../lib/helpers/msw-helpers'
      );

    await system.run(
      'ni -D msw-auto-mock msw@latest @mswjs/data @faker-js/faker @tanstack/eslint-plugin-query'
    );
    await system.run('ni @tanstack/react-query axios');
    await system.run('nr msw init ./public --save');
    const mockFolder = filesystem.dir('mocks');
    if (mockFolder.exists('handlers.ts')) throw new KnownError('handlers.ts exists exiting');

    mockFolder.write('handlers.ts', handlerTemplate);
    mockFolder.write('browser.ts', browserTemplate);
    mockFolder.write('db.ts', dbTemplate);

    spinner.succeed('Added MSW and Faker');

    print.success('RUN');
    print.success('nr msw init ./public');
    print.success('https://mswjs.io/docs/integrations/node');
    print.success('https://mswjs.io/docs/integrations/browser');
    print.success('https://github.com/mswjs/data');
    print.success('https://github.com/zoubingwu/msw-auto-mock');

    print.info(endMessage);
  }
};

module.exports = command;
