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