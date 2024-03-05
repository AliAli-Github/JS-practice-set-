// Keywords
// The words which keeps some meaning in JS are called Keywords. keywords are reserved words and cannot be used as a variable name.

// variables and constants
// variables can change their value but constant does'nt
// variables are used in JS to store Data.

// Local variables are declared in a function or in a block.
// Global variables are made outside the function. they have a global scoped that means you can access them all over the code.

// let is a keyword in JS used to declare a variable
// for Exapmle :
let name = "Ali Hussnian";

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