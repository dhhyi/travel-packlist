export default {
  coverageDirectory: '../../coverage/tools/rules-mcp',
  displayName: 'rules-mcp',
  preset: '../../jest.preset.js',
  snapshotSerializers: [],
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        stringifyContentPathRegex: '\\.(html|svg)$',
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
};
