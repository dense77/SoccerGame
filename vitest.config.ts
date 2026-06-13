import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'node',
      include: ['src/test/**/*.test.ts'],
      testTimeout: 15000,
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html'],
      },
    },
  }),
)
