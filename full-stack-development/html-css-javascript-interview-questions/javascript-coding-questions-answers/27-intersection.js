// Approach 1: Using Set and filter()

function arrayIntersection(arr1, arr2) {
  const set2 = new Set(arr2);

  return arr1.filter((value) => set2.has(value));
}
console.log(arrayIntersection([5, 6, 7], [6, 7, 8]));

// Approach 2: Using filter() and includes()
function arrayIntersectionIncludes(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}

console.log(arrayIntersectionIncludes([5, 6, 7], [6, 7, 8]));
