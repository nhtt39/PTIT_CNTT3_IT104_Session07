class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo(): void {
        console.log(`Tên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`Sđt: ${this.phone}`);
    }
}

class Manager extends Employee {
    teamSize: number;

    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }

    printInfo(): void {
        super.printInfo();
        console.log(`Team Size: ${this.teamSize}`);
    }
}

const emp = new Employee("Duy","abc","063777382");
emp.printInfo();

const manager = new Manager("n","abcd","836257129",10);
manager.printInfo();