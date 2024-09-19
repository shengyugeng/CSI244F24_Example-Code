//console.log("Hello Node");
//variables
//dont use var
var badWay = "variable made with var";
//we use let
//let is block scoped{}
let newWay = "Variable made with let";
newWay = 10;

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
let output = `the array is ${numbers}`;
console.log(output);

//objects
let person = {
    fistName:"josh",
    lastName: "Emery",
};
console.log(`the name is ${person.fistName} ${person.lastName}`);