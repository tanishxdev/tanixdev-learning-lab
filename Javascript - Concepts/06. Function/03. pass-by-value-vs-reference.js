// Primitives → Pass by Value (copy)
let a = 10;
function inc(x) {
  x = 20;
}
inc(a);
console.log(a); // 10 (unchanged)

// Objects → Pass by Reference Value (shared reference)
let obj = { value: 10 };
function modify(o) {
  o.value = 99;
}
modify(obj);
console.log(obj.value); // 99 (changed)
