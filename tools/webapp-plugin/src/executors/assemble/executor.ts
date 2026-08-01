import {
  ExecutorContext,
  parseTargetString,
  PromiseExecutor,
} from '@nx/devkit';
import {
  getCommitsSinceVersion,
  getGitCommitHash,
  getPackageJsonVersion,
  getVersionCode,
} from '@travel-packlist/versioning';
import { BuildInfoSchema } from '@travel-packlist/versioning/build-info';
import { execSync } from 'child_process';
import { createHash } from 'crypto';
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  unlinkSync,
  writeFileSync,
} from 'fs';

import {
  copyFile,
  removeDirectoryRecursive,
  updateFile,
} from '../../file-operations';
import { ExecutorSchema } from './schema';

type ConsolidatedOptions = ReturnType<typeof consolidateOptions>;

function consolidateOptions(
  options: ExecutorSchema,
  context: ExecutorContext,
): Required<ExecutorSchema> & { buildResultPath: string } {
  const outputPath =
    options.outputPath ??
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    `dist/${context.projectsConfigurations.projects[context.projectName!].root}`;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const buildConfig = options.buildTarget.split(':').pop()!;
  const buildResultPath = `dist/apps/travel-packlist-${buildConfig}/browser`;

  return {
    ...options,
    outputPath,
    buildResultPath,
  };
}

/**
 * Runs Angular build for the specified target with localization enabled to the new output path
 */
function runAngularBuild(options: ConsolidatedOptions) {
  console.log(
    `Running assemble for ${options.buildTarget} with baseHref ${options.baseHref}`,
  );

  let output: string | undefined;
  try {
    output = execSync(
      ['pnpm nx run', '--no-cloud', options.buildTarget].join(' '),
      { encoding: 'utf-8' },
    );
  } catch (error) {
    if (output) {
      console.log(output);
    }
    console.error(error instanceof Error ? error.message : error);
  }
}

/**
 * changes file hashes to the shortened Sha1 hashes in the specified folder
 * because Angular build creates bogus file hashes that are identical for
 * all localized apps and therefore cannot be merged together
 */
function fixFileHashes(folder: string) {
  console.log('Fixing file hashes in', folder);

  let numOfHashCalculations = 0;
  let numOfFileRenames = 0;

  const hash = (content: string): string => {
    numOfHashCalculations++;
    return createHash('sha1').update(content).digest('hex').slice(0, 8);
  };

  const memoizedWith = (
    getValue: () => string,
    expensiveCalculation: (input: string) => string,
  ) => {
    let memoized: string;
    let value: string;
    return function () {
      if (!memoized || value !== getValue()) {
        value = getValue();
        memoized = expensiveCalculation(value);
      }
      return memoized;
    };
  };

  /** helper class for tracking files in memory */
  class File {
    constructor(
      private currentContent: string,
      private currentHash: string | undefined,
      private currentName: string,
    ) {}

    dependencies: File[] = [];

    removeDependency(file: File) {
      const index = this.dependencies.indexOf(file);
      if (index !== -1) {
        this.dependencies.splice(index, 1);
      }
    }

    private calculateActualHash = memoizedWith(() => this.currentContent, hash);

    get isCorrectlyHashed() {
      return (
        !this.currentHash || this.currentHash === this.calculateActualHash()
      );
    }

    get name() {
      return this.currentName;
    }

    get content() {
      return this.currentContent;
    }

    rename(files: File[], printWrongHashWarning = false) {
      if (!this.currentHash) {
        return;
      }
      numOfFileRenames++;
      const oldName = this.currentName;
      const newHash = this.calculateActualHash();
      this.currentName = this.currentName.replace(this.currentHash, newHash);
      if (printWrongHashWarning) {
        console.warn(
          `File ${oldName} renamed to ${this.currentName} (hash will not be perfect)`,
        );
      }
      this.currentHash = newHash;
      files.forEach((f) => {
        f.currentContent = f.currentContent.replace(
          new RegExp(oldName, 'g'),
          this.currentName,
        );
      });
    }
  }

  // move files into memory
  const hashRegex = /-([A-Za-z0-9_-]{8})\.(js|css)$/;
  const files = readdirSync(folder)
    .map((file) => {
      const match = hashRegex.exec(file);
      if (!file.endsWith('.html') && !match) {
        return null;
      }
      const oldHash = match?.[1];
      const content = readFileSync(`${folder}/${file}`, { encoding: 'utf-8' });
      unlinkSync(`${folder}/${file}`);
      return new File(content, oldHash, file);
    })
    .filter((x) => !!x);

  console.log(`Read ${files.length.toString()} files`);

  // make a list of files that need to be renamed
  const toDoFiles = files.filter((f) => !f.isCorrectlyHashed);

  // build dependency graph
  toDoFiles.forEach((file) => {
    file.dependencies = toDoFiles.filter((dep) =>
      file.content.includes(dep.name),
    );
  });

  /** finds a file that has no dependencies and is not correctly hashed */
  const findPerfectCandidate = () =>
    toDoFiles.findIndex(
      (el) => !el.isCorrectlyHashed && el.dependencies.length === 0,
    );

  /** finds a file that has the highest number of dependencies and is not correctly hashed */
  const findCandidateWithHighestDependencies = () => {
    let maxDependencies = -1;
    let candidate = -1;
    for (let i = 0; i < toDoFiles.length; i++) {
      const file = toDoFiles[i];
      if (
        !file.isCorrectlyHashed &&
        file.dependencies.length > maxDependencies
      ) {
        maxDependencies = file.dependencies.length;
        candidate = i;
      }
    }
    return candidate;
  };

  // loop through the files and rename them
  let candidateFn = findPerfectCandidate;
  while (toDoFiles.length) {
    let candidate: number;
    while ((candidate = candidateFn()) >= 0) {
      toDoFiles[candidate].rename(files, candidateFn !== findPerfectCandidate);
      toDoFiles.forEach((f) => {
        f.removeDependency(toDoFiles[candidate]);
      });
      toDoFiles.splice(candidate, 1);

      // switch back to perfect candidate finder
      candidateFn = findPerfectCandidate;
    }
    if (toDoFiles.length && candidateFn === findPerfectCandidate) {
      console.warn('There is a circular dependency between the build files');
      candidateFn = findCandidateWithHighestDependencies;
    }
  }

  // write files back to disk
  files.forEach((f) => {
    writeFileSync(`${folder}/${f.name}`, f.content);
  });

  console.log(
    `Wrote back ${files.length.toString()} files after ${numOfHashCalculations.toString()} hash calculations and ${numOfFileRenames.toString()} file renames`,
  );
}

