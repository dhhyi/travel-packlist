export default {
  coverageDirectory: '../../coverage/libs/model',
  displayName: 'model',
  preset: '../../jest.preset.js',
  prettierPath: null,
  snapshotSerializers: [],
  transform: {
    '^.+\\.(ts|mjs|js)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
};
