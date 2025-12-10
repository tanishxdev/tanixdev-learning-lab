// ======================================================
// FUNCTIONS - CLEAN FIXED VERSION (NO ERRORS)
// ======================================================


// ======================================================
// 1. FUNCTION DECLARATION
// ======================================================

console.log("\n--- Function Declaration ---");

console.log("declAdd(2,3) =>", declAdd(2, 3));

function declAdd(a, b) {
  return a + b;
}

const obj1 = {
  value: 10,
  getValue() {
    return this.value;
  },
};

console.log("obj1.getValue() =>", obj1.getValue());



// ======================================================
// 2. FUNCTION EXPRESSION
// ======================================================

console.log("\n--- Function Expression ---");

try {
  console.log(exprAdd(1, 2));
} catch (e) {
  console.log("Calling before assignment fails:", e.message);
}

const exprAdd = function (a, b) {
  return a + b;
};

console.log("exprAdd(1,2) =>", exprAdd(1, 2));


// ---- FIXED POSITION: NOW defined BEFORE calling ----
const namedExpr = function multiply(a, b) {
  return a * b;
};

console.log("namedExpr(2,3) =>", namedExpr(2, 3)); // Works



// ======================================================
// 3. ARROW FUNCTION
// ======================================================

console.log("\n--- Arrow Functions ---");

const arrowAdd = (a, b) => a + b;
console.log("arrowAdd(3,4) =>", arrowAdd(3, 4));

const user = {
  name: "Tanish",

  greetFunc() {
    return "Hi " + this.name;
  },

  greetArrow: () => {
    return "Hi no-name (arrow has no this)";
  },
};

console.log("greetFunc:", user.greetFunc());
console.log("greetArrow:", user.greetArrow());

// Clean arguments demo
function normalArgs(a, b) {
  console.log("normal function arguments:", a, b);
}

const arrowArgs = (...args) => {
  console.log("arrow rest args:", args);
};

normalArgs(1, 2);
arrowArgs(1, 2);



// ======================================================
// 4. IIFE
// ======================================================

console.log("\n--- IIFE ---");

(function () {
  console.log("IIFE: Running immediately");
})();

(() => {
  console.log("IIFE Arrow: Running immediately");
})();

const counterModule = (function () {
  let count = 0;
  return {
    inc() {
      count++;
      return count;
    },
    get() {
      return count;
    },
  };
})();

console.log("counterModule.get()", counterModule.get());
console.log("counterModule.inc()", counterModule.inc());



// ======================================================
// 5. ASYNC FUNCTION
// ======================================================

console.log("\n--- Async Function ---");

async function asyncDemo() {
  const wait = (ms) => new Promise((res) => setTimeout(res, ms));

  console.log("async start");
  await wait(100);
  console.log("async after 100ms");
  return "done";
}

asyncDemo().then((res) => console.log("asyncDemo result:", res));

async function asyncError() {
  throw new Error("failure");
}

asyncError().catch((e) => console.log("caught:", e.message));



// ======================================================
// 6. GENERATOR FUNCTION
// ======================================================

console.log("\n--- Generator Function ---");

function* genFunction() {
  yield 1;
  yield 2;
  return 3;
}

const g = genFunction();
console.log("next()", g.next());
console.log("next()", g.next());
console.log("next()", g.next());
console.log("next()", g.next());



// ======================================================
// 7. CONSTRUCTOR FUNCTION
// ======================================================

console.log("\n--- Constructor Function ---");

function Person(name) {
  if (!(this instanceof Person)) return new Person(name);
  this.name = name;
}

Person.prototype.greet = function () {
  return "Hi " + this.name;
};

const p1 = new Person("Tanish");
console.log("p1.greet()", p1.greet());


class PersonClass {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return "Hi " + this.name;
  }
}

const p2 = new PersonClass("Ami");
console.log("p2.greet()", p2.greet());


const badObj = {
  value: 10,
  getValue: () => this?.value,
};
console.log("badObj.getValue() =>", badObj.getValue());


const goodObj = {
  value: 10,
  getValue() {
    return this.value;
  },
};
console.log("goodObj.getValue() =>", goodObj.getValue());


function Car(model) {
  if (!(this instanceof Car)) return new Car(model);
  this.model = model;
}

const car1 = new Car("BMW");
console.log("car1.model =>", car1.model);



// ======================================================
// 8. MINI PRACTICAL DEMOS
// ======================================================

console.log("\n--- Practical Comparisons ---");

function showNormalArgs() {
  console.log("normal args:", arguments[0]);
}

const showArrowArgs = (...args) => {
  console.log("arrow rest:", args[0]);
};

showNormalArgs(100);
showArrowArgs(100);


// Timer
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
  }, 100);
}

const t = new Timer();
setTimeout(() => {
  console.log("Timer seconds:", t.seconds);
}, 350);



// ======================================================
// END OF FILE
// ======================================================
