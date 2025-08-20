import Person = require("./Ex1");

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, number);
    }

    getInfo() {
        return `Name: ${this.name} \nAge: ${this.age} \ngrade: ${this.grade}`;
    }
}

console.log(new Student("Đặng Phúc Nguyên", 22, "DHKTPM18B").getInfo());
