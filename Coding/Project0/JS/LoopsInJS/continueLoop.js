const prompt = require('prompt-sync')();

let i = 0;
let output = '';
let n = +prompt('Enter number of terms: ');
for (; i < n; i++) {
    if (i % 2 == 0) {
        continue;
    }
    output += i + ' ';
}
console.log(output);