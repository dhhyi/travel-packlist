const baseConfig = require('../../eslint.base.config.cjs');
const typescriptRules = require('../../util/typescript-rules.js');

module.exports = [
  ...baseConfig,
  ...typescriptRules(require.resolve('./tsconfig.lib.json')),
];