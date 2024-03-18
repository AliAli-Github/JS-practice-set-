// Keywords
// The words which keeps some meaning in JS are called Keywords. keywords are reserved words and cannot be used as a variable name.

// variables and constants
// variables can change their value but constant does'nt
// variables are used in JS to store Data.

// Local variables are declared in a function or in a block.
// Global variables are made outside the function. they have a global scoped that means you can access them all over the code.

// let is a keyword in JS used to declare a variable
// for Exapmle :
// let name = "Ali Hussnian";

// const is also a keyword used to define a constant variable which means its value does'nt changed. an other keyword var is also used to declare a variable but the best practice is to go with let and const.

// To know the difference b/w them see GeeksforGeeks.

// Hoisting refers to a mechanism where every decalarations move to the top of their scope.

// Data Types in JS

// there are two data types in JS
// 1) Primitive Data Types
// 2) Reference Data Types

// JavaScript Operators

// Arithmetic operators

// +) Addition operator performs addition on two operands this operator is also used to concatenate strings.
// For Examlpe
// console.log(2 + 2);
// For Example
// console.log("ali " + "is " + "learning " + "JS");

// -) Substraction operator performs substraction on two operands.
// for Example
// console.log(5 - 4);

// *) Mutliplication operator performs multiplication on two operands.
// For Example
// console.log(2 * 3);

// /) Division operator performs division on two operands.
// For Example
// console.log(14 / 2);

// %) Modulus operator gives a remainder of an integer division.
// For Example
// console.log(14 % 2);

// **) Exponentiation operator gives the power of the first operator raised to the second operator
// For Example
// console.log(5 ** 2);
// 5 power 2 which means square of 5
// Another Example
// console.log(5 ** 5);

// two basic and useful tricks
// let no_1 = 2;
// let no_2 = "2";
// console.log(no_1 + +no_2);

// another
// let oper_1 = 12;
// let oper_2 = 3;
// console.log(-oper_1 + oper_2);


// Assignment Operators

// Comparison Operators
// ==) equality
// For Example:
// console.log(2 == 2);
// console.log(2 == "2");

// ===) Strict equality
// For Example
// console.log(2 === 2);
// console.log(2 === "2");

// !=) inequality
// console.log(2 != 3);

// !==) Strict inequality
// console.log(2 !== 3);
// console.log(2 !== "2");

// others are less then (<), greater then (>), less then-equal to (<=) and greater then-equal to (>=).

// Logical operators.

// logical and &&) it checks all the conditions if valid return true otherwise false.
// For Example
// {
//     let urdu = 100, eng = 100, math = 100, pst = 100;
//     if (urdu == 100 && eng == 100 && math == 100 && pst == 100) {
//         console.log(true);
//     } else {
//         console.log(false);
//     };
// }
// In above example if all subject is equal to 100 then the condition is true otherwise false.


// logical OR ||) it check the conditions if one of them is valid return true and if all conditions are invalid return false.

// {
//     let urdu = 100, eng = 70, math = 60, pst = 90;
//     if (urdu == 100 || eng == 100 || math == 100 || pst == 100) {
//         console.log(true);
//     } else {
//         console.log(false);
//     };
// }

// logical not !) it reverse the boolean result or the condition.
// For Example
// let type = false;
// console.log(!type);

// Ternary operator
// (5 > 6) ? console.log(true) : console.log(false);

// Increment and decrement operators.
// Pre Icrement
// let x = 5;
// let y = ++x;
// console.log(x);
// console.log(y);

// Post Increment
// let a = 3;
// let b = a++;
// console.log(b);
// console.log(a);

// Conditionals Statments In javaScript allow you to execute specific block of code based on conditions.

// if Statement
// if (condition) {
// statements;
// }
// For Example
// const age = 18;
// if (age >= 18) {
// console.log(age);
// }

// if-else Statment
// In if-else statement if the condition is true then if statement is executed otherwise else condition is execute.
// if (condition) {

// } else {

// }
// For Example
// const id = 1001, password = 12345;
// if (id == 1001 && password == 12345) {
//     console.log("Valid Id and Password ✔")
// } else {
//     console.log("Wrong Id or password ❌")
// }

// else if Statement
// Switch
// Ternary Operator

// Loops repeat the executaion of code again and again until the condition is false.

// for loop
// Decrement in value of x
// for (let x = 10; x >= 1; x--) {
//     console.log(x);
// }
// Increment in value of x
// for (let x = 1; x <= 10; x++) {
//     console.log(x);
// }

// do-While loop
// let a = 10;
// do {
//     console.log(a);
//     a--;
// } while (a >= 5);

// Functions are the collection of statements functions are used to perform specific task functions increases code reuseaibility functions are mainly defined for three purpose.
// 1) When you ececute the code in future.
// 2) When you want to repeat the code.
// 3) when you want to repeat the code with different data.

// Function statement
// function sum(num1, num2) {
//     console.log(num1 + num2);
// }
// sum(10, 20);

// Now we are going to study arrays

// arrays are the collection of multiple values
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// every array value has a specific index number you can access any value by calling index number the index number start from 0 and so on...

// console.log(arr[1]);
// we already knows some built-in functions in JS like alert() prompt() etc. similarly arrays has also some buil-in methods.

// we study push(), pop(), shift(), unshift().

// the Push() method add values at the end of an array
// arr.push(1, 23, 34, 56);

// the pop() method removes the last value of array
// arr.pop();

// the shift method removes the value form start of aan array and the unshift menthod add members ata the start of array.

// arr.unshift(1, 2, 4)
// arr.shift();

// Objects are the collection of properties and functions. objects are used to collect data of a specific identity.
// let obj = {}; //Blank Object
// here we have a camera we want to store all details of camera in our code so we make an object.
// const cameraDetails = {
//     brand: "A4tech",
//     color: "silver",
//     audio: true,
//     video: true,
//     photo: true,
//     rating: "8mp",
//     zoom: true,
//     arr: [1, 2, 3, 5]
// };
// Object.freeze(cameraDetails);

// arrays methods
// 1) includes method check the value in array if exist return true otherwise false.
// 2) indexof method find the index number of a value in array if the value is not exist it gives -1. 

// there is an example of both indexof() and includes() methods.
// let students = ["ali", "babar", "abubakar", "zohaib", "zain", "daniel", "rizwan"];   //list of students.
// user sa aik random number lo our us number pa jo index no jo name ha woh print karo.

// let user = +prompt("Enter the index number");
// if (students[user] != undefined) {
//     console.log(students[user]);
// };

// let student = prompt("Enter the name");
// let index = students.indexOf(student);
// console.log(students.includes(student), students.indexOf(student), students[index]);

