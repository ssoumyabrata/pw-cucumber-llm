# Playwright + Cucumber + LLM Automation Framework

This project is an end-to-end test automation framework using [Playwright](https://playwright.dev/), [Cucumber.js](https://cucumber.io/), and TypeScript. It supports running tests in Chromium, Chrome, Firefox, and WebKit browsers, with environment-based configuration and reporting.

## Features
- **Playwright** for browser automation
- **Cucumber.js** for BDD-style feature files
- **TypeScript** for type safety
- **Multi-browser support**: Chromium, Chrome, Firefox, WebKit
- **Environment variable configuration**
- **Custom reporting** (HTML, screenshots)
- **Parallel execution**

## Project Structure
```
├── src/
│   ├── helper/
│   │   ├── browsers/
│   │   │   └── browserManager.ts
│   │   ├── env/
│   │   │   └── env.ts
│   │   └── types/
│   │       └── env.d.ts
│   ├── hooks/
│   │   ├── hooks.ts
│   │   └── pageFixture.ts
│   └── test/
│       └── steps/
│           └── loginSteps.ts
├── reports/
├── playwright-report/
├── package.json
├── tsconfig.json
└── cucumber.json
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Install Dependencies
```sh
npm install
```

### Environment Variables
Set these in your shell or a `.env` file:
- `BROWSER`: `chromium` | `firefox` | `webkit` | `chrome` (for real Chrome)
- `BASE_URL`: The base URL of your application
- `HEAD`: `true` or `false` (headless mode)
- `ENV`: `dev` | `prod` | `staging`

Example (PowerShell):
```sh
$env:BROWSER="chromium"; $env:BASE_URL="http://localhost:3000"; npm test
```

### Running Tests
```sh
npm test
```

### Reports
- HTML and screenshot reports are generated in the `reports/` and `playwright-report/` folders.

## Customization
- Update `src/helper/browsers/browserManager.ts` to change browser launch options.
- Add new step definitions in `src/test/steps/`.
- Add new hooks in `src/hooks/`.

## Troubleshooting
- Ensure all required environment variables are set.
- If you see `Unsupported browser type: undefined`, set `BROWSER` to a valid value.
- For Windows, do not use `true`/`false` as shell commands; use them only as string values for env vars.

## License
MIT
