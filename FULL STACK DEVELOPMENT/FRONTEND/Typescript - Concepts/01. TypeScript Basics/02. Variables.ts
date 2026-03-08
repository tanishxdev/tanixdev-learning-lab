export {};

// 1. Declare Type and Value Together
let name: string = "John";
const age: number = 30;

console.log(`${name}, ${age}`);

// 2. Declare Type Without Value
let city: string;

// 3. Declare Value Without Type (Type Inference)
let country = "INDIA"; // inferred as string

// Variable Declaration Keywords

// var
function testVar() {
    var globalVar = "Global Var";
    console.log(globalVar);
}
testVar();

// let
let count = 3;
if(count > 0) {
    let msg = "Count is positive";
    console.log(msg);
}

// const
const surename = "Smith";
