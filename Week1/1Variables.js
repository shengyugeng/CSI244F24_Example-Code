//console.log("Hello Node");
//variables
//dont use var
var badWay = "variable made with var";
//we use let
//let is block scoped{}
let newWay = "Variable made with let";


//const - variable cannot be changed
const CONST_VALUE = "I cannot be re-assignment";

//DATA TYPES
// string
//number(this includes whole and decimal numbers)
//Boolean(true or false)
//array[]
//boject{}
//undefined


let numbers = [1,2,3,4,5,6];
console.log(numbers);
numbers[1] = "Hello";
console.log(numbers);
//template literals ''



//objects
let person = {
    fistName:"josh",
    lastName: "Emery",
};
console.log(`the name is ${person.fistName} ${person.lastName}`);

//Variables
//Dont use var
var badWay = "Variable made with var";

//we use let
//let is block scoped {}


//CONST - Variable cannot be changed

//CONST_VALUE = 10;

//Data Types
//String
//Number (this includes whole and decimal numbers)
//Boolean (true or false)
//Array []
//Object {}
//Undefined

let numbers = [1, 2, 3];
console.log(numbers);
numbers[1] = "Hello";
console.log(numbers);

//template literals ``
let output = `The array is ${numbers}`;
console.log(output);

//Objects


console.log(`The name is ${person.firstName} ${person.lastName}`);

