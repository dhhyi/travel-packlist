export default {
  coverageDirectory: '../../coverage/libs/rules-template',
  displayName: 'rules-template',
  preset: '../../jest.preset.js',
  snapshotSerializers: [],
  transform: {
    '^.+\\.(ts|mjs|js)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
    '^.+\\.txt$': 'jest-text-transformer',
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
};
