
# **7. What is Closure in JavaScript?**

Forget definitions for 2 minutes.

First understand **the problem closures solve**.

---

## **1. The real problem**

Imagine this:

```js
function counter() {
  let count = 0;

  count++;
  return count;
}

console.log(counter()); // ?
console.log(counter()); // ?
```

What do you expect?

Most beginners think:

```
1
2
```

But actual output:

```
1
1
```

Why?

Because every time `counter()` runs,
`count` is created **again** and destroyed when function ends.

So the real problem is:

> How do we make a function **remember old values**?

---

## **2. The idea behind closure**

We want:

* `count` to stay alive
* even after the function finishes

So we return a function instead of a value.

---

## **3. Closure example (step by step)**

```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter();
counter();
counter();
```

Output:

```
1
2
3
```

Now let’s **see what happened in memory**.

---

## **4. What actually happened**

When we ran:

```js
const counter = outer();
```

JavaScript did this:

* Created `count = 0`
* Created `inner()`
* Returned `inner`
* **Did NOT delete `count`**

Why?

Because `inner()` is still using it.

So JavaScript says:

> “I must keep `count` alive.”

This kept-alive memory is called **closure**.

---

## **5. Simple definition (now it will make sense)**

> A closure is when a function **remembers variables from its outer scope**, even after that outer function has finished.

---

## **6. Real-world analogy**

Think of a **backpack**.

* `inner()` is a person
* `count` is something inside their backpack

Even after leaving the house (`outer()` finished),
they still carry the backpack.

That backpack = **closure**

---

## **7. Why is closure powerful?**

### **Private variables**

```js
function createUser() {
  let password = "1234";

  return {
    check(p) {
      return p === password;
    }
  };
}

const user = createUser();

user.check("1234"); // true
user.password;     // undefined
```

No one can directly access `password`.
That is **security using closure**.

---

## **8. Interview killer line**

Say this:

> “A closure is a function together with the variables it captured from its lexical scope.”

---

## **9. One-line mental model**

> Closure = Function + its remembered variables

---

## **10. Most common interview trap**

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

Output:

```
3
3
3
```

Why?

Because all functions share **one `i`** via closure.

Using `let` creates **new closure per loop**.

---
