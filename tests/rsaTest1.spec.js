const { test, expect } = require("@playwright/test");
test("@Web browserContextPlayWrightTest1", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/");

  const email = page.locator("#userEmail");
  //const phone = page.locator("#userMobile");
  const password = page.locator("#userPassword");
  const login = await page.locator("#login");
  const products = await page.locator(".card-body");
  const item = "iphone 13 pro";

  await email.click();
  await email.fill("brti1@gmail.com");
  //await phone.click();
  //await phone.fill("1234567845");
  await password.click();
  await password.type("Test@12345");
  await login.click();
  await page.locator(".card-body").first().waitFor();
  const count = await products.count();
  for (let i = 0; i < count; ++i) {
    if ((await products.nth(i).locator("b").textContent()) === item) {
      await products.nth(i).locator("text= Add To Cart").click();
      break;
    }
  }
  //const cart = await page.locator("[routerlink*='cart']").click();
  await page.locator("button[routerlink='/dashboard/cart']").click();
  //to check the element present in the cart from the entire list & identifying locator based on text with tag
  //const cartItems = await page.locator("div li");

  //expect (await page.locator("h3:has-text('iphone 13 pro')").isVisible()).toBeTruthy();
  //const bool = await page.locator("h3:has-text('iphone 13 pro')").isVisible();

  //expect(!bool).toBeTruthy();
  await page.locator("text=Checkout").click();

  const country = await page
    .locator("[placeholder*='Country']")
    .type("ind", { delay: 1000 });
  //await dropdown.waitFor();
  const dropdown = page.locator(".ta-results");
  await dropdown.waitFor();
  //const dropdownOptionsCount= await dropdown.locator("button").count();
  const dropdownOptionsCount = await page.locator(".ta-results button").count();
  //for(let i=0; i<dropdown.locator("button"); i++)
  for (let i = 0; i < dropdownOptionsCount; i++) {
    //await countryName.waitFor();
    //const countryName= await dropdown.locator("button").nth(i).textContent();
    const countryName = await page
      .locator(".ta-results button")
      .nth(i)
      .textContent();
    // countryName= await dropdownOptionsCount.nth(i).textContent();
    if (countryName === " India") {
      //if(countryName.includes("  India"))
      //await dropdown.locator("button").nth(i).click();
      await page.locator(".ta-results button").nth(i).click();

      //console.log("Country:" + text);
      break;
      //await page.locator("[class*='btnn']").click();
    }
  }
  await page.locator(".action__submit").click();
  await expect(page.locator(".hero-primary")).toHaveText(
    " Thankyou for the order. "
  );
  const orderID = await page
    .locator(".em-spacer-1 .ng-star-inserted")
    .textContent();
  console.log(orderID);
  await page.locator("button[routerlink='/dashboard/myorders']").click();
  await page.locator("table tbody").waitFor();

  const row = await page.locator("table tbody tr");
  for (let i = 0; i < (await row.count); i++) {
    const rowOrdrID = await row.nth(i).locator("tbody tr th").textContent();
    //const rowOrdrID= await row.nth(i).locator("th").textContent();
    // const rowOrdrID = await page.locator("tbody tr").nth(i).locator("th").textContent();
    //const rowOrdrID = await page.locator("tbody tr th").nth(i).textContent();
    await rowOrdrID.waitFor();
    if (orderID.includes(rowOrdrID)) {
      //await rowOrdrID.locator("tr td button").first.click();
      await row.nth(i).locator("tr td button").first.click();
      //await rowOrdrID.locator("button").first.click();
      //await row.nth(i).locator("button").first.click();
      break;
    }
  }

  await page.pause();
});
