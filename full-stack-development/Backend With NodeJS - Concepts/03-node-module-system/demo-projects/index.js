const stringUtils = require("./utils/stringUtils");
const numberUtils = require("./utils/numberUtils");

console.log(stringUtils.toUpper("hello world"));
console.log(stringUtils.reverse("hello world"));
console.log(numberUtils.isEven(10));
console.log(numberUtils.factorial(5));