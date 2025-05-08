export default {
  coverageDirectory: '../../coverage/libs/rules-template',
  displayName: 'rules-template',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        stringifyContentPathRegex: '\\.(html|svg)$',
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
    '^.+\\.txt$': 'jest-text-transformer',
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
};
