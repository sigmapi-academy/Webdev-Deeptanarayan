function checkAge(age){
    if(age >= 18){
        return true;
    }
    else{
        return false;
    }
}

function showMovie(age){
    if(!checkAge(age)){
        return;
    }
    console.log(`Showing you the movie`);
}

const prompt = require('prompt-sync')();
let age = prompt('How old are you?', 18);

showMovie(age);