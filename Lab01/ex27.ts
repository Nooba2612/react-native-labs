class Person {
    protected name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}

class Teacher extends Person {
    private subject: string;

    constructor(name: string, age: number, subject: string) {
        super(name, age);
        this.subject = subject;
    }

    introduce(): void {
        console.log(`Xin chào, tôi là ${this.name}, ${this.age} tuổi và tôi dạy môn ${this.subject}.`);
    }
}

const teacher1 = new Teacher("Nguyễn Văn A", 35, "Toán");
teacher1.introduce();
