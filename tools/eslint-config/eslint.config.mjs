import { defineConfig } from 'eslint/config';

import baseConfig from '../../eslint.base.config.mjs';
import { typescriptRules } from './src/index.mjs';

export default defineConfig([
  ...baseConfig,
  {
    extends: typescriptRules,
  },
]);
