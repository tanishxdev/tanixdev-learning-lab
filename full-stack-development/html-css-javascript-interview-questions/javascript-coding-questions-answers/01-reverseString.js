// Approach 1: Iterative (for loop)

function reverseStringIterative(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseStringIterative("tanish"));

// Approach 3: Built-in Methods

function reverseStringUsingBuiltInMethods(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStringUsingBuiltInMethods("tanish"));
