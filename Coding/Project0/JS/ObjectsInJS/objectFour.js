// let user={ name:`Deeptanarayan`, age: 20};

// alert("age" in user); //true, user.age exists

// alert( "blabla" in user); //false, user.blabla doesn't exists

// let user = { age: 20 };

// let key = "age";

// alert(key in user); // true, property exists

// let obj = {
//     test: undefined
// };

// alert(obj.test); // It's undefined, so no such property?
// alert("test" in obj); //true, the property does exist! 

// let user = {
//     name: `Deeptanarayan`,
//     age: 20,
//     isAdmin: true 
// };

// for(let key in user){
//     //keys
//     alert(key); //name, age, isAdmin
//     alert(user[key]); //Deeptanarayan, 20, true
// }


let codes = {
    "91": "India",
    "1": "USA",
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain"
};

for(let code in codes){
    alert(code); //1, 41, 44, 49, 91
}