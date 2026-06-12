let person = {
    name: "Saqib",
    age: 30,
    city: "Faisalabad",
}
console.log(person);



let book = {
    title: "JavaScript",
    pages: 300,
    author: "Ahmad",
}
console.log(book);

let student = {
    name: "Saqib",
    age: 38,
    skills: ["HTML", "CSS", "JavaScript",]
}
console.log(student.skills[0]);

// let course = {
//   title: "Web Development",
//   duration: "3 Months",
//   topics: ["HTML", "CSS", "JavaScript", "React"]
// };

let course = {
    title: "Web Develoment",
    duration: "3 Months",
    topics: ["HTML", "CSS", "JavaScript", "React"]
}
delete course.title; //delete property
// console.log(course.title);
console.log(course.duration);
console.log(course.topics[3]);

// let restaurant = {
//   restaurantName: "Food Point",
//   location: "Faisalabad",
//   menuItems: ["Burger", "Pizza", "Biryani", "Karahi"]
// };

let restaurant = {
    restaurantName: "Food Point",
    location:"Faisalabad",
    menuItems: ["Burger", "Pizza", "Biryani", "Karahi"]
}
restaurant.price = 1500,// add new property
console.log(restaurant.restaurantName);
console.log(restaurant.location);
console.log(restaurant.menuItems[2]);
console.log(restaurant.price);


localStorage.setItem("Name", "Iqbal")


