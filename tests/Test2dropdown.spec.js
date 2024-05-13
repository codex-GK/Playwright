const { test, expect } = require("@playwright/test");
test("@Smoke dropdowns", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const username = page.locator("#username");
  const password = page.locator("#password");
  const dropdown = page.locator("select.form-control");
  const radiobutton = page.locator(".radiotextsty").nth(1);
  const popup = page.locator("#okayBtn");

  await username.fill("rahulshettyacademy");
  await password.fill("learning");
  //for static dropdown we use "select option" method and its value name(consult) from the dropdown list
  await dropdown.selectOption("consult");
  await radiobutton.click();
  await expect(radiobutton).toBeChecked();
  await popup.click();
  //adding assertion using expect method.
  //we are adding assertion to check if the required radio button is selected
  //we are using "to be checked method" to check if the radio button is selected
  //To uncheck the check box we use uncheck() method. we dont have assertions for uncheck method

  //await page.pause();
});
