import {test,request,APIRequestContext } from '@playwright/test'

//Type 01: using newContext request with beforeall hook

let reqContext2:APIRequestContext ;
test.beforeAll("before test",async()=>{

reqContext2 = await request.newContext({
    baseURL:"https://restful-booker.herokuapp.com",
    extraHTTPHeaders:{
        Accept: "application/json"
    }
})
})


test("Get api verification", async({})=>{

const reqRes= await reqContext2.get("/booking")
console.log(await reqRes.json())


})