import  { test, request } from "@playwright/test";


test("get Api verification", async ({request})=>{

    const reqRes= await request.get("/booking")
    console.log(await reqRes.json())
})  