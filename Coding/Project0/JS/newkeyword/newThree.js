function User(name){
    if(!new.target){ //if you run me without new
        return new User(name);  // I will add new for you
    }
    this.name = name;
}

let deep = User('Deeptanarayan'); // redirects call to new user

console.log(deep.name);

let subh = new User("Subhalakshmi");
console.log(subh.name)