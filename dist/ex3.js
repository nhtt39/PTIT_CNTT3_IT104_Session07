"use strict";
class Animal {
}
class Dog extends Animal {
    makeNoise() {
        console.log("gau gau");
    }
    printName() {
        console.log("cho");
    }
}
class Cat extends Animal {
    printName() {
        console.log("meo");
    }
    makeNoise() {
        console.log("meo meo");
    }
}
const animals = [new Dog(), new Cat()];
animals.forEach(animal => animal.printName());
animals.forEach(animal => animal.makeNoise());
