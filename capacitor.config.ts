import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  android: {
    path: 'dist/android',
  },
  appId: 'dev.dhhyi',
  appName: 'TravelPacklist',
  plugins: {
    SystemBars: {
      hidden: false,
      insetsHandling: 'css',
    },
  },
  webDir: 'dist/web-android',
};

export default config;
