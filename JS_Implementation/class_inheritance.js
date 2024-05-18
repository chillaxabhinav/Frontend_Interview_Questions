class Animal {
    constructor(name) {
        this.name = name
    }

    static sayName() {
        console.log("My name is", this.name);
    }
}

class Dog extends Animal {
    constructor(breed, name) {
        super(name);
        this.breed = breed;
    }

    walk() {
        console.log(this.breed, " is walking");
    }
}

const me = new Dog("lebra", "Julie");
console.log(me.sayName());