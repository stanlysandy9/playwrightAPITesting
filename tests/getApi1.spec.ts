import test from "@playwright/test";


//Type 01: using request fixture 
test("Get API verification", async ({request})=>{

 const getReq1= await request.get("https://restful-booker.herokuapp.com/booking",);
 
 console.log(await getReq1.json())



})