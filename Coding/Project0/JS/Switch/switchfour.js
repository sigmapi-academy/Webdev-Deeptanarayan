const prompt = require('prompt-sync')();

let a = prompt(`Enter a value: `);

switch(a){
    case `0`:
    case `1`:
        console.log(`One or zero`)
        break;
    case `2`:
        console.log(`Two`)
        break
    case 3:
        console.log(`Never execute`);
        break;
    
    default:
        console.log(`I don't know such values`)
}