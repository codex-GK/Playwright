import { defineConfig } from "@playwright/test";
export default defineConfig({
  reporter:[['junit', { outputFile: 'test-results/e2e-junit-results.xml' }],
            ['html', { outputFolder: 'playwright-report', open: 'never' }]],
});