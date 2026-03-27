const eslint = require('@eslint/js');
const jest = require('eslint-plugin-jest');
const { defineConfig } = require('eslint/config');
const tseslint = require('typescript-eslint');

const rules = defineConfig(
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.stylisticTypeChecked,
      ...tseslint.configs.strictTypeChecked,
    ],
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      '@typescript-eslint/no-unnecessary-parameter-property-assignment':
        'error',
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unnecessary-type-conversion': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/require-array-sort-compare': 'error',
      eqeqeq: 'error',
      'perfectionist/sort-imports': 'error',
    },
  },
  {
    files: ['**/*.spec.ts'],
    ...jest.configs['flat/all'],
    rules: {
      ...jest.configs['flat/all'].rules,
      'jest/max-expects': 'off',
      'jest/no-hooks': 'off',
      'jest/prefer-expect-assertions': 'off',
      'jest/prefer-importing-jest-globals': 'off',
      'jest/require-to-throw-message': 'off',
    },
  }
);

module.exports = rules;
