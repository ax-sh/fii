import { renameVariable } from './parse-ts'

describe('parse ts', () => {
  it('should parse ts and change var name', async () => {
    const sourceCode = 'let x = 1; console.log(x);'
    const modifiedCode = await renameVariable(sourceCode, 'x', 'yyyy')
    const aspected = 'let yyyy = 1; console.log(yyyy);'

    expect(modifiedCode).toEqual(aspected)
  })
})
