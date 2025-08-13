"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        this.speed--;
    }
    speedUp() {
        this.speed++;
    }
    showSpeed() {
        console.log(`Tốc độ mặc định của ${this.name}: ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
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
