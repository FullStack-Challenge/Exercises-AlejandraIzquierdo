/** 
 * * Exercise 8: Decorators
 * TODO: Write a decorator that logs the arguments and return value of a function when it's called.
 * TODO: Apply the decorator to a function and observe the logs when the function is executed.
*/

function log(message: string) {
    console.log(message)
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(key);
        console.log(descriptor);
    }
}

class Dog {

    @log("Hello!")
    greet(name: string): string {
        return `Woof! My name is ${name}!`
    }
}

const dog = new Dog();
console.log(dog.greet("Hachi"));