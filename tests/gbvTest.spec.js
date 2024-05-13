const { test, expect } = require("@playwright/test");
test("@Functional gbv", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://development.d2gprfvxoupf38.amplifyapp.com/login");
  const email = page.locator("#login-email");
  const password = page.locator("#login-password");
  const login = page.locator("#login-submit");

  //await email.click();
  await email.fill("savari.john+gbvt1@vogappdevelopers.com");
  //await password.click();
  await password.fill("Test@123");
  await login.click();
  await page.locator("[type='submit']").click();
  console.log("hello");
  await page.pause();
});
