import { PromiseExecutor } from '@nx/devkit';
import { execSync } from 'child_process';
import * as fs from 'fs';
import { Minimatch } from 'minimatch';

import { ExecutorSchema } from './schema';

// eslint-disable-next-line @typescript-eslint/require-await
const run: PromiseExecutor<ExecutorSchema> = async (options) => {
  try {
    const excludes = (options.exclude ?? []).map(
      (pattern) => new Minimatch(pattern),
    );
    const files = fs
      .globSync(options.pattern)
      .filter((file) => !excludes.some((exclude) => exclude.match(file)));

    if (files.length === 0) {
      throw new Error(`No files found for pattern: ${options.pattern}`);
    }

    const args = ['--format'];
    if (options.errorOnWarnings) {
      console.log('treating warnings as errors');
      args.push('--error-on-warnings');
    }

    for (const file of files) {
      console.log(`Checking file: ${file}`);
      execSync(
        `node dist/tools/rules-cmdl/index.cjs ${file} ${args.join(' ')}`,
        {
          stdio: 'inherit',
        },
      );
      if (options.errorOnChange) {
        execSync(`git diff --exit-code ${file}`, { stdio: 'inherit' });
      }
    }

    return { success: true };
  } catch (error) {
    console.error((error as Error).message);
    return { success: false };
  }
};

export default run;
