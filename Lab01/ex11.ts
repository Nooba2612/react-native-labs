class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    bark() {
        console.log("Gâu gâu~");
    }

    meow() {
        console.log("Meo meo~");
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
}

const dog = new Dog("Doggy");
dog.bark();
const cat = new Cat("Kitty");
cat.meow();
