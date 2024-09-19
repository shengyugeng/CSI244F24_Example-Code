
//javascript functions
function greet(){
    console.log("Hello World");

}
//calling function
//greet();
//add is a function, read the parenthesis as function
const add = (a,b) =>{
    return a+b;
}

console.log(`The sum: ${add(5,2)}`)

// they wanted functions to be even shorter
//if function is onlyone line, you can remove curly and return
const sum = (a,b) => a+b;

console.log(`The sum: ${sum(5,2)}`)

//if you have only one parameter you can drop the ()
const square = (a) => a*a;
console.log(`the square a ${square(5)}`);


//call back functions - a function that gets passed as a parameter to another function.
//foreach() is called on a collection
function display(x){
    console.log(x);
}
let numbers = [1,2,3];
//foreach takes a function as a parameter

numbers.forEach(display)
//I can make function right in line
numbers.forEach((x) => console.log(x));
//if you are doing more than one thing then you need {}
numbers.forEach((element,index) => {
    console.log(`the index is ${index}`);
    console.log(`the element is ${element}`);
})












//JavaScript functions

function greet() {
  console.log("Hello World");
}
//calling function
greet();

