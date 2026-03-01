const user = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(user);

// Update the user's age and city
user.age = 31;
user.city = "Los Angeles";

console.log(user);

// delete user city
delete user.city;
console.log(user);
