const { includeIgnoreFile } = require('@eslint/compat');
const nx = require('@nx/eslint-plugin');

const baseConfig = require('../../eslint.config.js');

module.exports = [
  includeIgnoreFile(require.resolve('./.gitignore')),
  ...baseConfig,
  ...nx.configs['flat/angular'],
];
