"use strict";
/**
 * * Exercise 7: Classes and Inheritance
 * TODO: Create a class Animal with properties name and age.
 * TODO: Create a subclass Dog that extends Animal and has an additional property breed.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.Animal = Animal;
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
}
