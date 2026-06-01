import test, { expect } from "@playwright/test";

test("Validate API response againest UI ", async({request,page})=>{
    const reqRes= await request.get("https://api.demoblaze.com/entries",)
    const reqResJson= await reqRes.json();
    console.log(reqResJson.Items[0].title)
    
    // await expect( reqResJson.items[0].title);

    await page.goto("https://demoblaze.com/")
    await expect(page.getByRole('link', { name: 'Samsung galaxy s6' })).toHaveText(reqResJson.Items[0].title)

})