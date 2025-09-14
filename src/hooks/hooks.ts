import {BeforeAll, Before, After, AfterAll } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function() {
//  browser = await chromium.launch({ headless: false, slowMo: 500 });
  getEnv();
  browser = await invokeBrowser();
});

Before(async function() {
  context = await browser.newContext();
  const page = await context.newPage();
  pageFixture.page = page;
});

After(async function({pickle}) {
  const img = await pageFixture.page.screenshot({ path: `./reports/screenshot/${pickle.name}-${Date.now()}.png`, fullPage: true });
  await this.attach(img, 'image/png');

  await pageFixture.page.close();
  await context.close();
});

AfterAll(async function() {
  await browser.close();
});