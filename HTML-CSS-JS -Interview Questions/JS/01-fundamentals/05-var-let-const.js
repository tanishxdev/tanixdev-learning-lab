// Example: Block Scope vs Function Scope
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

// console.log(b); // ReferenceError
// console.log(c); // ReferenceError
console.log(a); // 10
