# 1. Concept

JavaScript object is a **dynamic key–value data structure**.
Keys represent the property name, and values can be:

1. Primitive values (string, number, boolean)
2. Objects (nested)
3. Functions (called methods)

Objects help group related data and behaviour.

Key properties of objects:

* Mutable (values can change anytime)
* Dynamic (add/remove properties anytime)
* Used for modelling real-world entities

---

# 2. Why Objects?

Because arrays hold only indexed values, but objects provide:

* Custom named properties
* Grouping of data and functions
* Foundation for OOP (Object-Oriented Programming)
* Main building block of DOM, APIs, JSON, etc.

---

# 3. Ways to Create Objects

---

## 3.1 Object Literal (Most Common)

### Syntax

```js
let person = {
    name: "Sourav",    // key: value
    age: 23,
    job: "Developer"
};

console.log(person);
```

### Why preferred?

* Short, clean
* Faster than constructor
* Most used in modern JS

---

## 3.2 Using new Object()

```js
let person = new Object();   // creates empty object
person.name = "Sourav";
person.age = 23;
person.job = "Developer";

console.log(person);
```

### When to use

Rarely needed. Literal syntax is almost always better.

---

# 4. Accessing Properties

### Dot Notation

```js
let obj = { name: "Sourav", age: 23 };
console.log(obj.name);
```

### Bracket Notation

```js
console.log(obj["age"]);
```

Used when:

* Key contains space ("first name")
* Key stored in variable

---

# 5. Modifying Properties

```js
let obj = { name: "Sourav", age: 22 };

obj.age = 23;   // modify
```

---

# 6. Adding New Properties

```js
let car = { model: "Tesla" };

car.color = "Red";        // dot notation
car["year"] = 2024;       // bracket notation
```

---

# 7. Deleting Properties

```js
let car = { model: "Tesla", color: "Red" };

delete car.color;
```

---

# 8. Check if Property Exists

### Using in operator:

```js
"color" in car;
```

### Using hasOwnProperty():

```js
car.hasOwnProperty("model");
```

---

# 9. Iterate Through Properties

```js
let obj = { name: "Sourav", age: 23 };

for (let key in obj) {
    console.log(key + ": " + obj[key]);
}
```

---

# 10. Merging Objects

### Using spread operator (modern, preferred)

```js
let obj1 = { name: "Sourav" };
let obj2 = { age: 23 };

let obj3 = { ...obj1, ...obj2 };
console.log(obj3);
```

---

# 11. Object Length (Number of Keys)

```js
let obj = { name: "Sourav", age: 23 };

console.log(Object.keys(obj).length);
```

---

# 12. Check if Value is Truly an Object

```js
typeof obj === "object" && obj !== null;
```

Reason:
`typeof null` is also `"object"` due to a JS design bug, so must check both.

---

# 13. {} vs new Object()

(Detailed Differences)

| Feature     | {} Literal    | new Object()                                              |
| ----------- | ------------- | --------------------------------------------------------- |
| Syntax      | Short, clean  | Longer                                                    |
| Performance | Faster        | Slightly slower                                           |
| Usage       | Most common   | Rare                                                      |
| Readability | Very readable | Less readable                                             |
| Problems    | None          | Can conflict with custom Object constructor if overridden |

### Conclusion

Always prefer object literals `{}`.

---

# 14. Object vs Map

(High-Importance Interview Table)

| Feature     | Object                         | Map                                    |
| ----------- | ------------------------------ | -------------------------------------- |
| Key Types   | Only strings or symbols        | Any type (objects, numbers, functions) |
| Order       | Not guaranteed                 | Maintains insertion order              |
| Size        | No direct size property        | map.size                               |
| Iteration   | Harder                         | Easy: for...of, map.forEach            |
| Performance | Slower for frequent add/remove | Faster for dynamic data                |
| Use Case    | Structured data                | Dynamic key-value operations           |

### When to use Map instead of Object?

* Need non-string keys
* Need frequent insert/delete
* Need guaranteed order
* Need direct size count

---

# 15. Common Mistakes

1. Forgetting bracket notation when key is dynamic.
2. Treating objects like arrays.
3. Assuming order of properties is guaranteed.
4. Modifying objects unintentionally because objects are passed by reference.

---

# 16. Short Intuition Summary (Exam/Interview)

* Objects store related data.
* Fastest way to create object is literal `{}`.
* Dot → simple access, bracket → dynamic access.
* Use delete to remove properties.
* Spread syntax merges objects cleanly.
* Use Map when keys are not simple strings.

---

# 17. Mini Interview Questions (for revision)

1. What is an object in JavaScript?
2. Difference between object literal and constructor method?
3. Why are objects mutable?
4. What is the difference between Map and Object?
5. How do you check if a property exists?
6. Why is `typeof null === "object"` a problem?
7. Difference between shallow copy and deep copy in objects?
8. How do you clone an object?
