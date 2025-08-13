abstract class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract displayInfo(): void;
}

class Student extends Person {
    private id: string;

    constructor(name: string, id: string) {
        super(name);
        this.id = id;
    }

    displayInfo(): void {
        console.log(`ID sinh viên: ${this.id}, Tên: ${this.name}`);
    }
}

class Teacher extends Person {
    private subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }

    displayInfo(): void {
        console.log(`Tên giảng viên: ${this.name}, chức vụ: ${this.subject}`);
    }
}

const student = new Student("Nhật", "436");
const teacher = new Teacher("Hai", "Giảng viên");

student.displayInfo();
teacher.displayInfo();