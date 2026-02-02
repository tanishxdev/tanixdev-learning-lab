// Case 1: Primitive Passed to Function
function modifyPrimitive(x) {
  x = 20; // Changing x does not affect the original variable
  console.log(x); // 20
}

let a = 10;
modifyPrimitive(a);
console.log(a); // 10

// Case 2: Object Passed to Function

function update2(user) {
  user.name = "Rahul";
}

let obj = { name: "Tanish" };
update2(obj);

console.log(obj.name); // Rahul
