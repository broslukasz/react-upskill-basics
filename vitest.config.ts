import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => ({
  resolve: {
    conditions: mode === 'test' ? ['browser'] : [],
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
  },
}));
