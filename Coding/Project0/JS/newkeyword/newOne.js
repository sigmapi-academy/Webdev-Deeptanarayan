function User(name){
    this.name = name;
    this.isAdmin = false;
}

let user1 = new User("Deeptanarayan");


alert(user1.name); //Deeptanarayan
alert(user1.isAdmin); // false

let user2 = new User("Subhalakshmi");
let user3 = new User("Soumodip");