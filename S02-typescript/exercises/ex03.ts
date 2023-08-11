/** 
 * * Exercise 3: Interfaces and Objects
 * TODO: Create an object that adheres to the Book interface you defined earlier.
 * TODO: Define a function that takes a Person object (with properties name and age) and returns a greeting message.
*/

import { Book } from "./ex02";

let book: Book = {title: "The four agreements", author: "Don Miguel Ruiz", publicationYear: 1997}


let person: {name: string; age: number} = {name: "Malia", age: 17};
const greet = (message: string, person: any) => console.log(message, person.name);

console.log(book);
greet("Good Morning, miss %s!", person);