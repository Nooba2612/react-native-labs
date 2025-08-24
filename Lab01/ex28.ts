class Animal {
    protected makeSound(): void {
        console.log("...");
    }

    public speak(): void {
        this.makeSound();
    }
}

class Dog extends Animal {
    protected makeSound(): void {
        console.log("Gâu! Gâu!");
    }
}

class Cat extends Animal {
    protected makeSound(): void {
        console.log("Meo! Meo!");
    }
}

const dog = new Dog();
dog.speak();

const cat = new Cat();
cat.speak();
