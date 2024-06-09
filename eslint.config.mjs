import pluginJs from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

const unicorn = {
  languageOptions: {
    ecmaVersion: 2024,
  },
  plugins: {
    unicorn: eslintPluginUnicorn,
  },
  rules: {
    'unicorn/better-regex': 'error',
  },
}

export default [
  pluginJs.configs.recommended,
  unicorn,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    ignores: ['.config/*', 'build/', '.xo-config.js', '.*.js'],
  },
]
