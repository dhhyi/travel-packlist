import { includeIgnoreFile } from '@eslint/compat';
import { defineConfig } from 'eslint/config';
import { fileURLToPath } from 'node:url';

import baseConfig from '../../eslint.base.config.mjs';
import {
  createAngularRules,
  typescriptRules,
} from '../../tools/eslint-config/src/index.mjs';

export default defineConfig([
  includeIgnoreFile(fileURLToPath(new URL('./.gitignore', import.meta.url))),
  ...baseConfig,
  {
    extends: typescriptRules,
  },
  {
    extends: createAngularRules(),
  },
]);
