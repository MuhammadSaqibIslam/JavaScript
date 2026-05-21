let a = 21;
let b = 66;
console.log(a + b);

let color = "red";

//Traffic light system

if (color === "red") {
    console.log("Stop!. Light is red");
}
if (color === "yellow") {
    console.log("Slow down. Light is yellow");
}
if (color === "green") {
    console.log("Go. Light is green");
}

/*
1️⃣ Weather System

Create a variable called weather

agar weather "sunny" ho
→ "Go Outside"
agar weather "rainy" ho
→ "Take Umbrella"
agar weather "cold" ho
→ "Wear Jacket"
*/

let weather = "sunny";
if (weather === "sunny") {
    console.log("Go Outside");
}
if (weather === "rainy") {
    console.log("Take Umbrella");
}
if (weather === "cold") {
    console.log("Wear Jacket");
}

/*
2️⃣ Mobile Mode System

Create a variable called mobileMode

agar mode "ring" ho
→ "Sound ON"
agar mode "silent" ho
→ "Phone Silent"
agar mode "vibrate" ho
→ "Vibration ON"
*/

let mobileMode = "ring";
if (mobileMode === "ring") {
    console.log("Sound ON");
}
if (mobileMode === "silent") {
    console.log("Phone Silent");
}
if (mobileMode === "vibrate") {
    console.log("Vibration ON");
}

/*
3️⃣ Coffee Size System

Create a variable called coffeeSize

agar size "small" ho
→ "Small Coffee"
agar size "medium" ho
→ "Medium Coffee"
agar size "large" ho
→ "Large Coffee"
*/

let coffeeSize = "small";
if (coffeeSize === "small") {
    console.log("Small Coffee");
}
if (coffeeSize === "medium") {
    console.log("Medium Coffee");
}
if (coffeeSize === "large") {
    console.log("Large Coffee");
}

/*
1️⃣ Traffic Light System

Create a variable called lightColor

agar color "red" ho
→ "Stop"
warna agar color "yellow" ho
→ "Slow Down"
warna agar color "green" ho
→ "Go"
*/

let lightColor = "green";
if (lightColor === "red") {
    console.log("Stp[");
}
else if (lightColor === "yellow") {
    console.log("Slow Down");
}
else if (lightColor === "green") {
    console.log("Go");
}

/*
2️⃣ User Role System

Create a variable called userRole

agar role "admin" ho
→ "Full Access"
warna agar role "editor" ho
→ "Edit Access"
warna agar role "viewer" ho
→ "View Only"
*/

let userRole = "editor";
if (userRole === "admin") {
    console.log("Full Access");
}
else if (userRole === "editor") {
    console.log("Edit Access");
}
else if (userRole === "viewer") {
    console.log("View Only");
}

/*
3️⃣ Weather Alert System

Create a variable called weatherType

agar weather "storm" ho
→ "Stay Inside"
warna agar weather "rain" ho
→ "Carry Umbrella"
warna agar weather "sunny" ho
→ "Enjoy the Day"
*/

let weatherType = "sunny";
if (weatherType === "storm") {
    console.log("Stay Inside");
}
else if (weatherType === "rain") {
    console.log("Carry Umbrella");
}
else if (weatherType === "sunny") {
    console.log("Enjoy the Day");
}

/*4️⃣ Device Battery System

Create a variable called batteryStatus

agar status "low" ho
→ "Charge Device"
warna agar status "medium" ho
→ "Battery Normal"
warna agar status "full" ho
→ "Battery Full"
*/

let batteryStatus = "medium";
if (batteryStatus === "low") {
    console.log("Charge Device");
}
else if (batteryStatus === "medium") {
    console.log("Battery Normal");
}
else if (batteryStatus === "full") {
    console.log("Battery Full");
}

/*
5️⃣ Video Quality System

Create a variable called videoQuality

agar quality "144p" ho
→ "Low Quality"
warna agar quality "720p" ho
→ "HD Quality"
warna agar quality "1080p" ho
→ "Full HD"
*/

let videoQuality = "1080p";
if (videoQuality === "144p") {
    console.log("Low Quality");
}
else if (videoQuality === "720p") {
    console.log("HD Quality");
}
else if (videoQuality === "1080p") {
    console.log("Full HD");
}

let popcornSize = "l";
if (popcornSize === "xl") {
    console.log("Price is Rs. 250");
}
else if (popcornSize === "l") {
    console.log("Price is Rs. 200");
}
else if (popcornSize === "m") {
    console.log("Prise is Rs. 100");
}
else {
    console.log("Price is Rs. 50");
}

//Nested If / Else Practice

/*
1️⃣ Movie Ticket System

Create a variable called age
and another variable called hasTicket

agar age 18 ya zyada ho
phir check karo:
agar ticket ho
→ "Entry Allowed"
warna
→ "Buy Ticket First"
warna
→ "Under Age"
*/

let age = 23;
let hasTicket = true;
if (age >= 18) {
    if (hasTicket === true) {
        console.log("Entry Allowed");
    }
    else {
        console.log("Buy Ticket First");
    }
}
else {
    console.log("Under Age");
}

/*
2️⃣ Mobile Unlock System

Create a variable called phoneLocked
and another variable called enteredPassword

agar phone locked ho
phir check karo:
agar password "1234" ho
→ "Phone Unlocked"
warna
→ "Wrong Password"
warna
→ "Phone Already Open"
*/

let phoneLocked = false;
let enteredPassword = 1234;
if (phoneLocked === true) {
    if (enteredPassword = 1234) (
        console.log("Phone Unlocked")
    )
    else {
        console.log("Wrong Password");
    }
}
else {
    console.log("Phone Already Open");
}