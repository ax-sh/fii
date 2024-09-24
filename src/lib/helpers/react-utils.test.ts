import { bgGreen } from 'kolorist'

import { setupVitest } from './react-utils'
import { createMemorySourceFile } from './ts-mod'

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
    const script = `
/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    globals: true,
    // ... Specify options here.
  },
})
`
    const sourceFile = await createMemorySourceFile('____vitest', script)

    sourceFile.formatText()
    console.log(bgGreen(sourceFile.getFullText()), '<<<')
  })
})
