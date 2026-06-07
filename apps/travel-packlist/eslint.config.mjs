import { defineConfig } from 'eslint/config';

import baseConfig from '../../eslint.base.config.mjs';
import {
  createAngularRules,
  typescriptRules,
} from '../../tools/eslint-config/src/index.mjs';

export default defineConfig([
  ...baseConfig,
  {
    extends: typescriptRules,
  },
  {
    extends: createAngularRules({ prefix: 'app' }),
  },
  {
    files: ['**/*.ts'],
    rules: {
      'no-console': 'error',
    },
  },
]);
