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
    '@typescript-eslint/member-delimiter-style': 'off',
    'n/prefer-global/process': 'off',
    '@typescript-eslint/dot-notation': 'off',
    // makes run: async ()=>{} to async run(){}
    'object-shorthand': 'off',
    'arrow-parens': 'off',
    'unicorn/catch-error-name': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'unicorn/prefer-optional-catch-binding': 'off',
    'no-await-in-loop': 'off',

    '@typescript-eslint/object-curly-spacing': 'off',
    // TODO research what @typescript-eslint/prefer-nullish-coalescing does
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
  },
  overrides: [
    {
      files: 'src/templates/**',
      rules: { 'unicorn/prefer-top-level-await': 'off' },
    },
    {
      files: 'src/cli.ts',
      rules: {
        '@typescript-eslint/no-unsafe-argument': 'off',
      },
    },
  ],
}
