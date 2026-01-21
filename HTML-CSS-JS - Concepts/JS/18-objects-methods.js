// 2. Object.keys()
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// get array of property names
const keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'city']

// iterate over keys
for (const key of keys) {
  console.log(`${key}: ${person[key]}`);
}

// filtering properties
const stringProperties = Object.keys(person).filter(key => 
    typeof person[key] === 'string'
);
console.log(stringProperties); // ["name", "city", "occupation"]
