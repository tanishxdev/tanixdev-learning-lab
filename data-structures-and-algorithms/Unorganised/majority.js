function findMajorityElement(arr) {
  // we can use a hashmap to count occurrences of each element
  // then find the element with count greater than n/2
  let n = arr.length;
  let countMap = new Map();

  for (let num of arr) {
    if (countMap.has(num)) {
      countMap.set(num, countMap.get(num) + 1);
    } else {
      countMap.set(num, 1);
    }
  }

  for (let [key, value] of countMap.entries()) {
    if (value > Math.floor(n / 2)) {
      return key;
    }
  }

  return null; // no majority element
}

// test cases
console.log(findMajorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4])); // Output: 4
console.log(findMajorityElement([3, 3, 4, 2, 4, 4, 2, 4]));
console.log(findMajorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4, 4]));
console.log(findMajorityElement([1, 2, 3, 4, 5]));

// tc O(n), sc O(n) using hashmap

// Optimal Approach: Boyer-Moore Voting Algorithm
function findMajorityElementOptimal(arr) {
  let count = 0;
  let candidate = null;

  // Phase 1: Find a candidate for majority element
  for (let num of arr) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  // Phase 2: Verify the candidate
  count = 0;
  for (let num of arr) {
    if (num === candidate) {
      count++;
    }
  }

  return count > Math.floor(arr.length / 2) ? candidate : null;
}

// test cases
console.log(findMajorityElementOptimal([3, 3, 4, 2, 4, 4, 2, 4, 4])); // Output: 4
console.log(findMajorityElementOptimal([3, 3, 4, 2, 4, 4, 2, 4]));
console.log(findMajorityElementOptimal([3, 3, 4, 2, 4, 4, 2, 4, 4, 4]));
console.log(findMajorityElementOptimal([1, 2, 3, 4, 5]));
// tc O(n), sc O(1) using Boyer-Moore Voting Algorithm
