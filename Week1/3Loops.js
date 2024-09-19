//for while loops
// foreach() is called on a collection and takes a callback function

const cars =["bmw", "volvo", "mini"];
//for of has no index
for (let car of cars){
    console.log(car);
}

//for in goes through objects using key: value
const person = {fName:"john", lName:"Doe", age:25}
for (let x in person){
    console.log(`the key is ${x}`);
    console.log(`the value is ${person[x]}`);
}
