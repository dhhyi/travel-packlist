import * as cp from 'child_process';
import * as fs from 'fs';

export function getPackageJsonVersion() {
  if (!fs.existsSync('package.json')) {
    return 'unavailable';
  }
  const packageJson = fs.readFileSync('package.json', 'utf8');
  const version = JSON.parse(packageJson).version as string;
  return version || 'unavailable';
}

export function getCommitsSinceVersion() {
  try {
    const version = getPackageJsonVersion();
    if (!version || version === 'unavailable') {
      return 0;
    }
    // npm version always creates tags like v1.2.3
    const tag = `v${version}`;
    // Count commits since the tag
    const count = cp
      .execSync(`git rev-list ${tag}..HEAD --count`)
      .toString()
      .trim();
    return parseInt(count, 10);
  } catch (error) {
    console.error('Error getting commits since version:', error);
    return 0;
  }
}

export function getGitCommitHash() {
  try {
    return cp.execSync('git rev-parse HEAD').toString().trim();
  } catch (error) {
    console.error('Error getting git commit hash:', error);
    return '1234567890abcdef1234567890abcdef12345678';
  }
}

export function getVersionCode() {
  try {
    const tags = cp.execSync('git tag -l').toString().trim().split('\n');
    return tags.length;
  } catch (error) {
    console.error('Error getting build code:', error);
    return 0;
  }
}
