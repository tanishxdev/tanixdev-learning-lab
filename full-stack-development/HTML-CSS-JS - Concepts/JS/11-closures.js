// 3. Basic Closure Example (Your Code + Deep Explanation)

function outerFunction(x) {
  let outerVar = x;

  function innerFunction(y) {
    return outerVar + y;
  }

  return innerFunction;
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8 (5 + 3)

// 4. How Closures Work Internally (Your Example)
function createGreeting(greeting) {
  return function (name) {
    return greeting + ", " + name + "!";
  };
}

const sayHello = createGreeting("Hello");
console.log(sayHello("Alice")); // "Hello, Alice!"

const sayGoodBye = createGreeting("Goodbye");
console.log(sayGoodBye("Bob")); // "Goodbye, Bob!"

// 5. Practical Use Case 1: Counter (State Preservation)
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// 6. Practical Use Case 2: Private Variables
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposite: function (amount) {
      if (amount > 0) {
        balance += amount;
        return balance;
      }
      return "Invalid amount. Please enter a positive number.";
    },
    withdraw: function (amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient funds or invalid amount.";
    },
    getBalance: function () {
      return balance;
    },
  };
}

const bankAccount = createBankAccount(1000);
console.log(bankAccount.deposite(500)); // 1500
console.log(bankAccount.withdraw(200)); // 1300
console.log(bankAccount.getBalance()); // 1300

// 7. Function Factory Pattern
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10

// 8. Closures + Loops (Common Pitfall)

function createFunctions() {
  let functions = [];

  for (var i = 0; i < 3; i++) {
    functions.push(function () {
      return i;
    });
  }

  return functions;
}

const functions = createFunctions();
console.log(functions[0]()); // 3
console.log(functions[1]()); // 3
console.log(functions[2]()); // 3

// Solution 1: let (Block Scope)

/*
for (let i = 0; i < 3; i++) {
  functions.push(function () {
    return i;
  });
}
   */
