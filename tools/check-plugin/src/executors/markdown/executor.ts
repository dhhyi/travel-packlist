import { PromiseExecutor, cacheDir } from '@nx/devkit';
import axios from 'axios';
import { execSync } from 'child_process';
import * as fs from 'fs';
import { globSync } from 'glob';
import * as path from 'path';

import { ExecutorSchema } from './schema';

function enforceNewlinesInFile(file: string, options: ExecutorSchema): void {
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
    if (options.fix) {
      fs.writeFileSync(file, newContent);
    } else {
      throw new Error(
        `File ${file} does not have a newline after every sentence. Run with --fix to fix.`,
      );
    }
  }
}

async function checkLinksInFile(file: string): Promise<void> {
  function getLineInfoOfString(data: string, str: string) {
    const perLine = data.split('\n');
    for (let line = 0; line < perLine.length; line++) {
      const index = perLine[line].indexOf(str);
      if (index > 0) {
        return `:${line + 1}:${index + 1}`;
      }
    }
    return '';
  }

  let isError = false;
  const externalLinks = [];

  const content = fs.readFileSync(file, { encoding: 'utf-8' });

  const links = content.match(/\[.*?\](\(|: +)[^\s]*\)?/g) || [];
  links.forEach((link) => {
    const linkTo = /\](\(<?|:\s+)(.*?)(>?\)|$|#)/.exec(link)[2];
    if (linkTo) {
      // link is not document-internal
      if (linkTo.startsWith('http')) {
        externalLinks.push(linkTo.replace(/\/$/, ''));
      } else {
        const normalized = path.normalize(
          path.join(path.dirname(file), linkTo),
        );
        if (!fs.existsSync(normalized)) {
          console.warn(
            `${file + getLineInfoOfString(content, linkTo)}: found dead link to "${linkTo}"`,
          );
          isError = true;
        }
      }
    }
  });

  if (isError) {
    console.error('found dead internal links');
    process.exit(1);
  }

  if (externalLinks.length > 0) {
    const cacheLinksPath = path.join(cacheDir, 'checked-external-links.json');

    function getLinksCache(): Record<string, boolean> {
      return fs.existsSync(cacheLinksPath)
        ? JSON.parse(fs.readFileSync(cacheLinksPath, 'utf-8'))
        : {};
    }

    function writeNewCache(checkedLinks: Record<string, boolean>) {
      const newCache = JSON.stringify(
        {
          ...getLinksCache(),
          ...checkedLinks,
        },
        null,
        2,
      );

      fs.writeFileSync(cacheLinksPath, newCache);
    }

    async function checkExternalLinkError(link) {
      console.log('checking', link);
      return axios.head(link).catch(() => axios.get(link));
    }

    const checkedLinks = getLinksCache();
    await Promise.all(
      externalLinks
        .filter((link) => !checkedLinks[link])
        .map((link) =>
          checkExternalLinkError(link)
            .then(() => (checkedLinks[link] = true))
            .catch((error) => {
              console.error(error.message);
              console.error(
                `${file + getLineInfoOfString(content, link)}: found dead link to "${link}"`,
              );
              isError = true;
            }),
        ),
    );
    writeNewCache(checkedLinks);

    if (isError) {
      process.exit(1);
    }
  }
}

function runMarkdownLint(context, files: string[], options: ExecutorSchema) {
  let markdownLintConfig = `${context.projectsConfigurations.projects[context.projectName].root}/.markdownlint.json`;
  if (!fs.existsSync(markdownLintConfig)) {
    markdownLintConfig = `${context.root}/.markdownlint.json`;
    if (!fs.existsSync(markdownLintConfig)) {
      markdownLintConfig = require.resolve('../../../.markdownlint.json');
    }
  }
  console.log(`Running markdownlint with config: ${markdownLintConfig}`);
  const command = ['markdownlint', '--config', markdownLintConfig];
  if (options.fix) {
    command.push('--fix');
  }
  execSync(command.concat(files).join(' '), {
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

    runMarkdownLint(context, files, options);
    runCspellCheck(context, files);

    for (const file of files) {
      enforceNewlinesInFile(file, options);
      await checkLinksInFile(file);
    }

    return { success: true };
  } catch (error) {
    console.error(error.message);
    return { success: false };
  }
};

export default run;
