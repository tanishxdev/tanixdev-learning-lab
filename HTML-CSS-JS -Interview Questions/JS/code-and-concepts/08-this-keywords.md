

# **8. What is the `this` keyword and how does its context change?**

Forget definitions first.
Let’s see the real problem.

---

## **1. The real confusion**

Look at this:

```js
const user = {
  name: "Tanish",
  sayHi() {
    console.log(this.name);
  }
};

user.sayHi();   // ?
```

Output:

```
Tanish
```

Now:

```js
const hi = user.sayHi;
hi();   // ?
```

Output:

```
undefined
```

Same function.
Same code.
Different result.

Why?

Because **`this` changed**.

---

## **2. The rule of `this` (the only rule you need)**

> `this` is decided by **how a function is called**, not where it is written.

Not:

```js
this = where the function is defined
```

But:

```js
this = who is calling the function
```

---

## **3. Four main call types**

### **1) Function call**

```js
function show() {
  console.log(this);
}

show();
```

Browser:

```
window
```

Because no object is calling it → global object.

---

### **2) Method call**

```js
const user = {
  name: "Tanish",
  greet() {
    console.log(this.name);
  }
};

user.greet();
```

Here:
`user` is calling `greet`

So:

```
this = user
```

---

### **3) Detached function (trap)**

```js
const user = {
  name: "Tanish",
  greet() {
    console.log(this.name);
  }
};

const g = user.greet;
g();
```

Who called `g()`?

No object → global.

So:

```
this = window
```

`window.name` is empty → undefined.

---

### **4) Arrow function**

Arrow functions **do not have their own `this`**.

They copy `this` from where they were created.

```js
const user = {
  name: "Tanish",
  greet() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

user.greet();
```

Here:

* `inner` takes `this` from `greet`
* `greet` was called by `user`
* so `this = user`

So it prints:

```
Tanish
```

---

## **4. Event handler**

```js
button.addEventListener("click", function () {
  console.log(this);
});
```

Here:

```
this = button
```

Arrow version:

```js
button.addEventListener("click", () => {
  console.log(this);
});
```

Here:

```
this = window
```

Because arrow copied from outer scope.

---

## **5. How to force `this`**

```js
function greet() {
  console.log(this.name);
}

const user = { name: "Tanish" };

greet.call(user);
```

`call`, `apply`, `bind` manually set `this`.

---

## **6. One-line interview answer**

> "`this` refers to the object that is calling the function. In arrow functions, `this` is taken from the surrounding scope."

---