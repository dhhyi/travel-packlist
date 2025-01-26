import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  android: {
    path: 'dist/android',
  },
  appId: 'dev.dhhyi',
  appName: 'TravelPacklist',
  plugins: {
    SafeArea: {
      customColorsForSystemBars: false,
      enabled: true,
    },
  },
  webDir: 'dist/web-android',
};

export default config;
