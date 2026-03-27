const baseConfig = require('../../eslint.base.config.cjs');
const angularRules = require('../../util/angular-rules');
const typescriptRules = require('../../util/typescript-rules');

module.exports = [
  ...baseConfig,
  ...typescriptRules,
  ...angularRules({ prefix: 'app' }),
  {
    files: ['**/*.ts'],
    rules: {
      'no-console': 'error',
    },
  },
];
