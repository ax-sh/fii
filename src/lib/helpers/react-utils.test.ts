import { setupVitest } from './react-utils'
import { createMemorySourceFile } from './ts-mod'
import { addVitestDepsForReact } from './vite-config-parser'

const defaultVitestScript = `
/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    globals: true,
    // ... Specify options here.
  },
})
`

// see https://allmaddesigns.com/set-up-react-testing-library-in-vite/
describe('reactUtils', () => {
  it('should setup config for vitest', () => {
    const o = setupVitest()
    console.log(o)
  })
  it('should add types to tsconfig', () => {
    // "types": ["vitest/globals", "@testing-library/jest-dom"],
  })
  it('should add react to vitest plugins', async () => {
    const script = defaultVitestScript
    const sourceFile = await createMemorySourceFile('___test_vitest___.ts', script)
    addVitestDepsForReact(sourceFile)
  })
})
