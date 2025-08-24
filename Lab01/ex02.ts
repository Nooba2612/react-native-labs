import Person = require("./ex01");

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, number);
        this.grade = grade;
    }

    getInfo() {
        return `Name: ${this.name} \nAge: ${this.age} \ngrade: ${this.grade}`;
    }
}

console.log(new Student("Than Hoang Thien Thien", 10, "DHKTPM18B").getInfo());
