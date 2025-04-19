const { includeIgnoreFile } = require('@eslint/compat');

const baseConfig = require('../../eslint.base.config.cjs');

module.exports = [
  includeIgnoreFile(require.resolve('./.gitignore')),
  ...baseConfig,
  {
    files: ['**/*.ts'],
    rules: {
      'no-console': 'error',
    },
  },
];
