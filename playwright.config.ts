import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 60_000,
  retries: 0,
  reporter: [["line"]],
  use: {
    baseURL: "http://localhost:3000",
    headless: true,
    trace: "off",
  },
  webServer: {
    command: "npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});


