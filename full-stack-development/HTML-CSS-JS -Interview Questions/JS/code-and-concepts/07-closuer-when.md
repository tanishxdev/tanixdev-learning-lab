

# **When does a Closure happen?**

Short answer:

> **A closure is created whenever a function is defined inside another function AND that inner function is used outside.**

Two conditions are required:

```
1. Function inside another function  
2. Inner function is returned, stored, or used later
```

If both are true → **closure exists**

---

## **1. Case where closure DOES NOT happen**

```js
function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  inner(); // called immediately
}

outer();
```

Here:

* `inner()` runs
* prints `10`
* then `outer()` ends
* everything is deleted

No closure is needed because `inner()` was not used later.

So:

> No memory needs to be preserved → no closure

---

## **2. Case where closure DOES happen**

```js
function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  return inner;
}

const fn = outer();
fn();
```

Here:

* `outer()` finished
* BUT `inner()` is still alive
* `inner()` needs `x`
* So JS **keeps `x` in memory**

This is a closure.

---

## **3. One powerful rule**

Say this in interviews:

> A closure is created when a function “escapes” its lexical scope.

Meaning:

* It is returned
* or stored in a variable
* or passed somewhere
* or used asynchronously

---

## **4. Another closure case (async)**

```js
function fetchData() {
  let data = "server response";

  setTimeout(function () {
    console.log(data);
  }, 1000);
}

fetchData();
```

`fetchData()` ends.
But `setTimeout` runs later.

Still prints `data`.

So:

> `data` was kept alive by closure

---

## **5. Syntax?**

There is **NO special syntax** for closure.

Closure is not written — it **happens automatically**.

You never write:

```js
closure(...)
```

It happens whenever JS sees:

> A function using variables from an outer function that is already finished.

---

## **6. How to detect closure**

If you see code like:

```js
return function () { ... }
```

or

```js
setTimeout(() => { ... })
```

or

```js
element.onclick = function() { ... }
```

and inside that function you see outer variables →
Closure is happening.

---

## **7. One-line mental test**

Ask yourself:

> “Is this inner function still alive after its parent finished?”

If yes → closure exists
If no → no closure

---