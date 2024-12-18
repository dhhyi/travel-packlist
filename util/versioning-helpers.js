const cp = require('child_process');
const fs = require('fs');

function getPackageJsonVersion() {
  if (!fs.existsSync('package.json')) {
    return 'unavailable';
  }
  const packageJson = fs.readFileSync('package.json', 'utf8');
  const version = JSON.parse(packageJson).version;
  return version || 'unavailable';
}

function getGitCommitHash() {
  try {
    return cp.execSync('git rev-parse HEAD').toString().trim();
  } catch (error) {
    console.error('Error getting git commit hash:', error);
    return '1234567890abcdef1234567890abcdef12345678';
  }
}

function getVersionCode() {
  try {
    const tags = cp.execSync('git tag -l').toString().trim().split('\n');
    return tags.length;
  } catch (error) {
    console.error('Error getting build code:', error);
    return 0;
  }
}

module.exports = {
  getPackageJsonVersion,
  getGitCommitHash,
  getVersionCode,
};
