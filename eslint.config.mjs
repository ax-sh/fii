import pluginJs from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import sonarjs from 'eslint-plugin-sonarjs'

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

const eslintConfigs = [
  pluginJs.configs.recommended,
  sonarjs.configs.recommended,
  unicorn,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    ignores: ['.config/*', 'build/', '.xo-config.js', '.*.js'],
  },
]

export default eslintConfigs
