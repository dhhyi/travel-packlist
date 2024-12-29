const baseConfig = require('../../eslint.config.js');
const typescriptRules = require('../../util/typescript-rules.js');

module.exports = [
  ...baseConfig,
  ...typescriptRules(require.resolve('./tsconfig.lib.json')),
];
