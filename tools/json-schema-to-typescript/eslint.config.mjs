import baseConfig from '../../eslint.base.config.mjs';
import typescriptRules from '../../util/typescript-rules.js';

export default [...baseConfig, ...typescriptRules];
