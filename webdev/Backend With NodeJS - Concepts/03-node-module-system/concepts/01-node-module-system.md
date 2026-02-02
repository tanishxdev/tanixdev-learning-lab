# Common Mistakes & Interview Traps (Node Module System)

---

## 1. Thinking Modules Are Global by Default ❌

### Mistake

Assuming variables declared in one file are available in another file automatically.

```js
// a.js
const x = 10;

// b.js
console.log(x); // ❌ ReferenceError
```

### Reality

* Every file has its **own private scope**
* Variables are **not shared** unless explicitly exported

### Correct mental model

```
Each file = isolated scope
Sharing happens only via module.exports
```

### Interview trap

**Q:** Why can’t you access variables from another file directly in Node.js?
**Answer:**
“Because each file is treated as a separate module with its own scope.”

---

## 2. Forgetting to Export Functions ❌

### Mistake

Defining functions but not exporting them.

```js
function add(a, b) {
  return a + b;
}
```

Then trying to use:

```js
const math = require('./math');
math.add(2, 3); // ❌ undefined
```

### Reality

* Functions are **private by default**
* Nothing is accessible unless attached to `module.exports`

### Fix

```js
module.exports = { add };
```

### Interview trap

**Q:** Why is `undefined` returned from a required module?
**Answer:**
“Because the function was not exported via `module.exports`.”

---

## 3. Mismatch Between `module.exports` and `require()` Usage ❌

### Mistake

Exporting a single function but consuming it like an object.

```js
// utils.js
module.exports = function() {};
```

```js
const utils = require('./utils');
utils.doSomething(); // ❌
```

### Reality

* `require()` returns **exactly what `module.exports` points to**

### Correct usage

```js
const fn = require('./utils');
fn();
```

### Interview trap

**Q:** What does `require()` return in Node.js?
**Answer:**
“It returns the value of `module.exports`.”

---

## 4. Overwriting `module.exports` Multiple Times ❌

### Mistake

```js
module.exports = add;
module.exports = multiply;
```

### Reality

* The second assignment **overwrites** the first one
* Only the last value survives

### Correct approach

```js
module.exports = {
  add,
  multiply
};
```

### Interview trap

**Q:** Why is only one function available from the module?
**Answer:**
“Because `module.exports` was reassigned instead of exporting an object.”

---

## 5. Confusing `exports` with `module.exports` ❌

### Mistake

```js
exports.add = add;
module.exports = multiply;
```

### Reality

* `exports` is just a **reference** to `module.exports`
* Reassigning `module.exports` breaks the link

### Rule

* Either use `exports.property`
* Or assign everything to `module.exports`
* Do **not mix both**

### Interview trap

**Q:** Difference between `exports` and `module.exports`?
**Answer:**
“`exports` is a reference to `module.exports`; assigning `module.exports` overrides it.”

---

## 6. Forgetting `./` in Local Module Imports ❌

### Mistake

```js
require('utils/stringUtils');
```

### Reality

* Node assumes this is a **core or npm module**
* Local files must use relative paths

### Correct

```js
require('./utils/stringUtils');
```

### Interview trap

**Q:** Why does Node fail to load a local file without `./`?
**Answer:**
“Because Node treats it as a core or third-party module.”

---

## 7. Not Understanding Module Caching ❌

### Mistake

Assuming a module runs every time it is required.

```js
require('./config');
require('./config');
```

### Reality

* Module code executes **only once**
* Cached result is reused

### Side effect risk

```js
module.exports.count = 0;
```

Mutating this affects all imports.

### Interview trap

**Q:** Why does a module execute only once?
**Answer:**
“Because Node caches modules after the first load.”

---

## 8. Putting Business Logic Inside Utility Modules ❌

### Mistake

Adding database or request logic inside utilities.

```js
function isUserAdmin(user) {
  return user.role === "admin";
}
```

### Reality

* Utilities should be:

  * generic
  * context-free
  * reusable

### Correct separation

* Utilities → generic helpers
* Services → business rules
* Controllers → request/response

### Interview trap

**Q:** What should not go inside utility functions?
**Answer:**
“Business logic, database access, and request-specific logic.”

---

## 9. Treating Node Modules Like Browser Scripts ❌

### Mistake

Expecting variables to attach to global scope.

### Reality

* Node does **not** pollute global scope
* Everything is scoped to the module

### Interview trap

**Q:** Why is Node.js safer than browser globals?
**Answer:**
“Because modules provide isolation and avoid global pollution.”

---

## 10. Forgetting Entry Point Concept ❌

### Mistake

Running random module files directly without understanding flow.

### Reality

* One file is the **entry point**
* Other modules are dependencies

```bash
node index.js
```

### Interview trap

**Q:** What is the entry point in a Node application?
**Answer:**
“The file passed to the `node` command, which starts execution.”

---

## Final Interview One-Liners (Revise Before Interview)

* Each file in Node.js is a module with private scope
* `require()` returns `module.exports`
* Modules execute once and are cached
* Local modules require relative paths
* Utilities must be generic and stateless
* `module.exports` controls the public API
* Entry file orchestrates module execution
