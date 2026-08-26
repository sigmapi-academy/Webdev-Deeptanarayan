const prompt = require(`prompt-sync`)();

let age = prompt(`What is your age? `, 18);

console.log(age);

if(age < 18){
    welcome();
    function welcome(){
        console.log(`Hello!`);
    }
    welcome();
}
else{
    function welcome(){
        console.log(`Greetings`);
    }
}

//... use it later
welcome();