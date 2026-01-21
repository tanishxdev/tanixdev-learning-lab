# Object Methods in JavaScript

(Object.keys, values, entries, assign, fromEntries, etc.)

---

## 1. Why Object Methods Exist (Big Picture)

In real applications, objects are everywhere:

* API responses
* Configuration objects
* Form data
* User profiles
* Feature flags
* Settings

But **plain objects are not iterable like arrays**.

You **cannot directly use**:

* `map`
* `filter`
* `reduce`

on objects.

So JavaScript provides **Object utility methods** to:

* Convert objects → arrays
* Process data using array methods
* Convert back → objects

This lesson is about **bridging objects and arrays safely and efficiently**.

---

## 2. Object.keys()

### Concept

`Object.keys(obj)` returns:

* An **array**
* Containing **only enumerable own property names**
* Excludes inherited and non-enumerable properties

Mental model:

> “Give me all the keys so I can loop, filter, or transform.”

---

### Code (Key Extraction)

```js
const person = {
    name: "Alice",
    age: 30,
    city: "New York",
    occupation: "Developer"
};

// Get array of property names
const keys = Object.keys(person);
console.log(keys); // ["name", "age", "city", "occupation"]
```

---

### Iterating Over Keys

```js
Object.keys(person).forEach(key => {
    console.log(`${key}: ${person[key]}`);
});
```

Why this pattern works:

* `Object.keys()` → array
* Arrays support `forEach`
* `person[key]` accesses the value dynamically

---

### Filtering Properties

```js
const stringProperties = Object.keys(person).filter(key => 
    typeof person[key] === 'string'
);
console.log(stringProperties); // ["name", "city", "occupation"]
```

Mental model:

* Convert object → keys array
* Filter based on value conditions
* Keep only required properties

---

## 3. Object.values()

### Concept

`Object.values(obj)` returns:

* An **array of values**
* Order matches `Object.keys()`

Used when:

* Keys are not important
* You care only about numeric or string data

---

### Code (Values Extraction)

```js
const scores = {
    math: 95,
    science: 87,
    english: 92,
    history: 88
};

// Get array of values
const values = Object.values(scores);
console.log(values); // [95, 87, 92, 88]
```

---

### Aggregation Example (Average)

```js
const average =
    Object.values(scores).reduce((sum, score) => sum + score, 0) /
    Object.values(scores).length;

console.log(average); // 90.5
```

Conceptual flow:

1. Convert object → array
2. Reduce to total
3. Divide by count

---

### Finding Max Value

```js
const maxScore = Math.max(...Object.values(scores));
console.log(maxScore); // 95
```

Why spread works:

* `Math.max` expects individual numbers
* Spread converts array → arguments

---

## 4. Object.entries()

### Concept

`Object.entries(obj)` returns:

* An array of `[key, value]` pairs
* Most powerful object method
* Best bridge between objects and arrays

Mental model:

> “Turn object into rows.”

---

### Code (Entries)

```js
const product = {
    name: "Laptop",
    price: 999,
    brand: "Dell",
    inStock: true
};

const entries = Object.entries(product);
console.log(entries);
```

Result shape:

```js
[
  ["name", "Laptop"],
  ["price", 999],
  ["brand", "Dell"],
  ["inStock", true]
]
```

---

### Convert Object → Map

```js
const productMap = new Map(Object.entries(product));
```

Why Map:

* Better performance for frequent lookups
* Keys can be non-strings

---

### Filtering Entries

```js
const stringEntries = Object.entries(product).filter(
    ([key, value]) => typeof value === 'string'
);
```

Destructuring clarity:

* `key` → property name
* `value` → property value

---

### Transform Object Using entries + fromEntries

```js
const upperCaseProduct = Object.fromEntries(
    Object.entries(product).map(([key, value]) => [
        key.toUpperCase(),
        typeof value === 'string' ? value.toUpperCase() : value
    ])
);
```

Mental flow:

1. Object → entries
2. Transform each pair
3. Entries → object

---

## 5. Object.assign()

### Concept

`Object.assign(target, ...sources)`:

* Copies properties from sources → target
* Performs **shallow copy**
* Mutates target

---

