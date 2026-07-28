const prompt = require('prompt-sync')();

let numOfTerms = Number(prompt('Enter number of terms: '));

let i = 0;
while(i < numOfTerms){
    console.log(i)
    i++;
}

console.log(`\nValues of j`)
let j = 3;
while(j){
    console.log(j);
    j--;
}