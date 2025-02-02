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
  it('should parse ts and change var name', async () => {
    function collectIdentifiers(node: Parser.SyntaxNode, targetName: string, results: unknown[]) {
      if (node.type === 'identifier' && node.text === targetName) {
        results.push({ start: node.startIndex, end: node.endIndex })
      }

      // Recursively check child nodes
      for (const child of node.children) {
        collectIdentifiers(child, targetName, results)
      }
    }
    async function renameVariable(sourceCode: string, oldName: string, newName: string) {
      // Parse the source code
      const tree = await parseTsSourceCode(sourceCode)
      const rootNode = tree.rootNode

      // Collect all identifier nodes with the old variable name
      const identifiers = []
      collectIdentifiers(rootNode, oldName, identifiers)

      // Replace each occurrence in reverse order to maintain correct positions
      let modifiedCode = sourceCode
      for (const { start, end } of identifiers.reverse()) {
        modifiedCode = modifiedCode.slice(0, start) + newName + modifiedCode.slice(end)
      }

      return modifiedCode
    }

    const sourceCode = 'let x = 1; console.log(x);'
    const modifiedCode = await renameVariable(sourceCode, 'x', 'yyyy')
    const aspected = 'let yyyy = 1; console.log(yyyy);'

    expect(modifiedCode).toEqual(aspected)
  })
})
