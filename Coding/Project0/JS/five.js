// const prompt = require('prompt-sync')();

// let hour = Number(prompt('Enter number of hours: '))
// let min = Number(prompt('Enter number of minutes: '))

// if (hour == 12 && min == 30){
//     console.log(`The time is ${hour}:${min}`)
// }


// if(1 && 0){ //evaluated as true && false
//     console.log(`won't work, because the result is falsy`)
// }

console.log(1&&2&&3); //returns 3
console.log(1&&0); //return 0
console.log(1&&5);  //returns 5
console.log(1&&0&&5); // returns 0
console.log(null && 5); //return null
console.log(0&&`no matter what`); //return 0
console.log(!true); //returns false
console.log(!false); //returns true
console.log(!0); //returns true
console.log(!`Hello`); //returns false
console.log(!``); //returns true