import { defineConfig } from 'eslint/config';

import baseConfig from '../../eslint.base.config.mjs';
import { typescriptRules } from '../../tools/eslint-config/src/index.mjs';

export default defineConfig([
  {
    ignores: ['src/index.mjs', 'src/index.d.ts'],
  },
  ...baseConfig,
  {
    extends: typescriptRules,
  },
]);
