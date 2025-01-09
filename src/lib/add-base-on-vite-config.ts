import { getRepoBaseName } from './get-repo-url'
import { openAsSourceFile } from './helpers/ts-mod'
import {
  addBasePropertyToDefineConfig,
  getViteDefineConfigCallOptions,
} from './helpers/vite-config-parser'

export async function addBaseOnViteConfig(viteConfigPath: string) {
  const sourceFile = openAsSourceFile(viteConfigPath)

  const firstArgument = getViteDefineConfigCallOptions(sourceFile)
  const value = await getRepoBaseName()
  console.log(`https://ax-sh.github.io/${value}/`)

  addBasePropertyToDefineConfig(`/${value}/`, firstArgument)

  await sourceFile.save()
}