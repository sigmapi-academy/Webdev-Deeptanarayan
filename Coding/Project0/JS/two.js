const prompt = require('prompt-sync')();
let year = prompt('Enter year: ');
console.log(`Year: ${year}`);
console.log(typeof(year));
let y = Number(year);
if (y % 400 == 0 || (y % 100!= 0 && y % 4 == 0)){
    console.log(`${y} is a leap year`);
}
else{
    console.log(`${y} is not a leap year`);
}

if(0){
    console.log(`This will not execute!`)
}
else{
    console.log(`This is else,...`)
}

if(1){
    console.log(`This will execute!`)
}
else{
    console.log(`This is else,...`)
}

let cond = (y == 2026 ); // Equality evaluates to true or false

if(cond){
    console.log(`the year is 2026`);
}
else{
    console.log('Other year');
}

if(y < 2026){
    console.log(`Too early...`);
}
else if(y > 2026){
    console.log(`Too late`);
}
else{
    console.log(`Exactly!`)
}

// let age = Number(prompt('Enter age: '))
// let accessAllowed = (age > 18) ? true : false;
// if(accessAllowed){
//     console.log(`${age} is assessible`)
// }
// else{
//     console.log(`${age} is not assessible`)
// }

let age = Number(prompt('Enter age: '))

let message = (age < 3) ? 'Hi, baby!' :
    (age <18) ? 'Hello!' :
    (age < 100) ? 'Greetings!' :
    'What an unusual age!';

console.log(message)
