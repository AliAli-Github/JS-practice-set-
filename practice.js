// Increment and decrement example

// let value = 0;
// document.getElementById("increment").onclick = () => {
//     value++;
//     document.getElementById("number").innerHTML = value;
// }
// document.getElementById("decrement").onclick = () => {
//     if (value > 0) {
//         value--;
//         document.getElementById("number").innerHTML = value;
//     }
// }

// Practice of for loop.
// use for loop to find even and odd number between 10 to 50.
// for (let x = 10; x <= 50; x++) {
//     if (x % 2 == 0) {
//         console.log(x + " Even");
//     }
//     else {
//         console.log(x + " Odd");
//     }
// }


// Nested loops
// for (let x = 1; x <= 5; x++) {
//     for (let y = 1; y <= x; y++) {
//         console.log(y);
//     }
//     console.log("\n");
// }

// for (let x = 1; x <= 5; x++) {
//     for (let y = 1; y <= x; y++) {
//         document.write("*" + " ");
//     }
//     document.write("</br>");
// }

// Conditionals Statement questions

// let randomNumber = prompt("Enter the number", "For Example: 1, 2, 3 etc.");
// if (randomNumber > 10) {
//     console.log("Hello");
// }
// else {
//     console.log("Hey");
// }
// console.log(randomNumber);

// let number = prompt("Enter the number");
// let newNumber = Number(number);
// newNumber += 10;
// console.log(typeof newNumber, newNumber);
// if (newNumber > 20) {
//     console.log("Hello");
// }
// else {
//     console.log("Hey");
// }

// user sa do number lo us numbers ko add karo or result ki value agar dosra number ka last digit sa choti ho tu print karo hello nahi ti ha.

// let numOne = +prompt("Enter first Number");
// let numTwo = +prompt("Enter second Number");
// let sum = numOne + numTwo;
// if (numTwo % 10 < sum) {
//     console.log("Hello");
// }
// else {
//     console.log("Hey");
// }

// user sa do password manjo agar match kar jain tu login karo nahi tu mana karo.

// let password = prompt("Enter your password");
// let confirmpassword = prompt("Confirm your password");
// if (password === confirmpassword) {
//     console.log("Login successful!");
// }
// else {
//     console.log("password not match");
// }

// check the number that user enter in promt is even or odd

// let number = +prompt("Enter any number");
// if (number % 2 == 0) {
//     console.log("Even");
// }
// else {
//     console.log("Odd");
// }

// let menu = prompt("tell me your order");
// menu = menu.toLowerCase();
// if (menu === "biryani") {
//     console.log("Available");
// }
// else if (menu === "tikka") {
//     console.log("Available");
// }
// else if (menu == "drink") {
//     console.log("Available");
// }
// else {
//     console.log("does not exist");
// }

// let randomNumber = +prompt("Enter the number");

// if (randomNumber > 20) {
//     if (randomNumber < 30 && randomNumber > 20) {
//         console.log("number lies between 20 and 30");
//     }
// }
// else {
//     console.log(randomNumber)
// }

// let volume = document.querySelector("strong");
// let range = document.querySelector("input");
// let volUp = document.querySelector(".up");
// let volDown = document.querySelector(".down");
// let volMuted = document.querySelector(".muted");
// range.addEventListener("input", () => {
//     volume.innerText = range.value + " %";
//     if (range.value > 50) {
//         volUp.style.display = "block";
//         volDown.style.display = "none";
//         volMuted.style.display = "none";
//     }
//     else if (range.value <= 50) {
//         volUp.style.display = "none";
//         volDown.style.display = "block";
//         volMuted.style.display = "none";
//     }
// });
// volUp.addEventListener("click", () => {
//     volUp.style.display = "none";
//     volMuted.style.display = "block";
// });
// volDown.addEventListener("click", () => {
//     volDown.style.display = "none";
//     volMuted.style.display = "block";
// });
// volMuted.addEventListener("click", () => {
//     if (range.value > 50) {
//         volUp.style.display = "block";
//         volDown.style.display = "none";
//         volMuted.style.display = "none";
//     }
//     else if (range.value < 50) {
//         volUp.style.display = "none";
//         volDown.style.display = "block";
//         volMuted.style.display = "none";
//     }
// })