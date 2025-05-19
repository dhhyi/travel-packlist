const eslint = require('@eslint/js');
const jest = require('eslint-plugin-jest');
const { existsSync, statSync } = require('fs');
const tseslint = require('typescript-eslint');

const rules = (tsConfigOrFolder) => {
  let tsconfig;
  if (statSync(tsConfigOrFolder).isDirectory()) {
    tsconfig = ['lib', 'app', 'spec']
      .map((name) => `${tsConfigOrFolder}/tsconfig.${name}.json`)
      .filter(existsSync);
    if (tsconfig.length === 0) {
      throw new Error(`No tsconfig files found in ${tsConfigOrFolder}`);
    } else if (tsconfig.length === 1) {
      tsconfig = tsconfig[0];
    }
  } else {
    tsconfig = tsConfigOrFolder;
  }
  return tseslint.config(
    {
      extends: [
        eslint.configs.recommended,
        ...tseslint.configs.stylisticTypeChecked,
        ...tseslint.configs.strictTypeChecked,
      ],
      files: ['**/*.ts', '**/*.tsx'],
      languageOptions: {
        parserOptions: {
          project: tsconfig,
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
        eqeqeq: 'error',
        'perfectionist/sort-imports': 'error',
      },
    },
    {
      files: ['**/*.spec.ts'],
      ...jest.configs['flat/all'],
      rules: {
        ...jest.configs['flat/all'].rules,
        '@typescript-eslint/no-unsafe-assignment': 'off',
        'jest/max-expects': 'off',
        'jest/no-hooks': 'off',
        'jest/prefer-expect-assertions': 'off',
        'jest/prefer-importing-jest-globals': 'off',
        'jest/require-to-throw-message': 'off',
      },
    }
  );
};

module.exports = rules;
