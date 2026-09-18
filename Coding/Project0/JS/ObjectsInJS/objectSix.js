let user = {
    name: `John`,
    age: 30
};

let clone = {}; //the new empty object

// Let's copy all user properties into it

for(let key in user){
    clone[key] = user[key];
}

// Now clone is fully independent object with the same content

console.log(clone)

clone.name = `Deeptanarayan`;
console.log("clone =",clone);

console.log("user =",user);