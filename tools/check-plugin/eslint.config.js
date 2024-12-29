const { includeIgnoreFile } = require('@eslint/compat');

const baseConfig = require('../../eslint.config.js');
const typescriptRules = require('../../util/typescript-rules.js');

module.exports = [
  includeIgnoreFile(require.resolve('./.gitignore')),
  ...baseConfig,
  ...typescriptRules(require.resolve('./tsconfig.lib.json')),
];
