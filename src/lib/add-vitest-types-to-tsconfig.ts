import { filesystem } from 'gluegun';
import { applyEdits, modify, parse } from 'jsonc-parser';

export const sanityTest = `
      function sum(a: number, b: number) {return a + b}
      
      test('adds 1 + 2 to equal 3', async () => {
        expect(sum(1, 2)).toBe(3)
      })`;

export const vitestConfigContent = `
    import { configDefaults, defineConfig } from 'vitest/config';

    export default defineConfig({
      plugins: [

      ],
      test: {
        globals: true,
      }
    });
`;

export async function addVitestTypesToTsconfig(tsconfigPath: string) {
  const data = filesystem.read(tsconfigPath);
  const tsconfig = parse(data);
  const types = tsconfig.compilerOptions.types;
  if (!types) {
    const vitestTypes = ['vitest/globals'];

    // Prepare the edits to add the new property
    const edits = modify(data, ['compilerOptions', 'types'], vitestTypes, {
      formattingOptions: { insertSpaces: true, tabSize: 2 }
    });
    // Apply the edits to the original JSONC data
    const updatedData = applyEdits(data, edits);
    filesystem.write(tsconfigPath, updatedData);
  }
}
