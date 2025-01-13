import {
  ExecutorContext,
  parseTargetString,
  PromiseExecutor,
  runExecutor,
} from '@nx/devkit';
import {
  getPackageJsonVersion,
  getVersionCode,
} from '@travel-packlist/versioning';
import { execSync } from 'child_process';
import { existsSync, writeFileSync } from 'fs';

import {
  moveFile,
  removeDirectoryRecursive,
  updateFile,
} from '../../file-operations';
import { ExecutorSchema } from './schema';

function cleanOutputPath(outputPath: string) {
  if (existsSync(outputPath)) {
    removeDirectoryRecursive(outputPath);
  }
}

async function buildAssembly(
  context: ExecutorContext,
  options: ExecutorSchema,
) {
  for await (const s of await runExecutor(
    parseTargetString(options.assemblyTask, context.projectGraph),
    {},
    context,
  )) {
    if (!s.success) {
      throw new Error('Error while running assembly task');
    }
  }
}

async function prepareAndroidProject(
  context: ExecutorContext,
  options: ExecutorSchema,
) {
  ['telemetry off', 'add android', 'sync'].forEach((command) => {
    execSync(`npx cap ${command}`, { stdio: 'inherit' });
  });

  for await (const s of await runExecutor(
    {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      project: context.projectName!,
      target: options.assetTask,
    },
    {},
    context,
  )) {
    if (!s.success) {
      throw new Error('Error while running asset task');
    }
  }

  const buildGradlePath = `${options.outputPath}/app/build.gradle`;
  if (!existsSync(buildGradlePath)) {
    throw new Error('app/build.gradle not found in the output path');
  }
  updateFile(buildGradlePath, (content) => {
    const versionName = getPackageJsonVersion();
    const versionCode = getVersionCode();
    return content
      .replace(/versionName ".*"/, `versionName "${versionName}"`)
      .replace(/versionCode \d+/, `versionCode ${versionCode.toString()}`);
  });
}

function buildAPK(options: ExecutorSchema) {
  console.log('Building APK...');

  const gradlew = process.platform === 'win32' ? 'gradlew.bat' : './gradlew';
  execSync(`${gradlew} --no-daemon -q assemble`, {
    stdio: 'inherit',
    cwd: options.outputPath,
  });

  const target = `${options.outputPath}/travel-packlist-debug.apk`;
  moveFile(
    `${options.outputPath}/app/build/outputs/apk/debug/app-debug.apk`,
    target,
  );
  console.log(`Generated APK: ${target}`);
}

function buildAAB(options: ExecutorSchema) {
  console.log('Building AAB...');

  if (!process.env.RELEASE_KEYSTORE) {
    throw new Error('RELEASE_KEYSTORE environment variable is not set');
  }
  if (!process.env.RELEASE_KEYSTORE_PASSWORD) {
    throw new Error(
      'RELEASE_KEYSTORE_PASSWORD environment variable is not set',
    );
  }
  if (!process.env.RELEASE_KEYSTORE_ALIAS) {
    throw new Error('RELEASE_KEYSTORE_ALIAS environment variable is not set');
  }
  if (!process.env.RELEASE_KEYSTORE_ALIAS_PASSWORD) {
    throw new Error(
      'RELEASE_KEYSTORE_ALIAS_PASSWORD environment variable is not set',
    );
  }

  writeFileSync(
    `${options.outputPath}/release.jks`,
    Buffer.from(process.env.RELEASE_KEYSTORE, 'base64'),
  );

  const command = [
    'npx cap build android',
    `--keystorepath "release.jks"`,
    `--keystorepass ${process.env.RELEASE_KEYSTORE_PASSWORD}`,
    `--keystorealias ${process.env.RELEASE_KEYSTORE_ALIAS}`,
    `--keystorealiaspass ${process.env.RELEASE_KEYSTORE_ALIAS_PASSWORD}`,
    '--androidreleasetype AAB',
  ];

  execSync(command.join(' '), { stdio: 'inherit' });

  const target = `${options.outputPath}/travel-packlist.aab`;
  moveFile(
    `${options.outputPath}/app/build/outputs/bundle/release/app-release-signed.aab`,
    target,
  );
  console.log(`Generated AAB: ${target}`);
}

async function android(options: ExecutorSchema, context: ExecutorContext) {
  cleanOutputPath(options.outputPath);

  await buildAssembly(context, options);
  await prepareAndroidProject(context, options);

  for (const bundle of options.bundles) {
    switch (bundle) {
      case 'APK':
        buildAPK(options);
        break;
      case 'AAB':
        buildAAB(options);
        break;
    }
  }
}

const run: PromiseExecutor<ExecutorSchema> = async (options, context) => {
  try {
    await android(options, context);
    return { success: true };
  } catch (error) {
    console.error((error as Error).message);
    return { success: false };
  }
};

export default run;