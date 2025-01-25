const playwright = require('eslint-plugin-playwright');

const baseConfig = require('../../eslint.base.config.cjs');
const typescriptRules = require('../../util/typescript-rules.js');

module.exports = [
  playwright.configs['flat/recommended'],
  ...baseConfig,
  ...typescriptRules(require.resolve('./tsconfig.json')),
  {
    files: ['**/*.spec.ts'],
    rules: {
      'jest/require-hook': 'off',
    },
  },
];
