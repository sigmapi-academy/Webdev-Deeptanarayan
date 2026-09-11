
function makeuser(name, age){
    return {
        name, //same as name: name
        age, //same as age: age
        // ...other properties
    };
}

let user = makeuser(`Deeptanarayan`, 21);
alert(user.name)

