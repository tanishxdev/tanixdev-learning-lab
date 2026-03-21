function removeFalsyValue(arr) {
  const falsyValue = [0, "", null, undefined, NaN, false];

  return arr.filter((value) => !falsyValue.includes(value));
  return arr.filter(Boolean); // Alternative using Boolean constructor to filter out falsy values
}

console.log(removeFalsyValue([0, 1, false, 2, "", 3, null])); // Output: [1, 2, 3]

