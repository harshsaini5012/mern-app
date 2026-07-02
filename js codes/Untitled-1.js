// const sum =(a, b) => {
// console.log(a + b);
// console.log("multi line function");

//const { useCallback } = require("react")

//}
//sum (5, 10)

//synchronous code : code that executes line by line
//console.log("task 1");
//console.log("task 2");
//console.log("task 3");

//asynchronous code  it is used to:
//1. establish the connection
//2. read the file
//3. connecting to the server or database

//function task1() {
//setTimeout(() => {
//      console.log("task 1 completed")
// }, 3000)
//}
//function task2() {
// setTimeout(() => {
//   console.log("task 2 completed")
//  }, 1000)
//}
//function task3() {
//  setTimeout(() => {
//    console.log("task 3 completed")
//}, 500)
//}
//function task1() {
//    console.log(" find the file")
//}
//function task2() {
//   console.log("open it ")
//}
//function task3() {
//   console.log("read and summarize the data")
//}

//task1()
//task2(),
//task3()

// call back=> it is used to handle asynchronous codes .when a function is done it calls another function
//callback is just passing a function into another argument function as a argument
//call=> task1(task2)
//pass=> task2

// function task1(callback) {
//  setTimeout(() => {
//         console.log("task 1 completed")
//         callback()
//     }, 3000)
// }
// function task2(callback) {
//     setTimeout(() => {
//         console.log("task 2 completed")
//         callback()

//     }, 1000)
// }
// function task3(callback) {
//     setTimeout(() => {
//         console.log("task 3 completed")
//         callback()
//     }, 500)
// }
// //arrow function
// task1(() => {
//     task2(() => {
//         task3(() => {
//             console.log("All DONE")
//         })
//     })
// })

//high order function
//1. forEach()
//syntax: arrayName.forEach((callback)
//const numbers = [1, 2, 3, 4, 5]
// function double(element) {
//     console.log(element * 2)
// }
//const triple=(element) => console.log(element * 3)
// numbers.forEach((element)=>{
//     console.log(element * 3)
// })
// numbers.forEach(triple)
// numbers.forEach((element) => {
//     console.log(Math.pow(element, 3))
// })
//2. map()
// const colours = ["red", "green", "blue"]
// colours.forEach((element) => {
//     console.log(element.toUpperCase())
// })

// const name = [1,2,3,4,5]

// function double(element) {
//     return element * 2;
// }
// const doubledNumbers = name.map(double)
// console.log(doubledNumbers)
//3. filter()

// const age = [25, 12, 35, 40, 45]
// function adult(element){
//     return element%2==0;
// }
// const adults = age.filter(adult)
// console.log(adults)

//4. reduce() => converting multiple elemnet into single value

// const price = [10, 20, 30, 40, 50]

// function total(element, accumulator){ // initially accumulator is 0
//     return element + accumulator
// }

// const totalPrice = price.reduce(total)
// console.log(totalPrice)

//destructuring => extracting the values from an array or object and assigning them to variables
// let x=10;
// let y=20;
// [x, y] = [y, x];
// console.log(x);
// console.log(y);

// const fruits = ["apple", "banana","mango", "cherry"];
// const [firstfruit, secondfruit,mango,cherry ] = fruits;
// console.log(firstfruit);

// const person = {
//   fullname: "Rajat",
//   age: 45,
//   isEmployed: true
// };
// const { fullname, age, isEmployed } = person;
// console.log(fullname);
// console.log(age);
// console.log(isEmployed);

//[fruits[0], fruits[3]] = [fruits[3], fruits[0]];

//console.log(fruits);
