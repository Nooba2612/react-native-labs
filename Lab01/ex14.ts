class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary;
    }
}

class Manager extends Employee {
    teamSize: number;

    constructor(name: string, salary: number, teamSize: number) {
        super(name, salary);
        this.teamSize = teamSize;
    }

    manage(): void {
        console.log(`${this.name} is managing a team of ${this.teamSize} people.`);
    }
}

class Developer extends Employee {
    programmingLanguage: string;

    constructor(name: string, salary: number, programmingLanguage: string) {
        super(name, salary);
        this.programmingLanguage = programmingLanguage;
    }

    code(): void {
        console.log(`${this.name} is coding in ${this.programmingLanguage}.`);
    }
}

const manager = new Manager("Nguyen", 5000, 10);
manager.manage();
console.log("Salary:", manager.getSalary());

const dev = new Developer("Man", 4000, "TypeScript");
dev.code();
console.log("Salary:", dev.getSalary());
