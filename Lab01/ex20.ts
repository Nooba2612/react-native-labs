interface Vehicle {
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    constructor(public brand: string) {}

    start(): void {
        console.log(`${this.brand} car started`);
    }

    stop(): void {
        console.log(`${this.brand} car stopped.`);
    }
}

class Bike implements Vehicle {
    constructor(public brand: string) {}

    start(): void {
        console.log(`${this.brand} bike started`);
    }

    stop(): void {
        console.log(`${this.brand} bike stopped.`);
    }
}

const car = new Car("Toyota");
const bike = new Bike("Yamaha");

car.start();
car.stop();

bike.start();
bike.stop();
