//Condition
/*
1️⃣ Internet Speed System

Create a variable called internetSpeed

agar speed 100 ya zyada ho
→ "Fast Internet"
warna agar speed 50 ya zyada ho
→ "Normal Internet"
warna
→ "Slow Internet"
*/

let internetSpeed = 120;
if (internetSpeed > 100){
    console.log("Fast Internet");
}
else if(internetSpeed > 50){
    console.log("Normal Internet");
}
else{
    console.log("Slow Internet");
}

/*
2️⃣ Water Level System

Create a variable called waterLevel

agar water level 90 ya zyada ho
→ "Tank Full"
warna agar water level 50 ya zyada ho
→ "Tank Half"
warna
→ "Low Water"
*/

let waterLevel = 100;
if(waterLevel > 90){
    console.log("Tank Full");
}
else if(waterLevel > 50){
    console.log("Tank Half");
}
else{
    console.log("Low Water");
}

/*
3️⃣ Mobile Battery System

Create a variable called batteryPercent

agar battery 80 ya zyada ho
→ "Battery Full"
warna agar battery 40 ya zyada ho
→ "Battery Medium"
warna
→ "Charge Phone"
*/

let batteryPercent = 90;
if(batteryPercent > 80){
    console.log("Battery Full");
}
else if(batteryPercent > 40){
    console.log("Battery Medium");
}
else{
    console.log("Charge Phone");
}

/*
4️⃣ Exam Result System

Create a variable called studentScore

agar score 90 ya zyada ho
→ "Excellent"
warna agar score 60 ya zyada ho
→ "Good"
warna
→ "Needs Improvement"
*/

let studentScore = 100;
if(studentScore > 90){
    console.log("Excellent");
}
else if(studentScore > 60){
    console.log("Good");
}
else{
    console.log("Needs Improvement");
}

/*
5️⃣ Weather Temperature System

Create a variable called cityTemp

agar temperature 35 ya zyada ho
→ "Very Hot"
warna agar temperature 20 ya zyada ho
→ "Normal Weather"
warna
→ "Cold Weather"
*/

let cityTemp = 40;
if(cityTemp > 35){
    console.log("Very Hot");
}
else if(cityTemp > 20){
    console.log("Normal Weather");
}
else{
    console.log("Cold Weather");
}

/*
6️⃣ Laptop Storage System

Create a variable called storageSpace

agar storage 500 ya zyada ho
→ "Large Storage"
warna agar storage 200 ya zyada ho
→ "Medium Storage"
warna
→ "Low Storage"
*/

let storageSpace = 550;
if(storageSpace > 500){
    console.log("Large Storage");
}
else if(storageSpace > 200){
    console.log("Medium Storage");
}
else{
    console.log("Low Storage");
}

/*
7️⃣ Gaming FPS System

Create a variable called gameFPS

agar FPS 120 ya zyada ho
→ "Ultra Smooth"
warna agar FPS 60 ya zyada ho
→ "Smooth Gameplay"
warna
→ "Low Performance"
*/

let gameFPS = 150;
if(gameFPS > 120){
    console.log("Ultra Smooth");
}
else if(gameFPS > 60){
    console.log("Smooth Gameplay");
}
else{
    console.log("Low Performance");
}

/*
8️⃣ Air Conditioner System

Create a variable called roomTemperature

agar temperature 30 ya zyada ho
→ "AC High Cooling"
warna agar temperature 20 ya zyada ho
→ "Normal Cooling"
warna
→ "AC Off"
*/

let roomTemperature = 45;
if(roomTemperature > 30){
    console.log("AC High Cooling");
}
else if(roomTemperature > 20){
    console.log("Normal Cooling");
}
else{
    console.log("AC Off");
}

/*
9️⃣ Mobile Signal System

Create a variable called signalStrength

agar signal 90 ya zyada ho
→ "Strong Signal"
warna agar signal 50 ya zyada ho
→ "Average Signal"
warna
→ "Weak Signal"
*/

