import { Project } from 'ts-morph'

import {
  addBasePropertyToDefineConfig, getViteConfigPlugins,
  getViteDefineConfigCall,
  getViteDefineConfigCallOptions
} from './vite-config-parser'
import { getRepoBaseName } from '../get-repo-url'



describe(getViteDefineConfigCall.name, () => {
  const code = `
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react-swc'

  export default defineConfig({
    plugins: [react()]
  })
  `
  //  const codeAfterAddingBase = `
  //  import { defineConfig } from 'vite'
  //  import react from '@vitejs/plugin-react-swc'
  //
  //  export default defineConfig({
  //    plugins: [react()],
  // base:"foo"
  //  })
  //  `
  it('should get DefineConfig', async () => {
    const project = new Project()
    const sourceFile = project.createSourceFile(
      './__test__vite__config__.ts',
      code,
      {
        overwrite: true,
      },
    )

    const firstArgument = getViteDefineConfigCallOptions(sourceFile)
    const value = 'foo'
    addBasePropertyToDefineConfig(value, firstArgument)
    const content = sourceFile.getFullText()
    console.log(content)
    // expect(content).toEqual(codeAfterAddingBase)
  })

  it.todo('Should parse repo name correctly', async () => {
    const name = await getRepoBaseName()
    expect(name).toEqual('fii')
  })

  it('should add new function statement to plugins array', () => {
    const code = `
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react-swc'

  export default defineConfig({
    plugins: [react()]
  })
  `
    const project = new Project()
    const sourceFile = project.createSourceFile(
      './__test__vite__config__.ts',
      code,
      {
        overwrite: true,
      },
    )
    const pluginsArray = getViteConfigPlugins(sourceFile)
    pluginsArray.addElement('newFunction()')
    const plugins = pluginsArray.getElements().map(element => element.getText());
    expect(plugins).toContain("newFunction()");
  })
})
