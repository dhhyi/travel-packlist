import { includeIgnoreFile } from '@eslint/compat';
import playwright from 'eslint-plugin-playwright';
import { defineConfig } from 'eslint/config';
import { fileURLToPath } from 'node:url';

import baseConfig from '../../eslint.base.config.mjs';
import { typescriptRules } from '../../tools/eslint-config/src/index.mjs';

export default defineConfig([
  includeIgnoreFile(fileURLToPath(new URL('./.gitignore', import.meta.url))),
  playwright.configs['flat/recommended'],
  ...baseConfig,
  {
    extends: typescriptRules,
  },
]);
