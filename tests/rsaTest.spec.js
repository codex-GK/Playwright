const { test, expect } = require("@playwright/test");
test("@Smoke browserContextPlayWrightTest", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const username = page.locator("#username");
  const password = page.locator("#password");
  const signin = page.locator("#signInBtn");
  const cardtitles = page.locator(".card-title a");
  //await page.locator("#username").fill("rahulshettyacademy");
  //await page.locator("#password").fill("learnings");
  await username.type("rahulshettyacademy");
  await password.fill("learnings");
  await signin.click();
  //password.fill("");
  //password.fill("learning");
  //await page.locator("#signInBtn").click();

  //to extract the text we use textcontent method
  console.log(await page.locator("[style*='block']").textContent());

  //adding assertion, if it is true execute if false fail the script
  await expect(page.locator("[style*='none']")).toContainText(
    "Incorrect username/password."
  );
  await password.click();
  await password.fill("");
  await password.fill("learning");
  await signin.click();
  console.log(await cardtitles.nth(0).textContent());
  console.log(await cardtitles.allTextContents());
  console.log("Testing");
  console.log("Testing-1");
  console.log("Testing-2..");

  await page.pause();
});
