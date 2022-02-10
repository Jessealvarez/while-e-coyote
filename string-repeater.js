// Write a program that takes a string and 'repeats it' 
// until the string's length is greater than or equal to 10.
const prompt = require('prompt-sync')();

let choicey = (prompt("Enter string of letters: "));

let choicey2 = choicey


    while (choicey.length >= 1 && choicey.length <= 10 ) {
        choicey = choicey + choicey2;
        console.log ( choicey );
    
        
    }
