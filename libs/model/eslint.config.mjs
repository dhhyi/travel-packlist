import { defineConfig } from 'eslint/config';

import baseConfig from '../../eslint.base.config.mjs';
import { typescriptRules } from '../../tools/eslint-config/src/index.mjs';

export default defineConfig([
  ...baseConfig,
  {
    extends: typescriptRules,
  },
  {
    files: ['**/*.ts'],
    rules: {
      'no-console': 'error',
    },
  },
]);
