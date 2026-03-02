## Lexical Scoping — Simple Words

### Concept (Very Simple)

**Lexical scoping means:**

> A function can access variables from where it was written, not where it is called.

Keyword: **Where it is defined (written)** matters.

Not where it runs.

---

## Step 1 — Basic Scope

```javascript
let name = "Tanish";

function printName() {
  console.log(name);
}

printName();
```

### What happens?

- `printName` looks for `name`
- Not found inside function
- Looks outside (global scope)
- Finds `name = "Tanish"`

### Output

```
Tanish
```

Why?
Because function remembers the place where it was created.

---

## Step 2 — Nested Example (Important)

```javascript
function outer() {
  let outerVar = "I am outer";

  function inner() {
    console.log(outerVar);
  }

  inner();
}

outer();
```

---

### Step-by-Step Thinking

1. `outer()` runs
2. `outerVar` is created
3. `inner()` is defined inside `outer`
4. `inner()` tries to print `outerVar`
5. JS checks:
   - Inside inner? ❌
   - Outside (outer)? ✅ found

### Output

```
I am outer
```

---

## Why It Works?

Because of **Lexical Scope Rule**:

> A function has access to variables of its parent scope.

Scope chain:

```
inner → outer → global
```

JS climbs upward.

Never downward.

---

## Very Important Example

```javascript
function outer() {
  let count = 10;

  return function inner() {
    console.log(count);
  };
}

const fn = outer();
fn();
```

---

### What Happens Here?

- `outer()` runs
- `count = 10`
- Returns `inner`
- `outer` finishes
- But `inner` still remembers `count`

### Output

```
10
```

Even though `outer` is finished.

This is because of **lexical scoping**.

This leads to something called **closure** (next topic).

---

## Simple Real-Life Analogy

Think like this:

A child remembers their home address.

Even if they go outside,
they still know where they came from.

Function behaves same.

---

## Interview One-Liner

> Lexical scoping means a function can access variables from the scope in which it was defined.

---

## Important Rules

1. Scope is decided at writing time.
2. Not at calling time.
3. Inner function can access outer variables.
4. Outer function cannot access inner variables.

Example:

```javascript
function outer() {
  let x = 10;

  function inner() {
    let y = 20;
  }

  console.log(y); // ❌ Error
}
```

Why error?
Because scope only flows upward.

---

## Final Mental Model

When JS runs a function, it searches variables like this:

```
Current Scope
→ Parent Scope
→ Parent’s Parent
→ Global Scope
→ Error
```

This search system = **Scope Chain**

---
