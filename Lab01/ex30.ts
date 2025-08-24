class Student {
    constructor(public name: string, public grade: number) {}

    getInfo(): string {
        return `Student: ${this.name}, Grade: ${this.grade}`;
    }
}

class Teacher {
    constructor(public name: string, public subject: string) {}

    getInfo(): string {
        return `Teacher: ${this.name}, Subject: ${this.subject}`;
    }
}

class School {
    private students: Student[] = [];
    private teachers: Teacher[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }

    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }

    displayInfo(): void {
        console.log("School Info:");
        console.log("Students:");
        this.students.forEach((s) => console.log(s.getInfo()));

        console.log("Teachers:");
        this.teachers.forEach((t) => console.log(t.getInfo()));
    }
}

const school = new School();

school.addStudent(new Student("Nguyen", 10));
school.addStudent(new Student("Man", 11));

school.addTeacher(new Teacher("Thien Thien", "Math"));
school.addTeacher(new Teacher("My Lan", "English"));

school.displayInfo();
