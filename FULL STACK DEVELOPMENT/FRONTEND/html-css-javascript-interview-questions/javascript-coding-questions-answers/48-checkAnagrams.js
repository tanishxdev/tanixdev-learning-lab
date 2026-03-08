function checkAnagrams(str1, str2) {
  if (str1.lenth != str2.length) {
    return false;
  }

  let s1 = str1.split("").sort().join("");
  let s2 = str2.split("").sort().join("");
  return s1 === s2;
}

// Example usage:
console.log(checkAnagrams("listen", "silent"));
console.log(checkAnagrams("hello", "world"));

// TC: O(n log n) due to the sorting step, where n is the length of the input strings
// SC: O(n) for storing the sorted versions of the strings
