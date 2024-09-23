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
//2. Create an object representing a movie with properties for title, 
director, and releaseYear. Add a method to the object that returns 
a string with the movie's details.
*/

// 3. Convert the following function to an arrow function:
const multiply = (a,b) => {
    return a*b;
}
console.log(`The multiply is: ${multiply(5,3)}`);

//part 3 loops in javascript
// 1. for loop
console.log("For loop")
for(let i=0;  i <5; i++){
    console.log(i);
}
// 2 while loop
console.log("while loop");
let count =0;
while(count<5){
    console.log(count);
    count++;
}
// 3 do... while loop:
console.log("Do...while loop");
let x=0;
do{
    console.log(x)
    x++;
}while (x<5);
// 4 for ... or loop
console.log("for...of loop");
const fruits1 = ["apple","banana","cherry"];
for(const fruit of fruits1){
    console.log(fruit);
}
//5 for ... in loop
console.log("for ... in loop");
const person1 = {name: "John" , age:30, city:"New York"};
for(const key in person1){
    console.log(key + ":" + person1[key]);
}
//6 foreach method
console.log("forEach Method");
const numbers =[1,2,3,4,5];
numbers.forEach(function(number){
    console.log(number);
})
//part 3 practice Exercises
console.log("part 3 practice Exercises");
//1. Use a `for` loop to print the numbers from 1 to 10.
console.log("for loop");
for(let i=0;  i <11; i++){
    console.log(i);
}
//2. Create an array of 5 fruits. 
//Use a `foreach` loop to print each fruit to the console.
console.log("forEach loop");
const fruit2 =["apple","banana","orange","cherry","pear"];
fruit2.forEach(function(frui){
    console.log(frui);
})
//3. Create an array of numbers. Use a `for...of` loop to calculate and print the sum of all numbers in the array.
console.log("for...of loop");
const numbers1=[1,2,3,4,5,6];
let sum = 0
for(const number of numbers1){
    sum+= number;
    console.log(number);
}
//4. Create an object representing a car with properties like make, model, 
//and year. Use a `for...in` loop to print all the properties and their values.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
//using a for ... in loop to print all properties and their values
for(let key in car){
    console.log(`${key}: ${car[key]}`);
}
