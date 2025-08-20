class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getFullName() {
        return `Name: ${this.name} \nAge: ${this.age}`;
    }
}

console.log(new Person("Đặng Phúc Nguyên", 22).getFullName());

export { Person };
