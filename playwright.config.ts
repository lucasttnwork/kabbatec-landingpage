import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 60_000,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Configuração de reporters
  reporter: [
    ["line"],
    ["json", { outputFile: "test-results/results.json" }],
    ["html", { open: "never" }],
    ["junit", { outputFile: "test-results/junit.xml" }]
  ],

  use: {
    baseURL: "http://localhost:3000",
    headless: true,
    trace: process.env.CI ? "off" : "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  // Configuração do servidor web para testes
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },

  // Configurações específicas para testes avançados
  projects: [
    // Configuração padrão para testes rápidos
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    // Configuração específica para testes cross-browser
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },

    // Configuração para testes mobile
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 5"] },
    },

    {
      name: "mobile-safari",
      use: { ...devices["iPhone 12"] },
    },

    // Configuração específica para testes de performance
    {
      name: "performance",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: {
          args: [
            "--disable-web-security",
            "--disable-features=VizDisplayCompositor",
            "--no-sandbox",
            "--disable-dev-shm-usage"
          ]
        }
      },
      testMatch: "**/performance-budgets.spec.ts"
    },

    // Configuração específica para testes de acessibilidade
    {
      name: "accessibility",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: {
          args: [
            "--disable-web-security",
            "--no-sandbox"
          ]
        }
      },
      testMatch: "**/accessibility.spec.ts"
    },

    // Configuração específica para testes lighthouse
    {
      name: "lighthouse",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: {
          args: [
            "--remote-debugging-port=9222",
            "--no-sandbox",
            "--disable-dev-shm-usage",
            "--disable-gpu"
          ]
        }
      },
      testMatch: "**/lighthouse.spec.ts"
    }
  ],

  // Configurações globais
  expect: {
    timeout: 10000,
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.05,
    },
  },

  // Configuração de output
  outputDir: "test-results/",

  // Configuração de screenshots
  snapshotDir: "tests/snapshots",

  // Configuração para CI
  ...(process.env.CI && {
    workers: 2,
    retries: 1,
    use: {
      trace: "off",
      screenshot: "off",
      video: "off",
    }
  })
});


