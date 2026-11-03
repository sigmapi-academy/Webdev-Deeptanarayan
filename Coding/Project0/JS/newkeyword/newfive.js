function User(name){
    this.name = name;

    this.sayHi = function(){
        console.log("My name is: "+this.name);
    };
}

let deep = new User("Deeptanarayan");

deep.sayHi();

