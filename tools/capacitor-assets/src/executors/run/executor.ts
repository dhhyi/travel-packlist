import { Executor } from '@nx/devkit';
import { execSync } from 'child_process';
import {
  existsSync,
  readdirSync,
  readFileSync,
  rmdirSync,
  statSync,
  unlinkSync,
  writeFileSync,
} from 'fs';

import { ExecutorSchema } from './schema';

// eslint-disable-next-line @typescript-eslint/require-await
const runExecutor: Executor<ExecutorSchema> = async (options) => {
  const capacitorAssetsCommand = ['npx', '@capacitor/assets', 'generate'];

  if (options.lightColor) {
    const lightColor = options.lightColor;
    capacitorAssetsCommand.push(
      `--iconBackgroundColor=${lightColor}`,
      `--splashBackgroundColor=${lightColor}`,
    );
  }

  if (options.darkColor) {
    const darkColor = options.darkColor;
    capacitorAssetsCommand.push(
      `--iconBackgroundColorDark=${darkColor}`,
      `--splashBackgroundColorDark=${darkColor}`,
    );
  }

  capacitorAssetsCommand.push(
    `--pwaManifestPath=${options.pwaManifestPath}`,
    `--assetPath=${options.assetPath}`,
    `--androidProject=${options.androidProject}`,
  );

  switch (options.type) {
    case 'pwa':
      capacitorAssetsCommand.push('--pwa');
      break;
    case 'android':
      capacitorAssetsCommand.push('--android');
      break;
    case 'all':
    default:
      break;
  }

  execSync(capacitorAssetsCommand.join(' '), { stdio: 'inherit' });

  const manifestPath = options.pwaManifestPath;
  const assetPath = options.assetPath;

  /**
   * @type {}
   */
  const manifest = JSON.parse(
    readFileSync(manifestPath, { encoding: 'utf-8' }),
  ) as {
    background_color: string;
    theme_color: string;
    icons: { src: string }[];
  };

  manifest.icons.forEach((icon) => {
    icon.src = icon.src.replace(/.*icons./, '');
  });
  if (options.lightColor) {
    manifest.background_color = options.lightColor;
    manifest.theme_color = options.lightColor;
  }
  if (options.darkColor) {
    manifest.theme_color = options.darkColor;
  }

  const newManifest = JSON.stringify(manifest, null, 2) + '\n';
  writeFileSync(manifestPath, newManifest, { encoding: 'utf-8' });

  if (existsSync('icons') && statSync('icons').isDirectory()) {
    readdirSync('icons').forEach((file) => {
      writeFileSync(`${assetPath}/${file}`, readFileSync(`icons/${file}`));
      unlinkSync(`icons/${file}`);
    });
    rmdirSync('icons');
  }

  return {
    success: true,
  };
};

export default runExecutor;
