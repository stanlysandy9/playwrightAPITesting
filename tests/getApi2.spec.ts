import {test, request } from "@playwright/test";



//Type 01: using newContext request  
test("get API request verification", async ()=>{
     const reqContext=await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com", 
        extraHTTPHeaders: {
            Accept: "application/json"
        }
     })
const reqRes =await reqContext.get("/booking");
console.log(await reqRes.json());
})