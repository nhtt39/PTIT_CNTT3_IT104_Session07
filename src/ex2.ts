class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: string;

    constructor(name: string, speed: number, id: string) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    slowDown(): void {
        this.speed --;
    }

    speedUp(): void {
        this.speed ++;
    }

    showSpeed(): void {
        console.log(`Tốc độ mặc định của ${this.name}: ${this.speed} km/h`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;
    
    constructor(name: string, speed: number, id: string, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    showInfo(): void {
        console.log(`Thông tin xe đạp:Tên: ${this.name}ID: ${this.id}Tốc độ: ${this.speed} km/h: ${this.gear}`);
    }
}

const myBicycle = new Bicycle("Xe đạp đỏ", 20, "002", 6);
myBicycle.showSpeed();
myBicycle.speedUp();
myBicycle.showSpeed();
myBicycle.slowDown();
myBicycle.showSpeed();
myBicycle.showInfo();