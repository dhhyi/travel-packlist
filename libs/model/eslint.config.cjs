const { includeIgnoreFile } = require('@eslint/compat');

const baseConfig = require('../../eslint.base.config.cjs');
const angularRules = require('../../util/angular-rules');
const typescriptRules = require('../../util/typescript-rules');

module.exports = [
  ...baseConfig,
  includeIgnoreFile(require.resolve('./.gitignore')),
  ...typescriptRules(require.resolve('./tsconfig.spec.json')),
  ...angularRules(require.resolve('./tsconfig.spec.json')),
];
