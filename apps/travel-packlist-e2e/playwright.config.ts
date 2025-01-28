import { workspaceRoot } from '@nx/devkit';
import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig, devices } from '@playwright/test';

// For CI, you may want to set BASE_URL to the deployed application.
const baseURL = process.env['BASE_URL'] ?? 'http://localhost:4200';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 8'],
        hasTouch: true,
        viewport: { height: 640, width: 360 },
      },
    },
  ],
  reporter: [['html', { host: '0.0.0.0', outputFolder: 'dist/e2e' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL,
    storageState: require.resolve('./src/test-state.json'),
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'pnpm exec nx run travel-packlist:serve',
    cwd: workspaceRoot,
    reuseExistingServer: !process.env.CI,
    url: 'http://localhost:4200',
  },
});
