// console.table(true || true); //true
// console.table(false||true); //true
// console.table(true || false); //true
// console.table(false|| false); //false

// if(1||0){
//     console.table('truthy!')
// }
const prompt = require('prompt-sync')();
let hour = Number(prompt('Enter hour(0-24): '));
let weekDay = prompt('Enter name of week day(Sun, Mon,...Sat): ');
weekDay = weekDay.toLowerCase();
let isWeekend = (weekDay === 'sat' || weekDay === 'sun');
if(hour < 10 || hour > 18 || isWeekend){
    console.log('The office is closed.');
}
else{
    console.log('The office is open.');
}