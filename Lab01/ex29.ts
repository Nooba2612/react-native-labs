interface Movable {
    move(): void;
}

class Car implements Movable {
    move(): void {
        console.log("Xe đang chạy");
    }
}

class Robot implements Movable {
    move(): void {
        console.log("Robot đang đi");
    }
}

const car = new Car();
car.move();

const robot = new Robot();
robot.move();
