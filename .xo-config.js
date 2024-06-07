module.exports = {
  space: true,
  semicolon:false,
  // prettier:true,
  "rules": {
    "import/extensions": "off",
    // TODO research what unicorn/prefer-module does
    "unicorn/prefer-module": "off",
    "unicorn/prevent-abbreviations": "off",

    "@typescript-eslint/object-curly-spacing": "off",
    "@typescript-eslint/prefer-nullish-coalescing":"warn"
  }
};