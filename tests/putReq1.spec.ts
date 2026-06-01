import test, { expect } from "@playwright/test";

test('PUT request 1',async({request})=>{
    const resPut=await request.put("https://restful-booker.herokuapp.com/booking/1",{
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data:{
    "firstname": "Stanly",
    "lastname": "Nimmakuri",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
    },
    "additionalneeds": "Lunch"
}
    });
    const resPutJson= await resPut.json();
    console.log(resPutJson);

    await expect(resPut.status()).toBe(200);
    await expect(resPut.ok());
    




})