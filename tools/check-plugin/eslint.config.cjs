const { includeIgnoreFile } = require('@eslint/compat');

const baseConfig = require('../../eslint.base.config.cjs');
const typescriptRules = require('../../util/typescript-rules.js');

module.exports = [
  includeIgnoreFile(require.resolve('./.gitignore')),
  ...baseConfig,
  ...typescriptRules(require.resolve('./tsconfig.lib.json')),
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
];
