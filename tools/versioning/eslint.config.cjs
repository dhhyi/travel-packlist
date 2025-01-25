const baseConfig = require('../../eslint.base.config.cjs');

const typescriptRules = require('../../util/typescript-rules.js');

module.exports = [
  ...baseConfig,
  typescriptRules(__dirname),
  {
    files: ['**/*.json'],
    languageOptions: {
      parser: require('jsonc-eslint-parser'),
    },
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs}'],
        },
      ],
    },
  },
];
