function myAge(){
console.log(38)
};
myAge();

function myDetails(name, age){
console.log(`My name is ${name} and i am ${age} years old`);
}
myDetails("Saqib", 38);

//My city is Faisalabad

function address(city){
console.log(`My city is ${city}`);
}
address("Faisalabad");

//I am a UI/UX Designer

function work(profession){
    console.log(`I am a ${profession}`);
}
work('UI/UX Designer')

//My favorite color is Blue

function colorName (color){
console.log(`My favorite color is ${color}`);
}
colorName('Blue');

//My name is Saqib and I am from Saudia

function myIntro (name, country){
console.log(`My name is ${name} and I am from ${country}`);
}
myIntro("Saqib", "Saudia")

//This Laptop costs 50000 PKR

function laptop(cost){
console.log(`This Laptop costs ${cost} USD`);
}
laptop(500);

//My favorite food is Biryani

function food(favorite){
console.log(`My favorite food is ${favorite}`);
}
food("Biryani")

//I study JavaScript for 2 hours daily

function study(js){
console.log(`I study ${js} for 2 hours daily`);
}
study("JavaScript");

//Iqbal is 65 years old

function iqbalInfo(name, age){
console.log(`${name} is ${age} years old`);
}
iqbalInfo ("Iqbal", 65);

//The course name is JavaScript Basics

function course (name){
console.log(`The course name is ${name} Basics`);
}
course('JavaScript');

//I bought a Mobile for 300 USD

function mobile(price){
console.log(`I bought a Mobile for ${price}`);
}
mobile('300 USD');


//My name is Saqib, I am 38 years old and I live in Faisalabad
function myInfo(name, age, city){
console.log(`My name is ${name}, I am ${age} years old and I live in ${city}`);
}
myInfo("Saqib", 38, "Faisalabad")

//The sum is 15
function addNumber(num1,num2){
    console.log(`The sum is ${num1 + num2}`);
}
addNumber(10,5);

//The result is 24
function multiplyNumbers(num1, num2){
    console.log(`The result is ${num1 * num2}`); 
}
multiplyNumbers(6,4);

//Hello Saqib, Welcome to your office
function welcome(name){
console.log(`Hello ${name}, Welcome to your office`);
}
welcome("Saqib")

//The area is 50
function rectangleArea(num1, num2){
console.log(`The area is ${num1 * num2}`);
}
rectangleArea(10, 5);

//After 5 years, your age will be 43
function futureAge(num1, num2){
console.log(`After 5 years, your age will be ${num1 - num2}`);
}
futureAge(43,5);

//Iqbal got 85 marks
function studentMarks(name ,marks){
    console.log(`${name} got ${marks} marks`);
}
studentMarks("Iqbal", 85);

//The difference is 5
function difference(num1, num2){
    console.log(`The difference is ${num1 - num2}`);
}
difference(10,5);

//The result is 4
function result(num1,num2){
    console.log(`The result is ${num1 / num2}`);
}
result(20,5);

//My name is Saqib, I am 38 years old and I am a UI/UX Designer
function myFullIntro(name, age, profession){
console.log(`My name is ${name}, I am ${age} years old and I am a ${profession}`);
}
myFullIntro("Saqib", 38, "UI/UX Designer")

//The total price is 1500
function totalPrice(num1, num2){
    console.log(`The total price is ${num1 + num2}`); 
}
totalPrice(1000, 500);
//Today temperature is 35°C
function temperature(tem){
    console.log(`Today temperature is ${tem}`);
}
temperature(35);

//Saqib bought 3 books
function purchaseInfo(name, books){
    console.log(`${name} bought ${books}`);
}
purchaseInfo("Saqib","3 books")

function getAge(){
    return 38;
}
let age = getAge();
console.log(age);

/*function getName() {
}
let name = getName();

console.log(name);
*/
function getName(){
    return "Saqib";
}
let name = getName();
console.log(name);
