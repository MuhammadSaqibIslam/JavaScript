let userName = ["Saqib", "Islam", "Muna", "Jiya", "Mian", "Jojo"]
let userAge = [38, 65, 11, 7, 5, 1.5]
console.log(userName);
console.log(userAge);
for (let i = 0; i < 6; i++)
    console.log(`${userName[i]} is ${userAge[i]} years old`);

/*
let studentName = ["Ahmed", "Usman", "Bilal", "Hamza"];
let studentMarks = [80, 75, 90, 85];
*/

let studentName = ["Ahmad", "Usman", "Bilal", "Hamza"];
let studentMarks = [80, 75, 90, 85];
console.log(studentName);
console.log(studentMarks);
for (let i = 0; i < 4; i++)
    console.log(`${studentName[i]} got ${studentMarks[i]} marks`);

/*
let cityName = ["Lahore", "Karachi", "Islamabad"];
let population = [13000000, 18000000, 1200000];
*/
let cityName = ["Lahore", "Karachi", "Islamabad"];
let population = [130000, 180000, 120000];
for (let i = 0; i < 3; i++)
    console.log(`${cityName[i]} has population ${population[i]}`);

/*
let bookName = ["Atomic Habits", "Deep Work", "Clean Code"];
let bookPages = [320, 280, 450];
*/
let bookName = ["Atomic Habits", "Deep Work", "Clean Code"];
let bookPages = [320, 280, 450];
for (let i = 0; i < 3; i++)
    console.log(`${bookName[i]} has ${bookPages[i]} pages`);

/*
let movieName = ["Inception", "Avatar", "Titanic"];
let movieRating = [9, 8, 7];
*/

let movieName = ["Inception", "Avatar", "Titanic"];
let movieRating = [9, 8, 7];
for (let i = 0; i < 3; i++)
    console.log(`${movieName[i]} has rating ${movieRating[i]}`);

/*
let userName = ["Ahmed", "Usman", "Bilal"];
let userAge = [20, 25, 22];
let userCity = ["Lahore", "Karachi", "Islamabad"];
*/
let userNameNew = ["Ahmad", "Usman", "Bilal"];
let userAgeNew = [20, 25, 22];
let userCity = ["Lahore", "KArachi", "Islamabad"];
for (let i = 0; i < 3; i++)
    console.log(`${userNameNew[i]} is ${userAgeNew[i]} years old and lives in ${userCity[i]}`);

/*
let courseTitle = ["Web Development", "UI/UX Design", "Graphic Design"];
let courseDuration = [6, 3, 4];
let courseFee = [25000, 15000, 12000];
*/

let courseTitle = ["Web Development", "UX/UI Design", "Graphic Design"];
let courseDuration = [6, 3, 4];
let courseFee = [25000, 15000, 12000];
for (let i = 0; i < 3; i++)
    console.log(`${courseTitle[i]} course duration is ${courseDuration[i]} months and fee is ${courseFee[i]}`);

/*
✅ 1. Array ki length nikalna
*/
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.length);

/*
✅ 2. Kisi specific item ko access karna
*/
let fruit = ["Orange", "Peach", "Gava"]
console.log(fruit[2]);

/*
✅ 3. Item add karna (push)
*/
let itemName = ["Keyboard", "Mouse", "LCD"];
itemName.push("Printer");
console.log(itemName);

/*
✅ 4. Item remove karna (pop)
*/
let sports = ["Cricket", "Football", "Basketball"];
sports.pop();
console.log(sports);

// let name = prompt("Saqib");
// console.log(name);


//length

// let userName = ["Saqib", "Islam", "Muna", "Jiya"];

// console.log(userName.length);

let ourName = ["Saqib", "Islam", "Muna", "Jiya"];
// console.log(ourName.length);
ourName.push("Mian")
// console.log(ourName);
ourName.pop();
console.log(ourName);
ourName.unshift("Hafiz");
console.log(ourName);
ourName.shift();
console.log(ourName);
ourName.sort();
console.log(ourName);





















