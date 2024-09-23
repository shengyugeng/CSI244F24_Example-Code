//================Variables and Data Types:
//Variables can be declared using let, const, or var
let name1 = "John Doe"; // string data type, can be reassigned
const age = 30; //number data type, cannot be reassigned
var isStudent = true; //boolean daty type, older way of declaring variables
// teplate literals allow for easy string interpolation
console.log(`Name: ${name1}, Age: ${age}, Is student: ${isStudent}`);

// 2 functions:
// a, function declaration:
console.log(greet("Alice"));
function greet(name){
    return `Hello, ${name} !`;
};



// b, function expression:

const greet1 = function(name) {
    return `Hello, ${name} !`;
};
console.log(greet1("Bob"));

//c, Array function
const greet2 = (name2) => {
    return `Hello, ${name2} !`;

}
console.log(greet2("Charlie"));
//d, concise arrow function
const greet3 = name3 => `Hello, ${name3} !`;
console.log(greet3("David"));

//3 array and object:
let fruits = ["apple" , "banana", "orange"];
//objects are collections of key-value pairs
let person = {
    name: "Bob",
    age:25,
    city: "Seattle"
}
console.log(fruits);
console.log(person);

// part 2 practice exercises
function calculateArea(length,width){
    return length*width;
}
const area = calculateArea(5,3);
console.log(`The area of the rectangle is: ${area}`);

// I don't know how create an object 
/*
Create an object representing a movie with properties for title, 
director, and releaseYear. Add a method to the object that returns 
a string with the movie's details.
*/

// 3. Convert the following function to an arrow function:
const multiply = (a,b) => {
    return a*b;
}
console.log(`The multiply is: ${multiply(5,3)}`);