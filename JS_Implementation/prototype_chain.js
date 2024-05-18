function Animal() {
    this.walk = () => {
        console.log("Walking");
    }
}
Animal.prototype.another = function() {
    console.log("another");
}

function Dog(name) {
    Animal.call(this);
    this.name = name;
    this.bark = () => {
        console.log("barking");
    }
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const julie = new Dog("julie");

console.log(julie.another());

// Here Dog is extending to Animal
