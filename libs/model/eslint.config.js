const { includeIgnoreFile } = require('@eslint/compat');
const nx = require('@nx/eslint-plugin');

const baseConfig = require('../../eslint.config.js');
const typescriptRules = require('../../util/angular-rules');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  includeIgnoreFile(require.resolve('./.gitignore')),
  ...typescriptRules(require.resolve('./tsconfig.spec.json')),
];
