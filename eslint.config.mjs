import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginSecurity from 'eslint-plugin-security'
import sonarjs from 'eslint-plugin-sonarjs'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const unicorn = {
  languageOptions: {
    ecmaVersion: 2024,
    globals: {
      ...globals.node,
    },
  },

  plugins: {
    unicorn: eslintPluginUnicorn,
  },
  rules: {
    'unicorn/better-regex': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    'sonarjs/todo-tag': 'off', // in production release maybe turn it on
    'sonarjs/jsx-no-useless-fragment': 'off',
  },
}

const eslintConfigs = [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  sonarjs.configs.recommended,
  pluginSecurity.configs.recommended,
  unicorn,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    ignores: ['.config/*', 'build/', 'dist/', '.xo-config.js', '.*.js'],
  },
  {
    // This configuration will only apply to the specific file
    files: ['**/ts-mod.test.ts', '**/ts-mod.ts', '**/lib/cli.ts'],
    rules: {
      'security/detect-non-literal-fs-filename': 'off',
      'sonarjs/sonar-no-fallthrough': 'off',
    },
  },
]

export default eslintConfigs
