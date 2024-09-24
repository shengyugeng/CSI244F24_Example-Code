//================Variables and Data Types:
//Variables can be declared using let, const, or var
let name1 = "John Doe"; // string data type, can be reassigned
const age1 = 30; //number data type, cannot be reassigned
var isStudent = true; //boolean daty type, older way of declaring variables
// teplate literals allow for easy string interpolation
console.log(`Name: ${name1}, Age: ${age1}, Is student: ${isStudent}`);

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


/*
//2. Create an object representing a movie with properties for title, 
director, and releaseYear. Add a method to the object that returns 
a string with the movie's details.
*/
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,

    // Method to return the movie's details
    getDetails() {
        return `Title: ${this.title}, Director: ${this.director}, Release Year: ${this.releaseYear}`;
    }
};

// Calling the method to get movie details
console.log(movie.getDetails());

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
// part 4 destructuring, spread, and rest operators
//1. object destructuring
const PersonName = {firstName: "John", lastName:"Doe", age: 30};
const{firstName,lastName} = PersonName;
console.log(firstName,lastName);
// assigning to different variable names
const{firstName: fName, lastName:lName} = PersonName;
console.log(fName,lName);
//setting default values
const { age, occupation = "Unknown"} = PersonName;
console.log(age,occupation);

//2. Array Destructuring:
//basic array destructuring
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor); //output : red green
//skipping elements
const[ , , thirdColor] = colors;
console.log(thirdColor); //output: blue
//swapping variables
let a =1, b= 2;
[a,b] = [b,a];
console.log(a,b); // output:2 1

//3 spread operator:
//1. combining arrays
console.log("combining arrays")
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); //output: [1,2,3,4,5,6]

//copying arrays
console.log("copying arrays")
const originalArray = [1,2,3];
const copedArray = [...originalArray];
console.log(copedArray);
//spreading into function arguments
console.log("spreading into function arguments")
function sum1(x,y,z){
    return x+y+z;

}
const numbers4 = [1,2,4];
console.log(sum1(...numbers4)); //output: 6

//spreading object properties
console.log("spreading object properties");
const basicInfo = {firstName: "John", lastName:"Doe"};
const datailedInfo = {...basicInfo, age: 30, occupation: "Developer"}
console.log(datailedInfo);

//rest operator
console.log("Rest Operator")
function sum3(... numbers){
    return numbers.reduce((total, num)=> total + num, 0);

}
console.log(sum3(1,2,3,4));//output 10
// rest in array destructuring
console.log("rest in array destructuring")
const[first,second, ... rest] = [1,2,3,4,5];
console.log(first, second, rest);// output: 1 2 [3,4,5]
//rest in object destructuring
console.log("rest in object destructuring");
const {a1 ,b1 , ...others} = {a1:1, b1:2, c:3, d:4};
console.log(a,b,others); //output: 1 2 {c:3, d:4}
//part 4 practice exercises
console.log("part 4 practice exercises")
console.log("Number 1")
const PersonInfo = { name4: "Alice", age2: 25, city: "New York", country: "USA" }
const {name4,age2, ...location} = PersonInfo;
console.log(name4); //"Alice"
console.log(age2);  //"25"
console.log(location); //{ city: "New York", country: "USA" }
console.log("Number 2")
const numbers5 = [1,2,3,4,5];
const[a2,b2, ...remaining] = numbers5;
console.log(a2);
console.log(b2);
console.log(remaining);
console.log("Number 3")
function printPersonInfo({name7,age,occupation = "unknown"}){
    console.log(`Name: ${name7}`);
    console.log(`Age: ${age}`)
    console.log(`occupation: ${occupation}`);
}

const person3 = {name7:"Alice", age: 30, occupation:"engineer"};
const person4 = {name7: "Bob", age: 45};

printPersonInfo(person3);
printPersonInfo(person4);

//part 5 callbacks in javascript
//Basic callback example
console.log("Basic Callback Example");
function greet(name,callback){
    console.log('Hello  ' + name);
    callMe();
}
function callMe(){
    console.log('I am callback function');
}
greet('John', callMe());

//callbacks with arguments
console.log("callbacks with arguments")
function calculateSquare(numberf,callback){
    const result = numberf * numberf;
    callback(result);
}
function displayResult(result){
    console.log('the square is ' + result);
}
calculateSquare(5,displayResult);

console.log("Anonymous Function as Callback:");
setTimeout(function(){
    console.log('the message is show after 3 seconds');
}, 3000);
console.log("Error handling in callbacks");
function divideNumbers(a,b,callback){
    if(b===0){
        callback(new Error('cannot divide by zero'), null);
    }else{
        callback(null, a/b);
    }

}
divideNumbers(10,2,function(error,result){
    if(error){
        console.error('Error:', error.message);
    }else{
        console.log('result:', result);
    }
});

//part 5 practice exercises
console.log("Number 1");
function fetchUserData(userId, callback){
    console.log(`Fetching data for user with ID: ${userId}`);
    //SIMULATE A DALAY OF 2 SECONDS USING SETtimeout
    setTimeout(()=>{
        //SIMULATED USER DATA
        const userData = {
            id: userId,
            name: "John Doe",
            age:30,
            occupation:"Software Engineer"
        };
        //call the callback function with the fetched user data
        callback(userData);
    },2000); // 2 seconds dalay
}
// Traditional function declaration for the callback
function displayUserDate(user){
    console.log("User Data:");
    console.log(`ID: ${user.id}`)
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`occupation: ${user.occupation}`);

}

//fetching user data and displayint it
fetchUserData(123,displayUserDate);



// Arrow function for the callback
fetchUserData(102, (user) => {
    console.log("User Data (Arrow Function):");
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Occupation: ${user.occupation}`);
});









