const prompt = require('prompt-sync')();

//Write a program that prompts the user for a number, then repeatedly 
//doubles that number until it is greater than or equal to 100.

let choicey = Number(prompt("Input number: "));


    while ( choicey <= 100 ) {
        
        console.log( choicey );
        choicey = choicey * 2;
        }