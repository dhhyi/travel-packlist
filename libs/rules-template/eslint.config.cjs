const { includeIgnoreFile } = require('@eslint/compat');
const nx = require('@nx/eslint-plugin');

const baseConfig = require('../../eslint.base.config.cjs');

module.exports = [
  includeIgnoreFile(require.resolve('./.gitignore')),
  ...baseConfig,
  ...nx.configs['flat/angular'],
];
