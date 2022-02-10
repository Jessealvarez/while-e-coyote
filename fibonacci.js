const prompt = require("prompt-sync")({sigint: true});

let choicey = Number(prompt("Input number: "));
count = 0;
let numb1=0;
let numb2=1;
let nextnumb = 1;


    while (count <= choicey){
        console.log(nextnumb);
        numb1 = numb2;
        numb2 = nextnumb;
        nextnumb = numb1 + numb2;
        count ++;
    }
    
