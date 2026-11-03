// let user = {
//     name: "John",
//     age: 30
// };

// // user.sayHi = function(){
// //     console.log("Hello!")
// // };

// // first declare
// function sayHi(){
//     console.log("Hello!");
// }

// // then add as a method
// user.sayHi = sayHi;
// user.sayHi(); //Hello!

// user = {
//     sayHi: function(){
//         console.log("Hello!");
//     }
// };

// user.sayHi();

// user = {
//     name: "John",
//     age: 30,
//     sayHi(){ //same as sayHi: function(){...}
//         // console.log("Hello!", this.name);
//         console.log("Hello!", user.name);
//     }
// };

// let admin = user;
// user = null; // Overwrite to make things obvious
// user.sayHi(); // TypeError: Cannot read property 'name' of null.


// user = {
//     name: "John",
//     age: 30,
//     sayHi(){ //same as sayHi: function(){...}
//         // console.log("Hello!", this.name);
//         console.log("Hello!", this.name);
//     }
// };

// let admin = user;
// user = null; // Overwrite to make things obvious
// admin.sayHi(); 


// let user = { name: "John"};
// let admin = { name: "Admin"};

// function sayHi(){
//     console.log("Hello!", this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f(); //Hello! John (this == user)
// admin.f(); // Hello! Admin (this == admin)

// admin['f'](); // Admin (dot or square brackets access the method - doesn't matter)
 