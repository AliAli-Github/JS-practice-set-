// Execution Context is an imagnory container that holds functions, variables and lexical enviromnent. each time a function is called execution context is created.

// function abc() {
//     let a = 12;
//     def();
//     function def() {
//         let b = 13;
//         console.log(b);
//     };
// };

// abc();

// Lexical environment ya decide karta ha ka ap ka function kin variables or functions ko access kar saktha ha or kin ko nahi.

// refernece values are copied using spread operator.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr2 = [...arr];
// arr2.pop();
// console.log(arr, arr2);

// let obj = {
//     name: "ali"
// };
// let obj2 = { ...obj };
// delete obj2.name;
// console.log(obj, obj2);


// let abc = function (a, b) {
//     console.log(a + b);
// }
// abc(10, 23);

// Truthy and falsy javascript ma ap koi bhi value likhta ho woh ya tu truty value hoti ha ya falsy value hoti ha basically ya boolean form of value hoti ha ka value evluate hona ka bad true ho gi ya false.

// Switch is similar to if-else statement it execute a specific block of code that satisfy a particula codition.

// let beverages = prompt("Enter your drink").toLowerCase();
// switch (beverages) {
//     case "cocacola":
//         console.log(beverages, "Rs 240/.");
//         break;
//     case "pepsi":
//         console.log(beverages, "Rs 190/.");
//         break;
//     case "soda":
//         let flavour = prompt("Which flavour do you want?");
//         if (flavour == "apple") {
//             console.log(flavour, "Rs 180/.");
//         }
//         else if (flavour == "choclate") {
//             console.log(flavour, "Rs 130/.");
//         }
//         else {
//             console.log("flavour not available. 😟");
//         }
//         break;
//     default:
//         console.log("drink is unavailable.");
// };

// for-in loop is used for looping objects.

// let PC = {
//     name: "DELL CO.",
//     processor: "Intel core i3 3rd generation",
//     ram: "4GB",
//     strorage: "410GB",
//     speaker: true,
//     driver: true
// };
// for (const key in PC) {
//     console.log(`${key}: ${PC[key]}`);
// };

// First class functions
// Javascript ma ap functions ko variables ki tarah treat kar sakta ho or un ko as an argument bhi pas kar sakta ho aisa functions lo first class functions kaha jata ha.
// Example 1
// let a = function () {
//     // Statement 1
//     // Statement 2
//     // Statement 3
//     console.log("hello");
// };
// a();
// in this example variable a is treated as function.

// function abc(a) {
//     a();
// }
// abc(function () {
//     console.log(true);
// });

// higher order functions accept function in a parameter or return a functuion or both.
// for example forEach() always accepts function in a paramenter so it is higher order function.
// function abc(a) {
//     console.log("function abc() is a higher order function.");
//     a();
// };
// abc(function () {
//     console.log("this is saved in parameter a");
// });

// Constructor functions are used when you want to create multiple elements of similar characteristics. on the other hand constructor function is a way to define object with properties and methods.

// function persons(identity, age) {
//     this.name = identity;
//     this.age = age;
// }

// let user1 = new persons("ali", 17,);
// let user2 = new persons("abubakar", 18);
// let user3 = new persons("sajawal", 19);
// let user4 = new persons("zain", 20);
// let user5 = new persons("zohaib", 22);

// console.log(user1, user2, user3, user4, user5);

// Immediately invoked function expressions are immediately called as it is created. this is used to create private variables.

// let iife = (function () {
//     let id = 10001;
//     let password = "******";
//     return {
//         getter: () => {
//             console.log(id, password);
//         },
//         setter: (newId, newPass) => {
//             id = newId;
//             password = newPass;
//         }
//     }
// })();


