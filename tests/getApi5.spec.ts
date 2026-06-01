import {test } from "@playwright/test";

test("get api request with id (parameter)", async({request})=>{

    const reqRes= await request.get("/booking/230")
    console.log(await reqRes.json())
})