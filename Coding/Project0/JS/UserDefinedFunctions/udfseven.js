
const prompt = require('prompt-sync')();

function ask(question, yes, no) {
    let q = prompt(`${question}`)
    if (q === `yes`) {
        yes();
    }
    else {
        no();
    }
}

function showOk() {
    console.log(`You agreed`);
}

function showCancel(){
    console.log(`You canceled the execution.`)
}

ask(`Do you agree?`, showOk, showCancel)