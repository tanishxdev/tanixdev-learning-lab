# Imports & Exports in Node.js

(CommonJS vs ES Modules)

Engineering Mindset — Why → What → How → Code → Interview

---

# 1. Problem (WHY Imports/Exports Exist?)

When project grows:

- Multiple files
- Multiple features
- Multiple developers

Without import/export:

- All code in one file
- Hard to maintain
- Hard to test
- No separation of concerns

We need:

- Share code between files
- Encapsulate logic
- Reuse functions
- Build modular architecture

Imports/Exports solve this.

---

# 2. Two Module Systems in Node.js

Node supports:

1. CommonJS (CJS)
2. ES Modules (ESM)

---

## 2.1 CommonJS (Default in Node)

Uses:

```js
require();
module.exports;
```

File extension: `.js`

Used traditionally in Node.

---

## 2.2 ES Modules (Modern JavaScript)

Uses:

```js
import
export
```

File extension:

- `.mjs`
  OR
- `"type": "module"` in package.json

Used in modern projects.

---

# 3. CommonJS (require / module.exports)

---

## 3.1 Exporting

### Example: math.js

```js
// math.js

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// Export as object
module.exports = {
  add,
  multiply,
};
```

---

## 3.2 Importing

### app.js

```js
// Import module
const math = require("./math");

// Use functions
console.log(math.add(5, 3));
console.log(math.multiply(5, 3));
```

---

## 3.3 Export Single Function

```js
// add.js

function add(a, b) {
  return a + b;
}

module.exports = add;
```

Import:

```js
const add = require("./add");
console.log(add(5, 2));
```

---

## 3.4 exports vs module.exports

Correct:

```js
exports.add = add;
```

Wrong:

```js
exports = { add }; // breaks reference
```

Rule:

exports is shortcut reference to module.exports.

If reassigning whole object → use module.exports.

---

# 4. ES Modules (import / export)

Modern JavaScript standard.

---

## 4.1 Enable ES Modules

Add in package.json:

```json
{
  "type": "module"
}
```

OR use `.mjs` extension.

---

## 4.2 Named Export

### math.js

```js
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}
```

Import:

```js
import { add, multiply } from "./math.js";

console.log(add(5, 3));
```

---

## 4.3 Default Export

### add.js

```js
export default function add(a, b) {
  return a + b;
}
```

Import:

```js
import add from "./add.js";

console.log(add(5, 2));
```

---

## 4.4 Named + Default Together

```js
export function multiply(a, b) {
  return a * b;
}

export default function add(a, b) {
  return a + b;
}
```

Import:

```js
import add, { multiply } from "./math.js";
```

---

# 5. CommonJS vs ES Modules (Important Difference)

| Feature         | CommonJS       | ES Modules                         |
| --------------- | -------------- | ---------------------------------- |
| Import          | require()      | import                             |
| Export          | module.exports | export                             |
| Loading         | Synchronous    | Static (analyzed before execution) |
| Default in Node | Yes            | No (needs config)                  |
| Browser support | No             | Yes                                |

---

# 6. Execution Difference (Deep Concept)

CommonJS:

- Loaded at runtime
- Dynamic
- Can require conditionally

Example:

```js
if (true) {
  const fs = require("fs");
}
```

ESM:

- Static imports
- Must be top-level
- Cannot import inside block

---

# 7. \_\_dirname Difference

In CommonJS:

```js
console.log(__dirname);
```

In ES Modules:

Not available directly.

Need:

```js
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

Important for production apps.

---

# 8. When to Use Which?

Use CommonJS if:

- Legacy project
- Quick scripts
- Older Node versions

Use ES Modules if:

- Modern project
- Frontend + Backend sharing
- Long-term maintainable project

Most new projects use ESM.

---

# 9. Real Project Example (Clean Structure)

```
project/
│
├── controllers/
├── services/
├── routes/
├── utils/
├── app.js
└── package.json
```

Each folder exports modules.

Main app imports them.

---

# 10. Common Errors

1. Cannot use import outside module
   → Add `"type": "module"`

2. Must include file extension in ESM
   → './math.js'

3. Mixing CJS and ESM incorrectly
   → Causes runtime errors

---

# 11. Mini Exercises

1. Create:
   - math module
   - string utility module
   - hash utility module

2. Convert CommonJS project to ES Modules.

3. Export:
   - One default
   - Two named functions.

---

# 12. Interview Questions

1. Difference between require and import?
2. Difference between module.exports and exports?
3. What is default export?
4. Can we use import inside if condition?
5. Why ES Modules are static?
6. How to enable ES modules in Node?
7. What happens if circular dependency exists?
8. Why CommonJS is synchronous?
9. What is tree-shaking (related to ESM)?
10. Which module system is better for production?

---

# Final Engineering Summary

Imports/Exports enable:

- Modular architecture
- Clean separation
- Reusability
- Scalability

CommonJS = Traditional Node
ES Modules = Modern Standard

For new production backend:

Prefer ES Modules.

---
