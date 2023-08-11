"use strict";
/**
 * * Exercise 8: Decorators
 * TODO: Write a decorator that logs the arguments and return value of a function when it's called.
 * TODO: Apply the decorator to a function and observe the logs when the function is executed.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(message) {
    console.log(message);
    return function (target, key, descriptor) {
        console.log(target);
        console.log(key);
        console.log(descriptor);
    };
}
class Dog {
    greet(name) {
        return `Woof! My name is ${name}!`;
    }
}
__decorate([
    log("Hello!")
], Dog.prototype, "greet", null);
const dog = new Dog();
console.log(dog.greet("Hachi"));
