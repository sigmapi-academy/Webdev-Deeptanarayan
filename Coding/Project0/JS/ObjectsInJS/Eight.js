function marry(man, women){
    women.husband = man;
    man.wife = women;

    return {
        father: man,
        mother: women
    }
}

let family = marry({
    name:'John'
},{
    name: 'Ann'
});