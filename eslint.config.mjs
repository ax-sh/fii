import pluginJs from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import sonarjs from 'eslint-plugin-sonarjs'
// import globals from "./src/commands/kill/node";
import pluginSecurity from 'eslint-plugin-security'

const unicorn = {
  languageOptions: {
    ecmaVersion: 2024,
    // globals: {
    //   ...globals.node,
    // },
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
  pluginSecurity.configs.recommended,
  unicorn,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    ignores: ['.config/*', 'build/', '.xo-config.js', '.*.js'],
  },
]

export default eslintConfigs
