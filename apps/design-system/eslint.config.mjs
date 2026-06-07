import storyBookRules from 'eslint-plugin-storybook';

import baseConfig from '../../eslint.base.config.mjs';
import angularRules from '../../util/angular-rules.js';
import typescriptRules from '../../util/typescript-rules.js';

export default [
  ...baseConfig,
  ...typescriptRules,
  ...angularRules({
    prefix: 'ds',
  }),
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
];
