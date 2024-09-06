
//$!/usr/bin/env node
Object.defineProperty(exports, "__esModule", { value: true });
// Simple Command Line Calculator
// A simple command line calculator using TypeScipt, Node.js and Inquirer.
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Ensure the numbers are properly accessed from the answer object
var firstNumber = answer.firstNumber;
var secondNumber = answer.secondNumber;
if (answer.operator === "Addition") {
    console.log(firstNumber + secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(firstNumber - secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(firstNumber * secondNumber);
}
else if (answer.operator === "Division") {
    console.log(firstNumber / secondNumber);
}
else {
    console.log("Please select valid operators");
}
