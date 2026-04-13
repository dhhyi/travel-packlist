const { readFileSync } = require('fs');
const { join } = require('path');

function getPackageJsonVersion() {
  const packageJsonPath = join(__dirname, '..', '..', 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
  return packageJson.version;
}

function getGitHash() {
  const { execSync } = require('child_process');
  try {
    return execSync('git rev-parse HEAD').toString().trim();
  } catch {
    return 'unknown';
  }
}

/** @type {import('esbuild').BuildOptions} */
module.exports = {
  bundle: true,
  define: {
    GIT_HASH: `"${getGitHash()}"`,
    VERSION: `"${getPackageJsonVersion()}"`,
  },
  platform: 'node',
  sourcemap: false,
  target: 'node',
};
