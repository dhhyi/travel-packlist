const baseConfig = require('../../eslint.base.config.cjs');

const angularRules = require('../../util/angular-rules');
const typescriptRules = require('../../util/typescript-rules');
const storyBookRules = require('eslint-plugin-storybook');

module.exports = [
  ...baseConfig,
  ...typescriptRules(require.resolve('./storybook/tsconfig.json')),
  ...angularRules(require.resolve('./storybook/tsconfig.json'), {
    prefix: 'ds',
  }),
  ...storyBookRules.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@angular-eslint/component-class-suffix': 'off',
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
