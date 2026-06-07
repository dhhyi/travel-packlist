import { includeIgnoreFile } from '@eslint/compat';
import { fileURLToPath } from 'node:url';

import baseConfig from '../../eslint.base.config.mjs';
import typescriptRules from '../../util/typescript-rules.js';

export default [
  includeIgnoreFile(fileURLToPath(new URL('./.gitignore', import.meta.url))),
  ...baseConfig,
  ...typescriptRules,
  {
    files: ['**/*.ts'],
    rules: {
      'no-console': 'error',
    },
  },
];
