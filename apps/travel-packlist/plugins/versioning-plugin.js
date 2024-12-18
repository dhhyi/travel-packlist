const {
  getGitCommitHash,
  getPackageJsonVersion,
  getVersionCode,
} = require('../../../util/versioning-helpers');

const versioningPlugin = {
  name: 'versioning-plugin',
  setup(build) {
    const options = build.initialOptions;
    options.define.BUILD_TIME = Date.now().toFixed(0);
    const version = getPackageJsonVersion();
    options.define.VERSION = `"${version}"`;
    const gitHash = getGitCommitHash();
    options.define.GIT_HASH = `"${gitHash}"`;
    const versionCode = getVersionCode();
    options.define.VERSION_CODE = versionCode.toString();

    console.log(`Version: ${versionCode} (${version})`);
    console.log(`Commit: ${gitHash}`);
  },
};

module.exports = versioningPlugin;
