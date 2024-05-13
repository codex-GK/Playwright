const { test, expect } = require("@playwright/test");
test("@Functional childWindowHandling", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const blinkLink = page.locator(".blinkingText");
  //when working on new tab-->on the context we are opening another page
  //newPAge is for child window, page is for parent window i,e newPage.locator & page.locator
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    blinkLink.click(),
  ]);
  const text = await newPage.locator(".red").textContent();
  console.log(text);
  //copy the text and use it in the parent window

  const emaill = text.split("@");
  const domain = emaill[1].split(" ")[0];
  console.log(domain);
  //.type() method is used for input text, it doesnot return a text value using textcontent().
  const username = await page.locator("#username").type(domain);
  //console.log(await page.locator("#username").textContent());
  //console.log((username));

  await page.pause();
});

test("test", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.goto("https://development.d2gprfvxoupf38.amplifyapp.com/login/");
  await page.getByPlaceholder("Email or username").click();
  await page
    .getByPlaceholder("Email or username")
    .fill("savari.john+gbvt1@vogappdevelopers.com");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("Test@123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "Yes, That Was Me" }).click();
  await page
    .getByRole("button", { name: "Manage General Information" })
    .click();
  await page
    .getByLabel(
      "I have read and agree to the Terms & Conditions for Your Private Account"
    )
    .check();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.locator("#open-name-input").getByText("incomplete").click();
  await page.getByPlaceholder("First name").fill("rgd");
  await page.getByPlaceholder("Last name").click();
  await page.getByPlaceholder("Last name").fill("tyrt");
  await page.getByRole("button", { name: "Skip" }).click();
});
