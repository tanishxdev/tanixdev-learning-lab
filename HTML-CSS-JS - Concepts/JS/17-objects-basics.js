const user = new Object();

user.name = "John";
user.surname = "Smith";

console.log(user.name);
console.log(user.surname);

console.log(user["name"]);
console.log(user["surname"]);

delete user.name;
console.log(user.name);
console.log(user.surname);

console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("surname"));

const calculator = {
  add: function (num) {
    this.result += num;
    return this;
  },
  subtract: function (num) {
    this.result -= num;
    return this;
  },
  getValue() {
    return this.result;
  },
};

calculator.result = 10;
console.log(calculator.add(5).subtract(3).result);

console.log(calculator.getValue());