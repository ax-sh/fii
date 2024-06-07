module.exports = {
  space: true,
  semicolon: false,
  // prettier:true,
  rules: {
    'import/extensions': 'off',
    // TODO research what unicorn/prefer-module does
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',

    '@typescript-eslint/object-curly-spacing': 'off',
    // TODO research what @typescript-eslint/prefer-nullish-coalescing does
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
  },
}
