function checkAge(age){
    if(age >= 18){
        return true;
    }
    else{
        return false;
    }
}

const prompt = require('prompt-sync')();
let age = prompt('How old are you?', 18);

if(checkAge(age)){
    console.log('Access granted');
}
else{
    console.log(`Access denied`);
}