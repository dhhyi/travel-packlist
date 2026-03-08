import { execSync } from 'child_process';
import { readFileSync } from 'fs';

const playwrightVersionPnpm = execSync(
  'pnpm list @playwright/test --parseable'
);
const playwrightVersion = /(\d+\.\d+\.\d+)/.exec(playwrightVersionPnpm)[1];

console.log(`Playwright version installed: ${playwrightVersion}`);

const checkFiles = [
  'language.yaml',
  '.devcontainer/devcontainer.json',
  '.devcontainer/Dockerfile',
];

for (const file of checkFiles) {
  const content = readFileSync(file, 'utf-8');
  if (content.includes('@playwright/test')) {
    const versionInFileMatch = /@playwright\/test@(\d+\.\d+\.\d+)/.exec(
      content
    );
    const versionInFile = versionInFileMatch ? versionInFileMatch[1] : null;

    if (versionInFile !== playwrightVersion) {
      console.error(
        `Version mismatch in ${file}: expected ${playwrightVersion}, found ${versionInFile}`
      );
      process.exit(1);
    }
    console.log(`File ${file} is in sync with the Playwright version.`);
  } else {
    console.log(`File ${file} does not contain @playwright/test.`);
  }
}

console.log('All files are in sync with the Playwright version.');
