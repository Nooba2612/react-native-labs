class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }
}

const stringBox = new Box<string>("Hello TypeScript");
console.log(stringBox.getValue());

const numberBox = new Box<number>(123);
console.log(numberBox.getValue());
x;

const userBox = new Box<{ id: number; name: string }>({ id: 1, name: "Alice" });
console.log(userBox.getValue());
