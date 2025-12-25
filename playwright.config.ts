import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['html', { open: 'never' }]],
  retries: 1,
  timeout: 60000,
  use: { headless: false }
});