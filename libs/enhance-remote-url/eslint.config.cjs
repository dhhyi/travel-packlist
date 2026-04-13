const { includeIgnoreFile } = require('@eslint/compat');

const baseConfig = require('../../eslint.base.config.cjs');
const typescriptRules = require('../../util/typescript-rules');

module.exports = [
  includeIgnoreFile(require.resolve('./.gitignore')),
  ...baseConfig,
  ...typescriptRules,
  {
    files: ['**/*.ts'],
    rules: {
      'no-console': 'error',
    },
  },
];
