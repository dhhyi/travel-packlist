import { ExecutorContext, PromiseExecutor } from '@nx/devkit';
import { execSync } from 'child_process';
import { readFileSync, writeFileSync, globSync, existsSync } from 'fs';
import { dirname, normalize, relative } from 'path/posix';

import { ExecutorSchema } from './schema';

interface TsConfig {
  extends?: string;
  references?: { path: string }[];
  angularCompilerOptions?: unknown;
  include?: string[];
  files?: string[];
  exclude?: string[];
  compilerOptions?: Record<string, unknown>;
  [key: string]: unknown;
}

class Context {
  unfixableErrors = 0;
  fixableErrors = 0;
  readonly projectRoot: string;
  readonly tsConfigs: string[];

  constructor(
    public readonly options: ExecutorSchema,
    public readonly context: ExecutorContext,
  ) {
    this.projectRoot =
      context.projectsConfigurations.projects[context.projectName!].root;

    this.tsConfigs = globSync(options.pattern);
  }

  allConfigs(): Iterator<string> {
    const main = this.tsConfigs.find(
      (path) =>
        path === this.projectRoot + '/tsconfig.json' ||
        path.endsWith('tsconfig.base.json'),
    );
    if (!main) {
      throw new Error('Could not find main tsconfig');
    }
    const other = this.tsConfigs.filter((path) => path !== main);
    return [main, ...other][Symbol.iterator]();
  }

  readConfig(path: string): TsConfig {
    return JSON.parse(readFileSync(path, { encoding: 'utf-8' })) as TsConfig;
  }

  findEmptyObjectsOrArrays(this: Context, obj: Record<string, unknown>) {
    /* eslint-disable @typescript-eslint/no-dynamic-delete */
    for (const [key, value] of Object.entries(obj)) {
      if (Array.isArray(value) && value.length === 0) {
        console.error('found empty array:', key);
        this.fixableErrors++;
        if (this.options.fix) {
          delete obj[key];
        }
      } else if (typeof value === 'object') {
        if (Object.keys(value!).length === 0) {
          console.error('found empty object:', key);
          this.fixableErrors++;
          if (this.options.fix) {
            delete obj[key];
          }
        } else {
          this.findEmptyObjectsOrArrays.call(
            this,
            value as Record<string, unknown>,
          );
        }
      }
    }
    /* eslint-enable @typescript-eslint/no-dynamic-delete */
  }
}

function checkBase(this: Context, tsConfigPath: string) {
  console.log('Checking', tsConfigPath);
  const tsConfig = this.readConfig(tsConfigPath);

  if (tsConfig.files) {
    console.error('tsconfig.base.json should not have files');
    this.fixableErrors++;
    delete tsConfig.files;
  }

  if (tsConfig.include) {
    console.error('tsconfig.base.json should not have include');
    this.fixableErrors++;
    delete tsConfig.include;
  }

  if (tsConfig.extends) {
    console.error('tsconfig.base.json should not extend another tsconfig');
    this.fixableErrors++;
    delete tsConfig.extends;
  }

  return tsConfig;
}

