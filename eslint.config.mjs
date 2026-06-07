import { includeIgnoreFile } from '@eslint/compat';
import { fileURLToPath } from 'node:url';

import baseConfig from './eslint.base.config.mjs';

export default [
  includeIgnoreFile(fileURLToPath(new URL('./.gitignore', import.meta.url))),
  ...baseConfig,
];
