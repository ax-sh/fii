import pluginJs from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
export default [
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    ignores: ['.config/*', 'build/', '.xo-config.js', '.*.js'],
  },
]
