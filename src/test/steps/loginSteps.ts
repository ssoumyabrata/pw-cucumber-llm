import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

//setDefaultTimeout(60 * 1000); // Set default timeout to 60 seconds

let username: string;

Given('User navigates to the application', async function () {
  await pageFixture.page.goto(process.env.BASE_URL); // Replace with your application URL
});

Given('User click on the login link', async function () {
  await pageFixture.page.click('text=Login');
});

When('User enter the username as {string}', async function (user: string) {
  username = user;
  await pageFixture.page.getByPlaceholder('username').fill(username);
});

When('User enter the password as {string}', async function (password: string) {
  await pageFixture.page.getByPlaceholder('password').fill(password);
});

When('User click on the login button', async function () {
  await pageFixture.page.locator('//span[text()="Login"]/..').click();
});

Then('Login should be success', async function () {
  const xpath = "//span[normalize-space(text())='" + username + "']";
  await pageFixture.page.waitForSelector(xpath, { timeout: 5000 });
  const isVisible = await pageFixture.page.isVisible(xpath);
  if (!isVisible) {
    throw new Error('Login was not successful');
  }
});


Then('Login should fail', async function () {
  const failureMessage = pageFixture.page.locator('//mat-card-title[normalize-space(text())="Logdin" ]');
  await expect(failureMessage).toBeVisible();
});

