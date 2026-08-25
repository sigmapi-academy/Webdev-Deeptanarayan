function sayHi() { //1. create
    console.log(`hello!`);
}

console.log(sayHi); 

let func1 = sayHi; // 2. copy

func1(); //Hello 3 run the copy (it works)
sayHi(); //hello // this still works too 
