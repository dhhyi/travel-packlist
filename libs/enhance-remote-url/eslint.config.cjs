const { includeIgnoreFile } = require('@eslint/compat');

const baseConfig = require('../../eslint.base.config.cjs');
const angularRules = require('../../util/angular-rules');
const typescriptRules = require('../../util/typescript-rules');

module.exports = [
  includeIgnoreFile(require.resolve('./.gitignore')),
  ...baseConfig,
  ...typescriptRules(__dirname),
  ...angularRules(__dirname, { prefix: 'cmp' }),
  {
    files: ['**/*.ts'],
    rules: {
      'no-console': 'error',
    },
  },
];
