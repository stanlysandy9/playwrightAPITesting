import test, { expect } from "@playwright/test";



test('get API verification with query parameters',async({request})=>{

const reqRes = await request.get("/booking", {
    params:{
        firstname: "Josh",
        lastname: "Allen"
            }})
console.log(await reqRes.json())
expect(reqRes.status()).toBe(200);
expect(reqRes.ok()).toBeTruthy();


})