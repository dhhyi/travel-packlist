import { includeIgnoreFile } from '@eslint/compat';
import playwright from 'eslint-plugin-playwright';
import { fileURLToPath } from 'node:url';

import baseConfig from '../../eslint.base.config.mjs';
import typescriptRules from '../../util/typescript-rules.js';

export default [
  includeIgnoreFile(fileURLToPath(new URL('./.gitignore', import.meta.url))),
  playwright.configs['flat/recommended'],
  ...baseConfig,
  ...typescriptRules,
];
