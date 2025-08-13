abstract class Animal {
    abstract makeNoise(): void;
    abstract printName(): void;
}

class Dog extends Animal {
    makeNoise(): void {
        console.log("gau gau");
    }

    printName(): void {
        console.log("cho");
    }
}

class Cat extends Animal {
    printName(): void {
        console.log("meo");
    }
    makeNoise(): void {
        console.log("meo meo");
    }
}

const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach(animal => animal.printName());
animals.forEach(animal => animal.makeNoise());
