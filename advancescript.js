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


