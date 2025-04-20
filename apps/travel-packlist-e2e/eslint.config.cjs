const { includeIgnoreFile } = require('@eslint/compat');

const playwright = require('eslint-plugin-playwright');

const baseConfig = require('../../eslint.base.config.cjs');
const typescriptRules = require('../../util/typescript-rules.js');

module.exports = [
  includeIgnoreFile(require.resolve('./.gitignore')),
  playwright.configs['flat/recommended'],
  ...baseConfig,
  ...typescriptRules(__dirname),
  {
    files: ['**/*.spec.ts'],
    rules: {
      'jest/require-hook': 'off',
    },
  },
];
