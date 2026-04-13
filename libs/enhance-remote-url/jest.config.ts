export default {
  coverageDirectory: '../../coverage/libs/enhance-remote-url',
  displayName: 'enhance-remote-url',
  preset: '../../jest.preset.js',
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
