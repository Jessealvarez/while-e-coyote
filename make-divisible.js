// Write a program that prompts the user for two numberx, x and y. 
// The program should add one to x until it is divisble by y.

const prompt = require('prompt-sync')();

let x = Number(prompt("Input first number: "));
let y = Number(prompt("Input second number: "));

    while( x % y !==0 ){
        x++
    }
console.log(x + " is divisible by " + y);