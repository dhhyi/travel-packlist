import baseConfig from '../../eslint.base.config.mjs';
import angularRules from '../../util/angular-rules.js';
import typescriptRules from '../../util/typescript-rules.js';

export default [
  ...baseConfig,
  ...typescriptRules,
  ...angularRules(),
  {
    files: ['**/*.ts'],
    rules: {
      'no-console': 'error',
    },
  },
];
