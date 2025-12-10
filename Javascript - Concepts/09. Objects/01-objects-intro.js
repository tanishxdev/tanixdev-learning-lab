// 3.1 Object Literal (Most Common)

let person = {
    username: "John",
    age: 21,
    isMarried: false
};

console.log(person);

// 3.2 Using new Object()
let person2 = new Object(); // Empty object
person2.username = "Smith";
person2.age = 25;
person2.isMarried = true;

console.log(person2);


// 4. Accessing Properties

// Dot Notation
console.log(person2.username);

// Bracket Notation
console.log(person2["age"]);

// Used when:

// Key contains space ("first name")
// Key stored in variable

// 5. Modifying Properties
person2 = {
    username: "John",
    age: 25,
    isMarried: true,
};

console.log(person2)

// 6. Adding New Properties
person2.city = "New York";
person2.country = "USA";

console.log(person2)

// 7. Deleting Properties
delete person2.isMarried;
console.log(person2)

// 8. Check if Property Exists
console.log("isMarried" in person2) // false
console.log(person2.hasOwnProperty("isMarried")) // false

// 9. Iterating Over Objects
for (let key in person2) {
    console.log(key, ":", person2[key]);
}

// 10. Merging Objects : Using spread operator (modern, preferred)

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// 11. Object Length (Number of Keys)
console.log(Object.keys(obj3).length);

// 12. Check if Value is Truly an Object
console.log(typeof obj3 === "object");