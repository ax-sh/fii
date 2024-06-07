import { Project } from 'ts-morph'
import { getRepoBaseName } from './get-repo-url'
import {
  addBasePropertyToDefineConfig,
  getViteDefineConfigCallOptions,
} from './vite-config-parser'

export async function addBaseOnViteConfig(viteConfigPath: string) {
  const project = new Project()
  const sourceFile = project.addSourceFileAtPath(viteConfigPath)

  const firstArgument = getViteDefineConfigCallOptions(sourceFile)
  const value = await getRepoBaseName()

  addBasePropertyToDefineConfig(`/${value}/`, firstArgument)

  await sourceFile.save()
}
