

//verification of POST Request 
//COmponents of Post request 
//*BaseURL + Resource 
//*Header (if reqired)
//*Body (Data)

import test, { expect } from "@playwright/test";


test('Post request verification', async({request})=>{
    const reqRes1= await request.post("/booking",{
        data:{
            "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
        }
    })

    //with assertions 
    const reqJsonRes=await  reqRes1.json();
    console.log(reqJsonRes)
    expect(reqRes1.status()).toBe(200);
    expect(reqRes1.ok()).toBeTruthy();
    expect(reqRes1.statusText()).toBe('OK');
    expect(reqJsonRes.booking.firstname).toBe('Jim');
    console.log(reqRes1.headers())
    expect(reqRes1.headers()['content-type']).toMatch(/application\/json/);
    expect(reqJsonRes.bookingid).toBeDefined();


})