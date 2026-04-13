const baseConfig = require('../../eslint.base.config.cjs');
const typescriptRules = require('../../util/typescript-rules');

module.exports = [
  ...baseConfig,
  ...typescriptRules,
  {
    files: ['**/*.ts'],
    rules: {
      'no-console': 'error',
    },
  },
];
