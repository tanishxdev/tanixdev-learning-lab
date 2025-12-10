// 6. Rest Parameters (...)

function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// 7. Default Parameters

function greet(username = "guest") {
    console.log(`Hi ${username}`);
}
greet(); // Hi guest
greet("Tanish"); // Hi Tanish

// 8. return Statement
function createAdder(x) {
  return function(y) {  // returning a function → closure
    return x + y;
  };
}
const add5 = createAdder(5);
console.log(add5(10)); // 15