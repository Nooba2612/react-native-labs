class Animal {
    makeSound(): void {
        console.log("...");
    }
}

class Dog extends Animal {
    override makeSound(): void {
        console.log("Gâu! Gâu!");
    }
}

class Cat extends Animal {
    override makeSound(): void {
        console.log("Meo! Meo!");
    }
}

const animals: Animal[] = [new Dog(), new Cat(), new Animal()];

animals.forEach((a) => a.makeSound());
