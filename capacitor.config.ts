import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  android: {
    adjustMarginsForEdgeToEdge: 'force',
    path: 'dist/android',
  },
  appId: 'dev.dhhyi',
  appName: 'TravelPacklist',
  webDir: 'dist/web-android',
};

export default config;
