import cspellConfigs from '@cspell/eslint-plugin/configs'
import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import compat from 'eslint-plugin-compat'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginSecurity from 'eslint-plugin-security'
import sonarjs from 'eslint-plugin-sonarjs'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import tseslint from 'typescript-eslint'

// typescript-eslint
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
  },
}
const tailwindConfig = {
  files: ['tailwind.config.js'],
  rules: { '@typescript-eslint/no-require-imports': 'off' },
}

const testConfig = {
  files: ['/*.test.ts', '/*.spec.ts', 'tests//*.ts', '__tests__//*.ts'],
  rules: {
    // Disable the require-imports rule specifically for test files
    '@typescript-eslint/no-require-imports': 'off',

    // Example: disable rules that might be irrelevant in tests
    'no-console': 'off',
    'no-unused-expressions': 'off',
    // Add more test-specific rules if needed
  },
}

const eslintConfigs = [
  cspellConfigs.recommended,
  compat.configs['flat/recommended'],
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  sonarjs.configs.recommended,
  pluginSecurity.configs.recommended,
  unicorn,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  tailwindConfig,
  testConfig,
  {
    ignores: ['.config/*', 'build/', 'dist/', '.xo-config.js', '.*.js', 'out/'],
  },
]

export default eslintConfigs
