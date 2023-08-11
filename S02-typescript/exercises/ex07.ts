/** 
 * * Exercise 7: Classes and Inheritance
 * TODO: Create a class Animal with properties name and age.
 * TODO: Create a subclass Dog that extends Animal and has an additional property breed.
*/

export class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


class Dog extends Animal {
    breed: string;
    
    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }
}