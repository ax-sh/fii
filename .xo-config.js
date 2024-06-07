module.exports = {
  space: true,
  semicolon: false,
  // prettier:true,
  rules: {
    'import/extensions': 'off',
    // TODO research what unicorn/prefer-module does
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',
    '@typescript-eslint/array-type': 'off',
    'capitalized-comments': 'off',
    '@typescript-eslint/dot-notation': 'off',

    '@typescript-eslint/object-curly-spacing': 'off',
    // TODO research what @typescript-eslint/prefer-nullish-coalescing does
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
  },
  overrides: [
    {
      files: 'src/cli.ts',
      rules: {
        '@typescript-eslint/no-unsafe-argument': 'off',
      },
    },
  ],
}
