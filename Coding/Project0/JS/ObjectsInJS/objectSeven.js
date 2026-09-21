// let user = {name: 'John'};

// let permission1 = {canVeiw: true};
// let permission2 = {canEdit: true};

// // Copies all properties from permission one and permission two into user

// Object.assign(user, permission1, permission2);

// console.log(user);
// console.log(user.name);
// console.log(user.canEdit);
// console.log(user.canVeiw);

// let user = {
//     name: 'John',
//     age: 30
// };
// Object.assign(user, {name: 'Harry'})

// console.log(user.name); //Harry
// console.log(user.age); //30



// let user = {
//     name: 'John',
//     age: 30
// };

// let clone = Object.assign({}, user);

// console.log(clone);

// Object.assign(clone, {age:44});
// console.log('After changing the age of clone: ',clone);
// console.log(user)


// let user = {
//     name: 'John',
//     sizes:{
//         height: 182,
//         width: 50,
//     }
// };

// // console.log(user.sizes.height);

// let clone = Object.assign({}, user);

// console.log(user.sizes === clone.sizes); //true, same object

// // User and clone share sizes

// user.sizes.width = 60; // Change a property from one place

// console.log(clone.sizes.width);// 60, get the result from the other one.

// let user = {
//     name: 'John',
//     sizes:{
//         height: 182,
//         width: 50,
//     }
// };

// // console.log(user.sizes.height);

// let clone = structuredClone(user);

// console.log(user.sizes === clone.sizes); //false, different object

// // User and clone are totally unrelated now. 

// user.sizes.width = 60; // Change a property from one place

// console.log(clone.sizes.width);// 50, not related

// let user = {}

// // Let's create a circular reference : 
// // user.me references the user itself.

// user.me = user;

// let clone = structuredClone(user);

// console.log(clone.me === clone); //true

structuredClone({
    f: function(){}
});