/**
 * merges multiple Angular apps into the same folder
 */
function mergeAngularApps(options: ConsolidatedOptions) {
  const folder = options.buildResultPath;
  mkdirSync(options.outputPath, { recursive: true });
  readdirSync(folder).forEach((lang) => {
    if (statSync(`${folder}/${lang}`).isDirectory()) {
      readdirSync(`${folder}/${lang}`).forEach((file) => {
        copyFile(`${folder}/${lang}/${file}`, `${options.outputPath}/${file}`);
      });

      const target = lang === 'en' ? 'index.html' : `index.${lang}.html`;
      copyFile(
        `${folder}/${lang}/index.html`,
        `${options.outputPath}/${target}`,
        (content) =>
          content.replace(
            /<base href="[^"]*">/,
            `<base href="${options.baseHref}">`,
          ),
      );

      fixFileHashes(options.outputPath);
    }
  });

  updateFile(`${options.outputPath}/manifest.json`, (content) => {
    const manifest = JSON.parse(content) as { start_url: string };
    manifest.start_url = options.baseHref;
    return JSON.stringify(manifest);
  });

  console.log('Merged localized apps into', options.outputPath);
}

function recreateServiceWorkerConfig(
  context: ExecutorContext,
  options: ConsolidatedOptions,
) {
  if (existsSync(`${options.outputPath}/ngsw.json`)) {
    console.log('Recreating service worker config');

    const buildTargetProjectRoot =
      context.projectsConfigurations.projects[
        parseTargetString(options.buildTarget, context.projectGraph).project
      ].root;
    execSync(
      `pnpm ngsw-config ${options.outputPath} ${buildTargetProjectRoot}/ngsw-config.json ${options.baseHref}`,
    );
  }
}

function cleanOutputPath(outputPath: string) {
  if (existsSync(outputPath)) {
    removeDirectoryRecursive(outputPath);
  }
}

function writeBuildInfo(outputPath: string) {
  const buildInfo: BuildInfoSchema = {
    buildTime: Math.trunc(Date.now()),
    version: getPackageJsonVersion(),
    commitsSince: getCommitsSinceVersion(),
    gitHash: getGitCommitHash(),
    versionCode: getVersionCode(),
  };
  writeFileSync(
    `${outputPath}/build-info.json`,
    JSON.stringify(buildInfo, null, 2),
  );
}

function assemble(options: ConsolidatedOptions, context: ExecutorContext) {
  cleanOutputPath(options.outputPath);
  runAngularBuild(options);
  mergeAngularApps(options);
  writeBuildInfo(options.outputPath);
  recreateServiceWorkerConfig(context, options);
}

// eslint-disable-next-line @typescript-eslint/require-await
const run: PromiseExecutor<ExecutorSchema> = async (options, context) => {
  try {
    assemble(consolidateOptions(options, context), context);
    return { success: true };
  } catch (error) {
    console.error((error as Error).message);
    return { success: false };
  }
};

export default run;
