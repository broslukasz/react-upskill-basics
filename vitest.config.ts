import { defineConfig } from 'vitest/config';

export default defineConfig(() => ({
  resolve: {
    conditions: [],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts'],
  },
}));
