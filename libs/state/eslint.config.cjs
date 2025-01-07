const baseConfig = require('../../eslint.base.config.cjs');
const angularRules = require('../../util/angular-rules');
const typescriptRules = require('../../util/typescript-rules');

module.exports = [
  ...baseConfig,
  ...typescriptRules(require.resolve('./tsconfig.lib.json')),
  ...angularRules(require.resolve('./tsconfig.lib.json')),
];
