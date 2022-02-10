const prompt = require("prompt-sync")({sigint: true});


let choices = Number(prompt("Input number or type 'done' when finished: "));
    
let num = prompt("> ");

let total =0;
while (num !=="done"){ 

    total = total + Number(num);
    num = prompt("> ")
}

console.log("Total: " + total);