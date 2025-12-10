console.log(a);    // undefined   ← hoisted + initialized as undefined
var a = 5;

console.log(b);    // ReferenceError: Cannot access 'b' before initialization
let b = 10;

console.log(c);    // ReferenceError
const c = 15;