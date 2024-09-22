import { getRepoBaseName } from './get-repo-url'
import {
  addBasePropertyToDefineConfig,
  getViteDefineConfigCallOptions,
} from './helpers/vite-config-parser'
import { openAsSourceFile } from './ts-mod'

export async function addBaseOnViteConfig(viteConfigPath: string) {
  const sourceFile = openAsSourceFile(viteConfigPath)

  const firstArgument = getViteDefineConfigCallOptions(sourceFile)
  const value = await getRepoBaseName()

  addBasePropertyToDefineConfig(`/${value}/`, firstArgument)

  await sourceFile.save()
}
