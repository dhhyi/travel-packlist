const eslint = require('@eslint/js');
const vitest = require('@vitest/eslint-plugin');
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
    files: ['**/*.test.ts'],
    ...vitest.configs['all'],
    rules: {
      ...vitest.configs['all'].rules,
      'vitest/no-hooks': 'off',
      'vitest/no-importing-vitest-globals': 'error',
      'vitest/prefer-expect-assertions': 'off',
      'vitest/prefer-importing-vitest-globals': 'off',
    },
  }
);

module.exports = rules;
