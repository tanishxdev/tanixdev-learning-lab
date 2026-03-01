// Approach 1: Using slice()

function removeFirstCharacter(arr) {
  return (arr = arr.slice(1));
}

console.log(removeFirstCharacter([1, 10, 100, 1000]));

// Approach 2: Using shift()
function removeFirstCharacterUsingShift(arr) {
  arr.shift(); // Removes the first element from the array
  return arr;
}

console.log(removeFirstCharacterUsingShift([1, 10, 100, 1000]));
