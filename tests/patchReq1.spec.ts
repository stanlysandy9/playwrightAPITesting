import {test, expect } from "@playwright/test";
import patchData from "../testData/putRequestBody.json"


test ('PATCH request 1', async({request})=>{
    for (const data of patchData.data) {
        const resPatch= await request.patch("https://restful-booker.herokuapp.com/booking/1", {
            headers: {
                Authorization:"Basic YWRtaW46cGFzc3dvcmQxMjM="
            },
            data:{
              additionalneeds:  data.additionalneeds
            }
        })
            const resPatchJson= await resPatch.json();
            console.log(resPatchJson);

             expect(resPatch.status()).toBe(200);
            expect(resPatch.ok()).toBeTruthy();

        
    }
    

})