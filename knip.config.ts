import type { KnipConfig } from 'knip'
const config: KnipConfig = {
  $schema: 'https://unpkg.com/knip@5/schema.json',
  entry: ['src/index.ts', 'scripts/{build,create}.js'],
  project: ['src/**/*.ts', 'scripts/**/*.js'],
  vitest: true,
  vite: true,
  ignoreBinaries: [
    'tsx',
    'nx', // Nx CLI is often a dev dependency used in scripts
  ],
  ignoreDependencies: [
    'typescript', // TypeScript is a dev dependency providing types
    '@types/node', // Node types are often global
    // Add other dev tools or type packages here if Knip reports them as unused
    // but they are necessary for your development workflow.
  ],
}
export default config
