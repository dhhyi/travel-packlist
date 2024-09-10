/** @type {import('jest').Config} */
const config = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
};

module.exports = config;
