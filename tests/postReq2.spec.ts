import  {test, expect }from "@playwright/test";
import { link } from "node:fs";


test('Post call request verification vs UI', async ({request, page})=>{
    const req1= await request.post("https://api.demoblaze.com/addtocart",{
        data:{
    "id": "4c26c664-1afe-e998-c086-3ab36385ab98",
    "cookie": "c3Rhbmx5TmltbWFrdXJpMTc4MDg5Mw==",
    "prod_id": 6,
    "flag": true
}
    });
        //const res1json = await req1.json();
        await expect(req1.status()).toBe(200);

        //UI Validtion 

        //App login
        await page.goto("https://www.demoblaze.com/index.html");
        await page.getByRole('link', {name: "Log in"}).click();
        await page.locator("#loginusername").fill("stanlyNimmakuri");
        await page.locator("#loginpassword").fill("43@Stan@43");
        await page.getByRole('button', {name: "Log in"}).click();

        await expect(page.getByRole('link', {name: "Welcome stanlyNimmakuri"})).toBeVisible;
        await page.getByRole('link', {name: "Cart"}).click();
        await expect(page.getByText('Sony xperia z5')).toBeVisible();



        

})