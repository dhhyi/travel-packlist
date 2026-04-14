import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [nxViteTsPaths()],
  test: {
    environment: 'node',
    globals: true,
    include: ['src/**/*.test.ts'],
    reporters: ['default'],
    snapshotSerializers: [
      'src/test-serializers/mcp-result.ts',
      'src/test-serializers/text-content.ts',
      'src/test-serializers/single-item-array.ts',
    ],
  },
});
