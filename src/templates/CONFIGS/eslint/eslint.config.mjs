import pluginJs from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'

const ignores = {
  ignores: ['.config/*', 'build/', '.xo-config.js', '.*.js'],
}
const eslintConfigs = [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  ignores,
]
export default eslintConfigs
