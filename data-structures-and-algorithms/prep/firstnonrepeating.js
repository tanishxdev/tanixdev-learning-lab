function firstNonReapting(str) {
  // create a frequency map to store character counts
  const freqMap = new Map();

  // iterate through the string and populate the frequency map
  for (let char of str) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  // iterate through the string again to find the first non-repeating character
  for (let char of str) {
    if (freqMap.get(char) === 1) {
      return char; // return the first non-repeating cha
      // racter
    }
  }

  return null; // return null if there is no non-repeating character
}
