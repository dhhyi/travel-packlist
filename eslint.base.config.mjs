import eslint from '@eslint/js';
import nx from '@nx/eslint-plugin';
import perfectionist from 'eslint-plugin-perfectionist';

/** @type {import('@nx/eslint-plugin/src/rules/enforce-module-boundaries').Options[number]} */
const moduleBoundaries = {
  allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
  depConstraints: [
    {
      onlyDependOnLibsWithTags: ['scope:main', 'scope:state'],
      sourceTag: 'scope:testing',
    },
    {
      onlyDependOnLibsWithTags: [
        'scope:state',
        'scope:generated',
        'scope:components',
      ],
      sourceTag: 'scope:main',
    },
    {
      onlyDependOnLibsWithTags: [
        'scope:generated',
        'scope:state',
        'scope:components',
      ],
      sourceTag: 'scope:design',
    },
    {
      onlyDependOnLibsWithTags: ['scope:generated', 'scope:state'],
      sourceTag: 'scope:state',
    },
    {
      onlyDependOnLibsWithTags: ['scope:generated'],
      sourceTag: 'scope:components',
    },
    {
      notDependOnLibsWithTags: ['*'],
      sourceTag: 'scope:generated',
    },
    {
      onlyDependOnLibsWithTags: ['utility'],
      sourceTag: 'plugin',
    },
    {
      onlyDependOnLibsWithTags: ['*'],
      sourceTag: 'standalone',
    },
  ],
};

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': ['error', moduleBoundaries],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.mjs'],
    plugins: { perfectionist },
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      curly: 'error',
      'no-duplicate-imports': 'error',
      'no-implicit-coercion': ['error', { allow: ['!!'] }],
      'object-shorthand': 'error',
      'perfectionist/sort-imports': 'error',
    },
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.mjs'],
    rules: {
      ...eslint.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.config.{js,ts,cjs,mjs}', '**/*-rules.{js,ts,cjs,mjs}'],
    plugins: { perfectionist },
    rules: {
      'no-restricted-modules': [
        'error',
        {
          paths: [
            {
              message:
                'Import from `tools/eslint-config/src/index.mjs` via a runtime-resolvable relative path instead.',
              name: '@nx/eslint-plugin',
            },
          ],
        },
      ],
      'perfectionist/sort-objects': ['error', { type: 'natural' }],
    },
  },
];
