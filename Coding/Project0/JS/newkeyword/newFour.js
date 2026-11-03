function BigUser(name){
    this.name = name;

    return {name: 'Godzilla' }; //<-- returns this object
}

console.log(new BigUser('John'));
console.log(new BigUser('James'));
console.log(new BigUser('Ann'));