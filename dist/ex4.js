"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`ID sinh viên: ${this.id}, Tên: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Tên giảng viên: ${this.name}, chức vụ: ${this.subject}`);
    }
}
const student = new Student("Nhật", "436");
const teacher = new Teacher("Hai", "Giảng viên");
student.displayInfo();
teacher.displayInfo();