function check(this: Context, tsConfigPath: string) {
  console.log('Checking', tsConfigPath);

  const tsConfig = this.readConfig(tsConfigPath);

  if (tsConfig.extends && tsConfig.angularCompilerOptions) {
    console.error(
      'tsconfig should not redeclare angularCompilerOptions when extending another tsconfig',
    );
    this.fixableErrors++;
    delete tsConfig.angularCompilerOptions;
  }

  if (tsConfig.references) {
    if (tsConfig.exclude) {
      console.error('this tsconfig should not have exclude');
      this.fixableErrors++;
      delete tsConfig.exclude;
    }
    if (!Array.isArray(tsConfig.files) || tsConfig.files.length > 0) {
      console.error('this tsconfig should have files set to empty array');
      this.fixableErrors++;
      tsConfig.files = [];
    }
    if (!Array.isArray(tsConfig.include) || tsConfig.include.length > 0) {
      console.error('this tsconfig should have include set to empty array');
      this.fixableErrors++;
      tsConfig.include = [];
    }
  }

  if (tsConfig.references) {
    for (const ref of tsConfig.references) {
      const refPath = this.projectRoot + '/' + ref.path;
      if (!existsSync(refPath)) {
        console.error('tsconfig reference does not exist:', refPath);
        this.unfixableErrors++;
      }
    }
  }

  if (!tsConfigPath.endsWith('/tsconfig.json')) {
    const relativeRoot =
      relative(dirname(tsConfigPath), this.projectRoot) || '.';
    if (tsConfig.extends !== relativeRoot + '/tsconfig.json') {
      console.error('tsconfig should extend ./tsconfig.json');
      this.fixableErrors++;
      tsConfig.extends = relativeRoot + '/tsconfig.json';
    }
  }

  for (const key of ['files', 'include', 'exclude'] as const) {
    if (tsConfig[key]) {
      for (let idx = tsConfig[key].length - 1; idx >= 0; idx--) {
        const pattern = tsConfig[key][idx];
        const files = globSync(pattern, { cwd: dirname(tsConfigPath) });
        if (files.length === 0) {
          console.error('pattern does not match any files:', pattern);
          this.fixableErrors++;
          tsConfig[key].splice(idx, 1);
        }
      }
      if (
        tsConfig[key].length === 0 &&
        tsConfigPath !== this.projectRoot + '/tsconfig.json'
      ) {
        console.error(key, 'should not be empty');
        this.fixableErrors++;
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete tsConfig[key];
      }
    }
  }

  if (tsConfig.extends) {
    const extendsPath = normalize(
      this.projectRoot +
        '/' +
        relative(this.projectRoot, dirname(tsConfigPath)) +
        '/' +
        tsConfig.extends,
    );
    console.log('Checking', extendsPath);

    const effectiveConfig = JSON.parse(
      execSync(`pnpm tsc --showConfig -p ${extendsPath}`, {
        encoding: 'utf-8',
      }),
    ) as TsConfig;

    function compareObjects(
      this: Context,
      effective: Record<string, unknown>,
      current: Record<string, unknown>,
    ) {
      // delete keys that are already present in the effective config
      for (const key of Object.keys(current)) {
        if (typeof current[key] === 'object' && !Array.isArray(current[key])) {
          compareObjects.call(
            this,
            effective[key] as Record<string, unknown>,
            current[key] as Record<string, unknown>,
          );
        } else {
          if (
            current[key] === effective[key] ||
            (typeof current[key] === 'string' &&
              typeof effective[key] === 'string' &&
              current[key].toLocaleLowerCase() ===
                effective[key].toLocaleLowerCase())
          ) {
            console.error('redundant key', key, 'with value', current[key]);
            this.fixableErrors++;
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete current[key];
          }
        }
      }
    }

    compareObjects.call(this, effectiveConfig, tsConfig);
  }

  if (tsConfig.compilerOptions) {
    this.findEmptyObjectsOrArrays.call(this, tsConfig.compilerOptions);
    if (Object.keys(tsConfig.compilerOptions).length === 0) {
      console.error('compilerOptions should not be empty');
      this.fixableErrors++;
      delete tsConfig.compilerOptions;
    }
  }

  return tsConfig;
}

// eslint-disable-next-line @typescript-eslint/require-await
const run: PromiseExecutor<ExecutorSchema> = async (options, context) => {
  try {
    const ctx = new Context(options, context);

    const configs = ctx.allConfigs();
    for (let item = configs.next(); !item.done; item = configs.next()) {
      const tsConfigPath = item.value;
      const tsConfig = tsConfigPath.endsWith('tsconfig.base.json')
        ? checkBase.call(ctx, tsConfigPath)
        : check.call(ctx, tsConfigPath);

      if (ctx.options.fix && ctx.fixableErrors > 0) {
        console.log('Fixing', tsConfigPath);
        writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2) + '\n');
        ctx.fixableErrors = 0;
      }
    }

    if (!options.fix && ctx.fixableErrors > 0) {
      console.error('Found', ctx.fixableErrors, 'auto-fixable errors');
    }
    if (ctx.unfixableErrors > 0) {
      console.error('Found', ctx.unfixableErrors, 'not auto-fixable errors');
    }

    const hasErrors = ctx.unfixableErrors === 0 && ctx.fixableErrors === 0;
    return { success: hasErrors };
  } catch (error) {
    console.error((error as Error).message);
    return { success: false };
  }
};

export default run;