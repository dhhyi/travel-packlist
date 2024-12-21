import { PromiseExecutor } from '@nx/devkit';
import { execSync } from 'child_process';
import * as fs from 'fs';
import { globSync } from 'glob';

import { ExecutorSchema } from './schema';

function enforceNewlinesInFile(file: string): void {
  const fileContent = fs.readFileSync(file, { encoding: 'utf-8' });
  const newContent = fileContent
    .split('\n')
    .map((line) => {
      if (/^(>|#|\||\s*-|\s*[0-9]+\.)/.test(line)) {
        return line;
      } else {
        return line.replace(/((?<!i\.e|e\.g)[.?]) ([A-Z0-9])/g, '$1\n$2');
      }
    })
    .join('\n');
  if (newContent !== fileContent) {
    fs.writeFileSync(file, newContent);
  }
}

function runMarkdownLint(context, files: string[]) {
  let markdownLintConfig = `${context.projectsConfigurations.projects[context.projectName].root}/.markdownlint.json`;
  if (!fs.existsSync(markdownLintConfig)) {
    markdownLintConfig = `${context.root}/.markdownlint.json`;
    if (!fs.existsSync(markdownLintConfig)) {
      markdownLintConfig = require.resolve('../../../.markdownlint.json');
    }
  }
  console.log(`Running markdownlint with config: ${markdownLintConfig}`);
  execSync(`markdownlint --config ${markdownLintConfig} ${files.join(' ')}`, {
    stdio: 'inherit',
  });
}

function runCspellCheck(context, files: string[]) {
  const cspellConfig = `${context.root}/cspell.config.js`;
  if (!fs.existsSync(cspellConfig)) {
    throw new Error(`cspell.config.js not found in project root`);
  }

  console.log(`Running cspell with config: ${cspellConfig}`);
  execSync(`cspell -c ${cspellConfig} ${files.join(' ')}`, {
    stdio: 'inherit',
  });
}

const run: PromiseExecutor<ExecutorSchema> = async (options, context) => {
  try {
    const files = globSync(options.pattern, { ignore: options.exclude });

    if (files.length === 0) {
      throw new Error(`No files found for pattern: ${options.pattern}`);
    }

    files.forEach(enforceNewlinesInFile);
    runMarkdownLint(context, files);
    runCspellCheck(context, files);

    return { success: true };
  } catch (error) {
    console.error(error.message);
    return { success: false };
  }
};

export default run;