const prompt = require('prompt-sync')();

let numOfTerms = Number(prompt(`Enter number of terms: `))

let i = 0;
for(; i < numOfTerms; ){
    console.log(i);
    i++;
}

console.log(`outside the loop i = ${i}`)

