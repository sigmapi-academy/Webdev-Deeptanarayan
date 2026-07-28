const prompt = require('prompt-sync')();

let numOfTerms = Number(prompt(`Enter number of terms: `))
let i = 0;
do{
    console.log(i);
    i++;
}while(i < numOfTerms);
