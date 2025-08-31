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

/**
 * @returns {import('esbuild').Plugin}
 */
function removeLocalizePlugin() {
  return {
    name: 'remove-localize',
    setup(build) {
      build.onLoad({ filter: /.*/ }, (args) => ({
        contents: readFileSync(args.path, 'utf8').replaceAll('$localize', ''),
        loader: 'ts',
      }));
    },
  };
}

/**
 * @returns {import('esbuild').Plugin}
 */
function replaceAngularImportsPlugin() {
  return {
    name: 'replace-angular-imports',
    setup(build) {
      build.onResolve({ filter: /@angular\/core/ }, () => ({
        namespace: 'empty',
        path: 'tools/rules-cmdl/angular-replacements.ts',
      }));
    },
  };
}

/** @type {import('esbuild').BuildOptions} */
module.exports = {
  bundle: true,
  define: {
    GIT_HASH: `"${getGitHash()}"`,
    VERSION: `"${getPackageJsonVersion()}"`,
  },
  platform: 'node',
  plugins: [removeLocalizePlugin(), replaceAngularImportsPlugin()],
  sourcemap: false,
  target: 'node',
};
