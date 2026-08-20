localStorage.setItem("name","Iqbal") //set value in localstorage
localStorage.setItem("age", 60)

let name =localStorage.getItem("name") // get value from localstroge
let age = localStorage.getItem("age")
console.log(name)
console.log(age)

localStorage.removeItem("age") // for remove item from localstroge

localStorage.clear() // remove all data from localstroge