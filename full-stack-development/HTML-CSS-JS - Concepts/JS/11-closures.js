// 3. Basic Closure Example (Your Code + Deep Explanation)

function outerFunction(x) {
  let outerVariable = x;

  function innerFunction(y) {
    return outerVariable + y;
  }

  return innerFunction;
}

const closureExample = outerFunction(5);
console.log(closureExample(10)); // Output: 15

// 5. Practical Use Case 1: Counter (State Preservation)

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

// 6. Practical Use Case 2: Private Variables

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function (amount) {
      if (amount > 0) {
        balance += amount;
        return balance;
      }
      return "Invalid amount";
    },

    withdraw: function (amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient funds";
    },

    getBalance: function () {
      return balance;
    },
  };
}

const myAccount = createBankAccount(100);
console.log(myAccount.getBalance()); // Output: 100
console.log(myAccount.deposit(50)); // Output: 150
console.log(myAccount.withdraw(30)); // Output: 120
console.log(myAccount.getBalance()); // Output: 120
console.log(myAccount.withdraw(120)); // Output: 0
console.log(myAccount.withdraw(10)); // Output: "Insufficient funds"
