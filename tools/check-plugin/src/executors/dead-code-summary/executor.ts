import { PromiseExecutor } from '@nx/devkit';
import { globSync, readFileSync } from 'fs';
import { basename } from 'path';

import { ExportReport, ImportReport } from '../dead-code/executor';
import { ExecutorSchema } from './schema';

// eslint-disable-next-line @typescript-eslint/require-await
const run: PromiseExecutor<ExecutorSchema> = async () => {
  try {
    console.log('Running dead code summary');

    const { exportFiles, importFiles } = globSync(
      `dist/{apps,libs}/*/dead-code/{exports,imports}.json`,
    )
      .map((file) => file)
      .reduce(
        (acc, file) => {
          const fileBaseName = basename(file, '.json');
          console.log('found', file);
          if (fileBaseName.endsWith('exports')) {
            acc.exportFiles.push(file);
          } else {
            acc.importFiles.push(file);
          }
          return acc;
        },
        { importFiles: [] as string[], exportFiles: [] as string[] },
      );

    const exports = exportFiles.reduce<ExportReport>((acc, file) => {
      const content = JSON.parse(
        readFileSync(file, { encoding: 'utf-8' }),
      ) as ExportReport;
      return { ...acc, ...content };
    }, {});

    const imports = importFiles.reduce<ImportReport>((acc, file) => {
      const content = JSON.parse(
        readFileSync(file, { encoding: 'utf-8' }),
      ) as ImportReport;
      Object.entries(content).forEach(([key, value]) => {
        acc[key] = [...(acc[key] ?? []), ...value].filter(
          (v, i, a) => a.indexOf(v) === i,
        );
      });
      return acc;
    }, {});

    Object.entries(imports).forEach(([mod, names]) => {
      names.forEach((name) => {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (exports[mod][name] !== undefined) {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete exports[mod][name];
        }
      });
    });

    let errors = 0;
    Object.entries(exports).forEach(([mod, names]) => {
      Object.entries(names).forEach(([name, entry]) => {
        console.warn(
          '%s \x1b[31m%s %s\x1b[0m',
          `${entry.path}:${entry.line.toString()}`,
          `${entry.type} ${name}`,
          `is exported from ${mod}, but never imported anywhere`,
        );
        errors++;
      });
    });

    if (errors > 0) {
      console.log(`Found dead code`);
    }
    return { success: errors === 0 };
  } catch (error) {
    console.error((error as Error).message);
    return { success: false };
  }
};

export default run;
