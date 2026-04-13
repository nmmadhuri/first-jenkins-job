import {test} from "@playwright/test";

test("Simple google test @wip", async ({page}) => {
    // test codes
    await page.goto("https://www.google.com");

    //await page.waitForTimeout(3000);

    let searchBox = page.locator("textarea[id='APjFqb']");

    // await searchBox.type("CYDEO");
    await searchBox.fill("CYDEO");

    await page.waitForTimeout(3000);

    await searchBox.press("Enter");

    //await page.waitForTimeout(3000);

});



//textarea[@class = 'gLFyf']

