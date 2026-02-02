

# JavaScript Conditionals — Decision Making Clearly Explained

---

## 1. What are Conditionals? (Core Concept)

**Conditionals allow a program to make decisions.**

In simple terms:

* Your code **checks a condition**
* Based on the result (`true` or `false`)
* JavaScript decides **which block of code to execute**

Mental model:

```text
IF this condition is true
→ do this
ELSE
→ do something else
```

Conditionals are built **on top of operators**:

* Comparison operators (`>`, `<`, `===`)
* Logical operators (`&&`, `||`, `!`)
* Truthy / falsy values

---

## 2. The `if` Statement (Basic Decision)

The `if` statement executes code **only when the condition is true**.

```js
let age = 18;

if (age >= 18) {
    console.log("You can vote!");
}
```

Mental model:

* Condition inside `()` is evaluated
* If result is `true`, block runs
* If `false`, block is skipped

---

### Another Basic Example

```js
let weather = "sunny";

if (weather === "sunny") {
    console.log("Great day for a walk!");
}
```

Key point:

* `if` does **not** require an `else`
* It’s a one-way decision

---

## 3. `if–else` Statement (Two-Way Decision)

Used when **exactly one of two paths** must execute.

```js
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else {
    console.log("Grade: B or lower");
}
```

Mental model:

```text
IF condition true → run if block
ELSE → run else block
```

---

### Real-World Example: Authentication

```js
let isLoggedIn = false;

if (isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in");
}
```

Key insight:

* `isLoggedIn` is already boolean
* Conditionals often directly consume booleans

---

## 4. `if–else if–else` Chain (Multiple Decisions)

Used when **more than two outcomes** are possible.

```js
let temperature = 25;

if (temperature > 30) {
    console.log("It's hot!");
} else if (temperature > 20) {
    console.log("Nice weather");
} else if (temperature > 10) {
    console.log("A bit cool");
} else {
    console.log("It's cold!");
}
```

Mental model:

* Conditions are checked **top to bottom**
* First `true` block executes
* Remaining conditions are ignored

Order matters.

---

### Grade Calculator Example

```js
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
```

Why this works:

* Each range is mutually exclusive
* Highest condition is checked first

---

## 5. Nested `if` Statements (Decisions Inside Decisions)

Nested `if` means:

> One decision depends on another decision

```js
let user = {
    isLoggedIn: true,
    role: "admin",
    hasPermission: true
};

if (user.isLoggedIn) {
    if (user.role === "admin") {
        if (user.hasPermission) {
            console.log("Access granted to admin panel");
        } else {
            console.log("Permission denied");
        }
    } else {
        console.log("User dashboard");
    }
} else {
    console.log("Please log in");
}
```

Mental model:

* First check: **authentication**
* Second check: **authorization**
* Third check: **permissions**

Important note:

* Nested `if` increases complexity
* Often refactored later using functions or early returns

---

## 6. `switch` Statement (Exact Match Decisions)

`switch` is used when:

* You compare **one value**
* Against **many exact cases**

```js
let day = "monday";

switch (day) {
    case "monday":
        console.log("Start of work week");
        break;
    case "tuesday":
        console.log("Tuesday blues");
        break;
    case "wednesday":
        console.log("Hump day");
        break;
    case "friday":
        console.log("TGIF!");
        break;
    default:
        console.log("Regular day");
}
```

Mental model:

* `switch` compares using **strict equality (`===`)**
* `break` stops execution
* Without `break`, execution “falls through”

---

## 7. Switch with Multiple Cases (Grouping)

Multiple cases can share the same logic.

```js
function getSeasonMessage(month) {
    switch (month) {
        case "december":
        case "january":
        case "february":
            return "Winter season";
        case "march":
        case "april":
        case "may":
            return "Spring season";
        case "june":
        case "july":
        case "august":
            return "Summer season";
        case "september":
        case "october":
        case "november":
            return "Fall season";
        default:
            return "Invalid month";
    }
}
```

Why this is useful:

* Avoids long `if–else` chains
* Cleaner for **discrete categories**

---

## 8. `switch` vs `if–else` (Decision Guide)

### Use `switch` when:

* Comparing one variable
* Against many exact values

```js
function handleUserAction(action) {
    switch (action) {
        case "save":
            return "Document saved";
        case "delete":
            return "Document deleted";
        case "edit":
            return "Edit mode activated";
        default:
            return "Unknown action";
    }
}
```

---

### Use `if–else` when:

* Conditions involve **ranges**
* Multiple variables
* Logical operators

```js
function categorizeAge(age) {
    if (age < 13) {
        return "child";
    } else if (age < 20) {
        return "teenager";
    } else if (age < 65) {
        return "adult";
    } else {
        return "senior";
    }
}
```

---

## 9. Ternary Operator (Inline Conditional)

The ternary operator is a **compact if–else**.

Syntax:

```js
condition ? valueIfTrue : valueIfFalse
```

---

### Basic Example

```js
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
```

Mental model:

* Evaluate condition
* Return one of two values

---

### Nested Ternary (Readable Only When Simple)

```js
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
```

Important rule:

* Avoid deep nesting
* Readability > compactness

---

### Practical Usage

```js
function getStatusColor(status) {
    return status === "active" ? "green" : 
           status === "pending" ? "yellow" : "red";
}
```

---

### Default Value Example

```js
let user = { name: "John" };
let displayName = user.name ? user.name : "Guest";
let betterDisplayName = user.name ?? "Guest";
```

Key insight:

* `??` avoids falsy-value bugs

---

## 10. Practical Conditional Scenarios

---

### Form Validation

```js
function validateForm(data) {
    if (!data.email || !data.email.includes("@")) {
        return { valid: false, error: "Invalid email" };
    }
    
    if (!data.password || data.password.length < 8) {
        return { valid: false, error: "Password too short" };
    }
    
    return { valid: true };
}
```

Logic flow:

1. Check email validity
2. Check password strength
3. Return result early on failure

---

### Shopping Cart Logic

```js
function calculateShipping(total, userType) {
    if (total >= 100) {
        return 0;
    }
    
    switch (userType) {
        case "premium":
            return 5;
        case "regular":
            return 10;
        default:
            return 15;
    }
}
```

Why this structure:

* `if` for numeric threshold
* `switch` for categorical values

---

### Game Result Logic

```js
function checkGameResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "You win!";
    } else if (playerScore < computerScore) {
        return "Computer wins!";
    } else {
        return "It's a tie!";
    }
}
```

Clear, mutually exclusive conditions.

---

## 11. Key Mental Models (Lock This In)

* Conditionals control **execution flow**
* `if` → one-way decision
* `if–else` → two-way decision
* `else if` → multiple exclusive decisions
* `switch` → exact match lookup
* Ternary → expression-level decision
* Order of conditions **matters**
* Readability is more important than brevity

---
