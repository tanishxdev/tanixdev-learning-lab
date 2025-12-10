# **1. Concept: What is a Number Object?**

JavaScript has:

1. **Primitive number**
   Example:

   ```js
   let x = 10;
   ```

2. **Number object (wrapper object)**
   Created using the `Number()` constructor or `Number()` function.

JavaScript automatically wraps primitive numbers into Number objects **when you call methods**, so you almost never need to manually create a Number object.

---

# **2. Why Number Object Exists?**

In JavaScript:

* Primitive values **do not have methods**
* But we write:

```js
(20).toString();
(3.14).toExponential();
```

To support this, JS temporarily wraps the primitive inside the **Number object**.

So Number object is mainly used:

* Internally by JavaScript
* For explicit conversions

---

# **3. Ways to Create Numbers in JavaScript**

## **A) Normal Primitive Number (Recommended)**

```html
<script>
    let a = 10;     // integer
    let b = 1.25;   // float
</script>
```

Primitive type → `number`

---

## **B) Using Number() Function (Conversion)**

```js
let num = Number("10");
console.log(num);      // 10 (converted)
console.log(typeof num); // "number"
```

### Why use Number()?

* To convert string → number
* To check invalid numeric input (it returns **NaN** for invalid numbers)

---

## **C) Using new Number() Constructor (Creates Object)**

```js
let n = new Number(10);
console.log(typeof n); // "object"
```

### Not recommended

Because:

```js
10 === new Number(10);   // false
```

Primitive and objects behave differently in comparisons.

---

# **4. Example From GFG**

```js
let num = Number("10");
console.log(num == 10); // true
```

Because Number("10") → returns **primitive 10**

---

# **5. Number Object Properties (Very Important)**

JavaScript Number object comes with predefined constants.

We will explain each.

---

## **1. Number.MAX_VALUE**

Largest positive number JS can store.

```js
console.log(Number.MAX_VALUE);
```

Output:

```
1.7976931348623157e+308
```

---

## **2. Number.MIN_VALUE**

Smallest positive number (closest to zero).

```js
console.log(Number.MIN_VALUE);
```

Output:

```
5e-324
```

Important:

* MIN_VALUE is **not** negative
* It is the smallest **positive** number above zero

---

## **3. Number.NaN**

Represents **Not-a-Number**.

```js
console.log(Number.NaN); // NaN
```

GFG incorrectly prints "undefined" but actual value is **NaN**.

---

## **4. Number.NEGATIVE_INFINITY**

Value lower than any representable number.

```js
console.log(Number.NEGATIVE_INFINITY);
```

Output:

```
-Infinity
```

Occurs when number becomes too large in negative direction.

---

## **5. Number.POSITIVE_INFINITY**

Value greater than any representable number.

```js
console.log(Number.POSITIVE_INFINITY);
```

Output:

```
Infinity
```

Occurs when:

```js
1 / 0  // Infinity
```

---

# **6. Summary Table**

| Property                   | Meaning                               |
| -------------------------- | ------------------------------------- |
| `Number.MAX_VALUE`         | Largest number JS can store           |
| `Number.MIN_VALUE`         | Smallest positive number JS can store |
| `Number.NaN`               | Not-a-Number                          |
| `Number.NEGATIVE_INFINITY` | Less than MIN_VALUE                   |
| `Number.POSITIVE_INFINITY` | Greater than MAX_VALUE                |

---

# **7. Clean Code Summary (Line-by-Line Comments)**

```js
// Converting string to number (primitive)
let num1 = Number("100");     
console.log(num1);            // 100

// Creating Number object (avoid in real code)
let num2 = new Number(50);
console.log(typeof num2);     // "object"

// Number constants
console.log(Number.MAX_VALUE);          // Largest possible JS number
console.log(Number.MIN_VALUE);          // Smallest positive number
console.log(Number.NaN);               // NaN (Not a Number)
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity
```

---

# **8. Interview Notes**

1. JavaScript has **primitive number** and **Number object (wrapper)**.
2. `Number()` → returns primitive
3. `new Number()` → returns object (rarely used)
4. NaN is a numeric value (type = number)
5. Infinity and -Infinity represent overflow conditions
6. `Number.MAX_VALUE` is huge (~1.79e+308)
7. `Number.MIN_VALUE` is very small positive number (~5e-324)

---

# **9. Interview Questions (10)**

1. What is the difference between `Number()` and `new Number()`?
2. Why should we avoid using Number objects?
3. What is NaN? Why is its type "number"?
4. What is the value of `Number.MAX_VALUE`?
5. What is the smallest positive number in JS?
6. What happens when you divide a number by 0?
7. Difference between `NaN === NaN` and `Number.isNaN()`?
8. Why does `"10" + 20` give `"1020"` but `Number("10") + 20` gives `30`?
9. What are primitive wrapper objects?
10. How does JavaScript internally treat primitive numbers when using methods like `toString()`?

---
