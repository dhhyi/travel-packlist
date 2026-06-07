import storyBookRules from 'eslint-plugin-storybook';
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
    extends: createAngularRules({
      prefix: 'ds',
    }),
  },
  ...storyBookRules.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@angular-eslint/component-max-inline-declarations': 'off',
      '@typescript-eslint/no-extraneous-class': 'off',
      'storybook/prefer-pascal-case': 'off',
    },
  },
  {
    files: ['**/*.html'],
    rules: {
      '@angular-eslint/template/i18n': 'off',
    },
  },
]);
