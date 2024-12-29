const { includeIgnoreFile } = require('@eslint/compat');
const nx = require('@nx/eslint-plugin');

const baseConfig = require('../../eslint.config.js');
const angularRules = require('../../util/angular-rules');
const typescriptRules = require('../../util/typescript-rules');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  includeIgnoreFile(require.resolve('./.gitignore')),
  ...typescriptRules(require.resolve('./tsconfig.spec.json')),
  ...angularRules(require.resolve('./tsconfig.spec.json')),
];
