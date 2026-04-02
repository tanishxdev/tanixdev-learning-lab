// JavaScript gives three ways to declare variables:

// let

let letUserName = "John";
let letUserAge = 30;
let letActive = true;

console.log("letUserName:", letUserName);
console.log("letUserAge:", letUserAge);
console.log("letActive:", letActive);

// reassigning
letUserName = "Jane";
letUserAge = 25;
letActive = false;

console.log("letUserName:", letUserName);
console.log("letUserAge:", letUserAge);
console.log("letActive:", letActive);

// const
const constUserName = "John";
const constUserAge = 30;
const constActive = true;

// Objects with const (Critical Concept)
const user = {
  name: "John",
  age: 30,
  active: true,
};

user.name = "Jane";
user.age = 25;
user.active = false;

console.log("user.name:", user.name);
console.log("user.age:", user.age);
console.log("user.active:", user.active);

// var
var varUserName = "John";
var varUserAge = 30;
var varActive = true;

varUserName = "Jane";
varUserAge = 25;
varActive = false;