### Overwriting Properties

```js
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const result = Object.assign(target, source);
console.log(result);
console.log(target);
```

Important rule:

* Later sources override earlier keys

---

### Creating a New Object Safely

```js
const original = { a: 1, b: 2 };
const extension = { c: 3, d: 4 };

const combined = Object.assign({}, original, extension);
```

Why `{}` first:

* Prevents mutation
* Creates fresh object

---

### Multiple Sources

```js
const finalPrefs = Object.assign({}, defaults, userPrefs, sessionPrefs);
```

Priority:

* Rightmost object wins

---

## 6. Object.fromEntries()

### Concept

`Object.fromEntries()` is the **reverse of Object.entries()**

Used when:

* You filtered or transformed entries
* You want an object back

---

### Basic Conversion

```js
const entries = [["name", "Alice"], ["age", 30], ["city", "Boston"]];
const person = Object.fromEntries(entries);
```

---

### Transform Values

```js
const discountedPrices = Object.fromEntries(
    Object.entries(prices).map(([item, price]) => [item, price * 0.9])
);
```

---

### Filtering Objects

```js
const activeUsers = Object.fromEntries(
    Object.entries(users).filter(([name, user]) => user.active)
);
```

---

## 7. Object.hasOwnProperty() vs Object.hasOwn()

### Concept

These methods check:

* Whether a property belongs **directly to the object**
* Not inherited from prototype

---

### Traditional Way

```js
person.hasOwnProperty('name');
```

Problem:

* Can break if object overrides method

---

### Modern Safe Way (ES2022)

```js
Object.hasOwn(person, 'name');
```

Recommended for:

* Security
* Prototype pollution safety

---

### Safe Iteration Pattern

```js
for (let key in person) {
    if (Object.hasOwn(person, key)) {
        console.log(`${key}: ${person[key]}`);
    }
}
```

---

## 8. Object.getOwnPropertyNames()

### Concept

Returns:

* All own string properties
* Including non-enumerable ones

---

```js
Object.defineProperty(obj, 'hidden', {
    value: "I'm not enumerable",
    enumerable: false
});
```

Difference:

* `Object.keys()` → enumerable only
* `Object.getOwnPropertyNames()` → all

---

## 9. Object.freeze(), seal(), preventExtensions()

### Conceptual Comparison

| Method            | Add | Modify | Delete |
| ----------------- | --- | ------ | ------ |
| freeze            | ❌   | ❌      | ❌      |
| seal              | ❌   | ✅      | ❌      |
| preventExtensions | ❌   | ✅      | ✅      |

---

### freeze()

```js
const frozenUser = Object.freeze({ ...user });
```

Use cases:

* Redux state
* Constants
* Config safety

---

### seal()

```js
const sealedUser = Object.seal({ ...user });
```

Use cases:

* Controlled mutation
* APIs with fixed schema

---

### preventExtensions()

```js
const extensibleUser = Object.preventExtensions({ ...user });
```

Use cases:

* Prevent accidental property injection

---

## 10. Practical Utility Patterns (Real Projects)

All utilities below rely on **entries + fromEntries**, which is the core pattern.

---

### pick / omit / mapValues / filter

```js
pick(obj, keys)
omit(obj, keys)
mapValues(obj, fn)
filter(obj, predicate)
```

Mental model:

> Treat object like array of pairs → transform → rebuild

---

### deepMerge()

Important concept:

* Shallow copy is not enough for nested objects
* Recursive merge required

---

## 11. Real-World Use Cases Covered

* Config merging
* Form cleanup
* API response normalization
* Validation engines
* Data indexing
* Grouping & counting

All patterns use:

* `Object.entries`
* `Object.fromEntries`
* `Object.assign`
* Safe property checks

---

## 12. Performance & Best Practices

Key rules:

* Cache `Object.keys()` for large objects
* Prefer `Object.hasOwn()`
* Use `Map` for frequent lookups
* Prefer spread `{ ...obj }` for readability
* Use objects for structure, arrays for iteration

---

## Final Mental Model

1. Objects are **not iterable**
2. Convert objects → arrays
3. Process with array methods
4. Convert back → objects
5. Choose immutability level intentionally

---