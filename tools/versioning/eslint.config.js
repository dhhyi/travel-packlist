const baseConfig = require('../../eslint.config.js');

const typescriptRules = require('../../util/typescript-rules.js');

module.exports = [
  ...baseConfig,
  typescriptRules(require.resolve('./tsconfig.lib.json')),
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
