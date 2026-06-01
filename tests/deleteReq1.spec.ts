import {test, expect } from "@playwright/test";

test('delete request 1', async({request})=>{
    const resDelete= await request.delete('https://restful-booker.herokuapp.com/booking/9', {
        headers: {Authorization:"Basic YWRtaW46cGFzc3dvcmQxMjM="}
    })
    const resDeleteTest= await resDelete.text();
    console.log(resDeleteTest);
    expect(resDeleteTest).toContain("Created");

    

})
test('GET request after delete',async ({request,page})=>{
    
    await page.waitForTimeout(8000)
    const resGet= await request.get('https://restful-booker.herokuapp.com/booking/9')
    
    expect(resGet.status()).toBe(404)
})