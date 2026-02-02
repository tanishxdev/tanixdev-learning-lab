// Approach 1 — Brute Force (Build New String from End)

function stringReversal(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

const testStr = "hello";
const reversed = stringReversal(testStr);
console.log(reversed); // Output: "olleh"

// Approach 2 — Better (Two Pointer Swap via Array)
function stringReversalTwoPointer(str) {
  let arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  // Swap characters until pointers meet
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr.join("");
}

const testStr2 = "hello";
const reversed2 = stringReversalTwoPointer(testStr2);
console.log(reversed2); // Output: "olleh"

// Approach 3 — Optimal (Using Built-in Methods)
function stringReversalOptimal(str) {
  return str.split("").reverse().join("");
}

const testStr3 = "hello";
const reversed3 = stringReversalOptimal(testStr3);
console.log(reversed3); // Output: "olleh"
