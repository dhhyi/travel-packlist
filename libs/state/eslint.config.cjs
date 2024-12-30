const nx = require('@nx/eslint-plugin');

const baseConfig = require('../../eslint.base.config.cjs');
const angularRules = require('../../util/angular-rules');
const typescriptRules = require('../../util/typescript-rules');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  ...typescriptRules(require.resolve('./tsconfig.lib.json')),
  ...angularRules(require.resolve('./tsconfig.lib.json')),
];
