// Object to String

const user = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "coding"],
  active: true,
};

const jsonString = JSON.stringify(user);
console.log(jsonString);

const formattedString = JSON.stringify(user, null, 2);
console.log(formattedString);

// replacer- filtering properties

const filteredString = JSON.stringify(user, ["name", "age"], 2);
console.log(filteredString);

// String to Object

const jsonData = `{
  "name": "Alice",
  "age": 25,
  "hobbies": ["reading", "coding"],
  "active": true
}`;

const userObject = JSON.parse(jsonData);
console.log(userObject);

// 3. Local Storage (Browser Persistence)

localStorage.setItem("username", "john_doe");
localStorage.setItem("theme", "dark");
localStorage.setItem("fontSize", "16");

// storing objects
const userSettings = {
  language: "en",
  notifications: true,
  autoSave: false,
};

localStorage.setItem(`userSettings`, JSON.stringify(userSettings));
