import type * as Parser from 'tree-sitter'

async function parseTsSourceCode(sourceCode: string) {
  const Parser = require('tree-sitter')

  const { typescript } = await import('tree-sitter-typescript')
  const parser = new Parser()
  parser.setLanguage(typescript as Parser.Language)
  const tree: Parser.Tree = parser.parse(sourceCode)
  return tree
}
describe('parse ts', () => {
  it('should ', async () => {
    const sourceCode = 'let x = 1; console.log(x);'
    const tree = await parseTsSourceCode(sourceCode)

    console.log(tree.rootNode)
  })
})
