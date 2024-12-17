const nx = require('@nx/eslint-plugin');

const baseConfig = require('../../eslint.config.js');
const typescriptRules = require('../../util/angular-rules');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  ...typescriptRules(require.resolve('./tsconfig.app.json')),
];
