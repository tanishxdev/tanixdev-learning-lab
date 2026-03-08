function countStringCharacter(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

console.log(countStringCharacter("hello world", "o")); // Output: 2
console.log(countStringCharacter("javascript", "a")); // Output: 2

// Using split method

function countStringCharacterSplit(str, char) {
  return str.split(char).length - 1;
}

console.log(countStringCharacterSplit("hello world", "o"));
console.log(countStringCharacterSplit("javascript", "a"));
