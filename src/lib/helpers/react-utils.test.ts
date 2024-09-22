import { setupVitest } from './react-utils'

// see https://allmaddesigns.com/set-up-react-testing-library-in-vite/
describe('reactUtils', () => {
  it('should setup config for vitest', () => {
    const o = setupVitest()
    console.log(o)
  })
  it('should add types to tsconfig', () => {
    // "types": ["vitest/globals", "@testing-library/jest-dom"],
  })
  it('should add react to vitest plugins', () => {
    const config = `import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [],
  test: {
    environment: 'node',
    globals: true,
  },
});
`
    console.log(config, '<<<')
  })
})
