interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

class Bird implements Flyable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    fly(): void {
        console.log(`${this.name} is flying high in the sky!`);
    }
}

class Fish implements Swimmable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    swim(): void {
        console.log(`${this.name} is swimming in the water!`);
    }
}

const bird = new Bird("Eagle");
bird.fly();

const fish = new Fish("Fish");
fish.swim();
