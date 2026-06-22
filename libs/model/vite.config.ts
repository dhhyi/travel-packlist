import { fileURLToPath } from 'node:url';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const tsconfigBase = fileURLToPath(
  new URL('../../tsconfig.base.json', import.meta.url),
);

export default defineConfig({
  plugins: [tsconfigPaths({ projects: [tsconfigBase] })],
  test: {
    environment: 'node',
    globals: true,
    include: ['src/**/*.test.ts'],
    reporters: ['default'],
  },
});