let signalStrength = 100;
if(signalStrength > 90){
    console.log("Strong Signal");
}
else if(signalStrength > 50){
    console.log("Average Signal");
}
else{
    console.log("Weak Signal");
}

//AND (&&) Operator Practice

/*
1️⃣ Movie Entry System

Create two variables:

age
hasTicket
agar age 18 ya zyada ho
AND
ticket available ho

→ "Entry Allowed"

warna
→ "Entry Denied"
*/

let age = 18;
let hasTicket = true;
if(age > 16 && hasTicket === true){
    console.log("Entry Alowed");
}
else{
    console.log("Entry Denied");
}

/*
2️⃣ Phone Unlock System

Create two variables:

phoneOn
correctPin
agar phone on ho
AND
pin correct ho

→ "Phone Unlocked"

warna
→ "Access Denied"
*/

let phoneOn = true;
let correctPin = 1234;
if(phoneOn === true && correctPin === 1234){
    console.log("Phone Unlocked");
}
else{
    console.log("Access Denied");
}

/*
3️⃣ Online Class System

Create two variables:

internetConnected
cameraEnabled
agar internet connected ho
AND
camera enabled ho

→ "Join Class"

warna
→ "Cannot Join"
*/

let internetConnected = true;
let cameraEnabled = true;
if(internetConnected === true && cameraEnabled === true){
    console.log("Join Class");
}
else{
    console.log("Cannot Join");
}

/*
4️⃣ ATM System

Create two variables:

cardInserted
pinMatched
agar card inserted ho
AND
pin matched ho

→ "Transaction Successful"

warna
→ "Transaction Failed"
*/

let cardInserted = true;
let pinMatched = true;
if(cardInserted === true && pinMatched){
    console.log("Transaction Successful");
}
else{
    console.log("Transaction Failed");
}

/*
5️⃣ Food Order System

Create two variables:

restaurantOpen
riderAvailable
agar restaurant open ho
AND
rider available ho

→ "Order Accepted"

warna
→ "Order Cancelled"
*/

let restaurantOpen = true;
let riderAvailable = false;
if(restaurantOpen === true && riderAvailable === true){
    console.log("Order Accepted");
}
else{
    console.log("Order Cancelled");
}

//OR (||) Operator Practice

/*
1️⃣ Weekend Plan System

Create two variables:

isSunday
isHoliday
agar Sunday ho
OR
holiday ho

→ "No Office"

warna
→ "Go to Work"
*/

let isSunday = true;
let isHoliday = false;
if(isSunday === true || isHoliday === false){
    console.log("No Office");
}
else{
    console.log("Go to Work");
}

/*
2️⃣ Login Method System

Create two variables:

emailCorrect
phoneCorrect
agar email correct ho
OR
phone correct ho

→ "Login Successful"

warna
→ "Login Failed"
*/

let emailCorrect = true;
let phoneCorrect = false;
if(emailCorrect === true || phoneCorrect === false){
    console.log("Login Successful");
}
else{
    console.log("Login Failed");
}

/*
3️⃣ Weather Alert System

Create two variables:

heavyRain
strongWind
agar heavy rain ho
OR
strong wind ho

→ "Stay Inside"

warna
→ "Weather Normal"
*/

let heavyRain = true;
let strongWind = true;
if(heavyRain === false || strongWind === false){
console.log("Stay Inside")
}
else{
console.log("Weather Normal");
}

/*
4️⃣ Gaming Access System

Create two variables:

premiumUser
specialPass
agar premium user ho
OR
special pass ho

→ "Access Granted"

warna
→ "Access Denied"
*/

let premiumUser = true;
let specialPass = false;
if(premiumUser === true || specialPass === false){
    console.log("Access Granted");
}
else{
    console.log("Access Denied");
}

/*
5️⃣ Online Payment System

Create two variables:

bankBalance
couponApplied
agar bank balance enough ho
OR
coupon applied ho

→ "Payment Successful"

warna
→ "Payment Failed"

*/

let bankBalance = false;
let couponApplied = true;
if(bankBalance === false || couponApplied === true){
    console.log("Payment Successful");
}
else{
    console.log("Payment Failed");
}