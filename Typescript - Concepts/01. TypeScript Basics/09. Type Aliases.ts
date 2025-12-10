export{};

// Basic Syntax
type myType = number | string;
let value: myType = 10;
value = "Hello";
console.log(value)

// 1. Simple Type Alias with Union

type type_alias = number | string | boolean;

let variable: type_alias;

variable = 1;
console.log(variable);

variable = "geeksforgeeks";
console.log(variable);

variable = true;
console.log(variable);
