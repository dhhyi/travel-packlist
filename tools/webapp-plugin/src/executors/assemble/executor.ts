import {
  ExecutorContext,
  PromiseExecutor,
  runExecutor,
  parseTargetString,
} from '@nx/devkit';
import { execSync } from 'child_process';
import { createHash } from 'crypto';
import {
  readdirSync,
  statSync,
  readFileSync,
  writeFileSync,
  unlinkSync,
  rmdirSync,
  existsSync,
} from 'fs';

import {
  moveFile,
  removeDirectoryRecursive,
  updateFile,
} from '../../file-operations';
import { ExecutorSchema } from './schema';

type ConsolidatedOptions = ReturnType<typeof consolidateOptions>;

function consolidateOptions(
  options: ExecutorSchema,
  context: ExecutorContext,
): Required<ExecutorSchema> {
  const outputPath =
    options.outputPath ??
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    `dist/${context.projectsConfigurations.projects[context.projectName!].root}`;

  return {
    ...options,
    outputPath,
  };
}

/**
 * Runs Angular build for the specified target with localization enabled to the new output path
 */
async function runAngularBuild(
  options: ConsolidatedOptions,
  context: ExecutorContext,
) {
  console.log(
    `Running assemble for ${options.buildTarget} with baseHref ${options.baseHref}`,
  );

  for await (const s of await runExecutor(
    parseTargetString(options.buildTarget, context.projectGraph),
    {
      localize: true,
      outputPath: options.outputPath,
      baseHref: options.baseHref,
    },
    context,
  )) {
    if (!s.success) {
      throw new Error(`Failed to build ${options.buildTarget}`);
    }
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

  class File {
    constructor(
      private currentContent: string,
      private currentHash: string | undefined,
      private currentName: string,
    ) {}

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

    rename(files: File[]) {
      if (!this.currentHash) {
        return;
      }
      numOfFileRenames++;
      const oldName = this.currentName;
      const newHash = this.calculateActualHash();
      this.currentName = this.currentName.replace(this.currentHash, newHash);
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
  const hashRegex = /-([A-Za-f0-9]{8})\.(js|css)$/;
  const files = readdirSync(folder)
    .map((file) => {
      const match = hashRegex.exec(file);
      if (file !== 'index.html' && !match) {
        return null;
      }
      const oldHash = match?.[1];
      const content = readFileSync(`${folder}/${file}`, { encoding: 'utf-8' });
      unlinkSync(`${folder}/${file}`);
      return new File(content, oldHash, file);
    })
    .filter((x) => !!x);

  // sort files by number of least dependencies
  function createSorter() {
    function countDependencies(file: File) {
      return files.filter((dep) => file.content.includes(dep.name)).length;
    }
    const cache = Object.fromEntries(
      files.map((f) => [f.name, countDependencies(f)]),
    );
    return (a: File, b: File) => cache[a.name] - cache[b.name];
  }
  files.sort(createSorter());

  // rename files in file contents until all hashes are correct
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  while (true) {
    const i = files.findIndex((el) => !el.isCorrectlyHashed);
    if (i === -1) {
      break;
    }
    files[i].rename(files);
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
  const folder = `${options.outputPath}/browser`;
  readdirSync(folder).forEach((lang) => {
    if (statSync(`${folder}/${lang}`).isDirectory()) {
      fixFileHashes(`${folder}/${lang}`);

      const target = lang === 'en' ? 'index.html' : `index.${lang}.html`;
      moveFile(
        `${folder}/${lang}/index.html`,
        `${options.outputPath}/${target}`,
        (content) =>
          content.replace(
            /<base href="[^"]*">/,
            `<base href="${options.baseHref}">`,
          ),
      );

      readdirSync(`${folder}/${lang}`).forEach((file) => {
        moveFile(`${folder}/${lang}/${file}`, `${options.outputPath}/${file}`);
      });
      rmdirSync(`${folder}/${lang}`);
    }
  });
  rmdirSync(folder);

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
      `npx ngsw-config ${options.outputPath} ${buildTargetProjectRoot}/ngsw-config.json ${options.baseHref}`,
    );
  }
}

function cleanOutputPath(outputPath: string) {
  if (existsSync(outputPath)) {
    removeDirectoryRecursive(outputPath);
  }
}

async function assemble(
  options: ConsolidatedOptions,
  context: ExecutorContext,
) {
  cleanOutputPath(options.outputPath);
  await runAngularBuild(options, context);
  mergeAngularApps(options);
  recreateServiceWorkerConfig(context, options);
}

const run: PromiseExecutor<ExecutorSchema> = async (options, context) => {
  try {
    await assemble(consolidateOptions(options, context), context);
    return { success: true };
  } catch (error) {
    console.error((error as Error).message);
    return { success: false };
  }
};

export default run;
