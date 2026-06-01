import  {test, expect } from "@playwright/test";
import dataBody from "../testData/putRequestBody.json"



test('PUT request 1',async({request})=>{
    for(const body of dataBody.data){
        const resPut=await request.put("https://restful-booker.herokuapp.com/booking/1",{
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data:body
    }
);
    const resPutJson= await resPut.json();
    console.log(resPutJson);

    await expect(resPut.status()).toBe(200);
    await expect(resPut.ok());
    await expect(resPutJson.firstname).toContain(body.firstname)
}})


import dataBody2 from "../testData/putRequestBody.json"

test('PUT request 01', async({request})=>{
       for (const body2 of dataBody2.data) {
        const resPut2= await request.put("https://restful-booker.herokuapp.com/booking/1",{
           headers:{
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
           }, 
           data: body2
        })
        const resPutJson2= await resPut2.json();
        console.log(resPutJson2)

         expect(resPut2.status()).toBe(200)
        expect(resPut2.ok()).toBeTruthy();
        expect(resPutJson2.firstname).toContain(body2.firstname);
        expect(resPutJson2.lastname).toContain(body2.lastname);
        expect(resPutJson2.totalprice).toBe(body2.totalprice);
       }
  


})