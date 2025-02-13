import { execSync } from 'child_process';

const tsTwoWeeksAgo = Math.trunc(
  (Date.now() - 14 * 24 * 60 * 60 * 1000) / 1000
);

const files = execSync('git ls-files', { encoding: 'utf8' })
  .split('\n')
  .filter((x) => !!x)
  .filter((f) => /\b[0-9a-f]{8}\b/.test(f))
  .map((file) => {
    const lastCommit = parseInt(
      execSync(`git log -1 --pretty=format:%at -- ${file}`, {
        encoding: 'utf8',
      }).trim(),
      10
    );
    return { file, lastCommit };
  })
  .reduce((acc, file) => {
    const fileWithoutHash = file.file.replace(/\b[0-9a-f]{8}\b/, 'XXX');
    if (!acc[fileWithoutHash]) {
      acc[fileWithoutHash] = [];
    }

    acc[fileWithoutHash].push(file);
    return acc;
  }, /** @type {Record<string, string[]>} */ ({}));

Object.entries(files).forEach(([group, files]) => {
  if (files.length <= 1) {
    return;
  }
  console.log(`Group: ${group}`);
  files.sort((a, b) => b.lastCommit - a.lastCommit);
  files
    .slice(2)
    .filter((f) => f.lastCommit < tsTwoWeeksAgo)
    .forEach((f) => {
      console.log(`  ${f.file}`);
      execSync(`git rm ${f.file}`);
    });
});
