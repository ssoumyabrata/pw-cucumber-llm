const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "reports",
  reportPath: "reports/Custom Report",
  rerportName: "PW-CUCUMBER-LLM Report",
  pageTitle: "BookCart App Test Report",
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "140",
    },
    device: "CEI3341",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "PW-CUCUMBER-LLM" },
      { label: "Release", value: "1.0" },
      { label: "Cycle", value: "Smoke 1" },
    ],
  },
});