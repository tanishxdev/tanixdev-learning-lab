// Import lodash library
const _ = require('lodash');

// Sample array with duplicates
const numbers = [10, 20, 20, 30, 40, 40];

// Use lodash's 'uniq' function to remove duplicates
const uniqueNumbers = _.uniq(numbers);

// Log the result
console.log("Original Array:", numbers);
console.log("Unique Array:", uniqueNumbers);