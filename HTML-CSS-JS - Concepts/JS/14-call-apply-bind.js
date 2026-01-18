// 2. call() — Immediate execution with custom this

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name} ${punctuation}`;
}
const person = {
  name: "John",
};
const result = greet.call(person, "Hello", "!");
console.log(result); // Output: "Hello, John!"

// 3. apply() — Same as call, arguments as array
function introduce(greeting, age, city) {
  return `${greeting}, I'm ${this.name}, ${age} years old from ${city}`;
}

const user = { name: "Bob" };
const args = ["Hi", 25, "New York"];

console.log(introduce.apply(user, args));