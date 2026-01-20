# JavaScript Interview Questions and Answers

---

**Topic : JavaScript Debugging**


## **45. What tools and techniques do you use for debugging JavaScript code?**

---

## **1. Concept**

Debugging JavaScript means **finding, understanding, and fixing bugs** in code so that the application behaves as expected.

In interviews, this question is **not about listing tools only**.
Interviewers want to know:

• How systematic you are
• Whether you understand browser internals
• How you debug real production issues

A good answer always combines **tools + techniques + mindset**.

---

## **2. Primary Tools Used for Debugging JavaScript**

### **1. Browser Developer Tools (Most Important)**

All modern browsers provide DevTools:

| Browser | Tool Name               |
| ------- | ----------------------- |
| Chrome  | Chrome DevTools         |
| Firefox | Firefox Developer Tools |
| Edge    | Edge DevTools           |
| Safari  | Web Inspector           |

Used for:
• Inspecting DOM
• Debugging JS
• Network analysis
• Performance profiling

---

### **2. Console Methods**

The **console** is the first-level debugging tool.

```javascript
console.log("value:", x);
console.error("Something went wrong");
console.warn("This might be an issue");
console.table(users);
```

Used for:
• Checking variable values
• Tracing execution flow
• Quick sanity checks

Interview tip:
Mention **console.table** → shows maturity.

---

### **3. Breakpoints (Advanced + Professional)**

Breakpoints allow you to **pause execution line-by-line** and inspect state.

Used via:
• DevTools → Sources tab
• `debugger` keyword

```javascript
function calculate(a, b) {
  debugger; // execution pauses here
  return a + b;
}
```

Allows inspection of:
• Call stack
• Scope variables
• Closures
• `this` context

---

### **4. Linting Tools**

Linting catches bugs **before runtime**.

Common tools:
• ESLint
• Prettier (formatting + clarity)

Examples of issues caught:
• Unused variables
• Undefined variables
• Bad equality usage (`==`)

---

### **5. Source Maps**

Used when code is:
• Minified
• Bundled (Webpack, Vite)

Source maps allow:

> Debugging **original source code**, not bundled output.

Interview keyword: **“production debugging”**

---

### **6. Network Tab (Very Important)**

Used for debugging:
• API calls
• HTTP errors
• Request payloads
• Response data

Helps debug:
• CORS issues
• Auth failures
• Backend bugs

---

### **7. Error Tracking Tools (Real-World)**

Used in production:

• Sentry
• LogRocket
• Datadog

Used for:
• Capturing runtime errors
• Stack traces
• User environment details

Mentioning these gives **industry-level signal**.

---

## **3. Debugging Techniques (Mindset)**

### **1. Reproduce the Bug**

Before fixing:
• Understand when it happens
• Identify inputs
• Check environment

Never fix blindly.

---

### **2. Isolate the Problem**

Reduce scope:
• Disable unrelated code
• Comment blocks
• Test smallest failing unit

---

### **3. Read Error Messages Properly**

Example:

```text
Uncaught TypeError: Cannot read property 'x' of undefined
```

Means:
• Variable exists
• Value is `undefined`
• Accessing property on it

Interviewers like this explanation.

---

### **4. Use Step-by-Step Execution**

Breakpoints + stepping:
• Step over
• Step into
• Step out

Helps understand:
• Execution order
• Async behavior
• Scope chain

---

### **5. Debug Async Code Carefully**

For:
• Promises
• async/await
• Event handlers

Always check:
• Call stack
• Microtasks
• Timing issues

---

## **4. Common Interview Traps**

### Trap 1: “I just use console.log”

Bad answer alone.

Correct answer:

> “I start with console logs, but rely heavily on breakpoints, DevTools, and call stack analysis.”

---

### Trap 2: Ignoring DevTools

DevTools is **non-negotiable** for frontend roles.

---

## **5. Interview-Ready Summary**

To debug JavaScript code, I primarily use browser Developer Tools such as Chrome DevTools, along with console methods, breakpoints, and the `debugger` keyword. I rely on the Sources tab to inspect execution flow, the Network tab to debug API issues, and linting tools like ESLint to catch errors early. In production environments, I use error tracking tools like Sentry. My debugging approach focuses on reproducing the bug, isolating the issue, and analyzing execution step-by-step.

---

## **6. Quick Practice Interview Questions**

1. Why are breakpoints better than console.log?
2. What is the use of the Network tab?
3. What problems do source maps solve?
4. How do linting tools help debugging?
5. How do you debug async JavaScript code?
6. What tools do you use in production debugging?

---
## **46. How do you debug a JavaScript application in the browser?**

---

## **1. Concept**

Debugging a JavaScript application in the browser means using **browser Developer Tools** to:

• Inspect running code
• Pause execution
• Examine variables and scope
• Track errors and performance issues

Browsers do not just “run” JavaScript — they provide **full introspection tools** for debugging.

For interviews, the key idea is:

> **You don’t guess bugs — you observe execution.**

---

## **2. Step-by-Step Process to Debug in Browser (Interview Flow)**

### **Step 1: Open Developer Tools**

Common shortcuts:

• Chrome / Edge → `F12` or `Ctrl + Shift + I`
• Mac → `Cmd + Option + I`

Tabs used most:
• **Console**
• **Sources**
• **Network**
• **Application**

---

## **3. Using the Console Tab**

The **Console** shows:

• Runtime errors
• Warnings
• Logs
• Stack traces

Example error:

```text
Uncaught TypeError: Cannot read property 'length' of undefined
```

This tells:
• Variable exists
• Value is `undefined`
• Code tried to access `.length`

Console techniques:

```javascript
console.log(value);
console.table(array);
console.trace();
```

---

## **4. Debugging with Sources Tab (Most Important)**

The **Sources** tab allows you to debug JavaScript line-by-line.

You can:
• View loaded JS files
• Set breakpoints
• Inspect scope
• Watch variables

---

### **Setting Breakpoints**

Click on the line number where execution should pause.

When paused, you can inspect:
• Local variables
• Global variables
• Closures
• `this`

---

### **Using the `debugger` Keyword**

```javascript
function processData(data) {
  debugger;
  return data.length;
}
```

Execution pauses automatically when this line runs.

This is useful when:
• Debugging loops
• Debugging callbacks
• Debugging async flows

---

## **5. Step Execution Controls**

When paused:

• **Step Over** → execute next line
• **Step Into** → enter function
• **Step Out** → exit function

This helps understand:
• Execution order
• Function calls
• Unexpected behavior

---

## **6. Inspecting Scope and Call Stack**

### **Scope Panel**

Shows:
• Local scope
• Block scope
• Closure variables
• Global scope

Helps debug:
• Scope bugs
• Closure issues

---

### **Call Stack**

Shows:
• How execution reached current line
• Function call order

Very useful for:
• Async bugs
• Deep function chains

---

## **7. Debugging Async JavaScript**

Browser tools help debug:

• Promises
• `async/await`
• Timers
• Event handlers

Chrome DevTools show:
• Async call stacks
• Promise states

This prevents guessing in async bugs.

---

## **8. Using the Network Tab**

Used for debugging:
• API calls
• HTTP status codes
• Request payload
• Response data

Example issues:
• 401 / 403 auth errors
• 500 backend errors
• CORS issues

You debug frontend by **verifying backend behavior** here.

---

## **9. Using Source Maps**

For bundled code:

• Webpack
• Vite
• Rollup

Source maps allow debugging **original source code** instead of minified output.

Interview keyword:

> “Source maps enable readable debugging in production builds.”

---

## **10. Common Interview Traps**

### Trap 1: Only Using Console Logs

This shows beginner level.

Better:

> Console logs + breakpoints + call stack analysis.

---

### Trap 2: Ignoring Network Errors

Many “frontend bugs” are actually **API failures**.

---

## **11. Interview-Ready Summary**

To debug a JavaScript application in the browser, I use Developer Tools—primarily the Console, Sources, and Network tabs. I inspect runtime errors in the Console, set breakpoints or use the `debugger` keyword in the Sources tab to pause execution, step through code, and inspect scope and call stacks. For API-related issues, I rely on the Network tab, and for bundled code, I use source maps to debug original source files.

---

## **12. Quick Practice Interview Questions**

1. What is the role of the Sources tab?
2. How does `debugger` differ from console.log?
3. What is a call stack?
4. How do you debug async code in the browser?
5. Why are source maps important?
6. How do you debug API failures from frontend?

---

## **47. Explain the concept and use of breakpoints**

---

## **1. Concept**

A **breakpoint** is a marker that tells the JavaScript engine:

> “Pause execution at this line so I can inspect what is happening.”

When execution hits a breakpoint, the browser **halts the program** and gives the developer full access to:

• Variable values
• Scope chain
• Call stack
• `this` context
• Execution flow

Breakpoints are the **most powerful debugging tool** because they allow **observation instead of guessing**.

---

## **2. Why Breakpoints Are Important (Interview Insight)**

`console.log` shows **snapshots**.
Breakpoints show **live state**.

With breakpoints you can:
• Step line-by-line
• Watch values change
• Catch bugs at the exact moment they happen

This is how professional debugging is done.

---

## **3. Types of Breakpoints (Interview Favorite)**

### **1. Line Breakpoints**

Set by clicking the line number in DevTools.

```javascript
function calculate(a, b) {
  let sum = a + b; // breakpoint here
  return sum;
}
```

Execution pauses **before** the line runs.

---

### **2. `debugger` Statement**

A programmatic breakpoint.

```javascript
function process(data) {
  debugger;
  return data.length;
}
```

Used when:
• Bug happens inside loops
• Bug happens in callbacks
• Hard-to-click code paths

---

### **3. Conditional Breakpoints**

Pause execution **only if a condition is true**.

Example condition:

```text
user.age < 18
```

Used when:
• Bug happens rarely
• Large loops
• Specific edge cases

---

### **4. Event Listener Breakpoints**

Pause when:
• Click
• Input
• Scroll
• Keypress

Useful when:
• You don’t know which handler runs
• UI behavior is complex

---

### **5. XHR / Fetch Breakpoints**

Pause when:
• Network request is sent
• Response is received

Very useful for debugging:
• API calls
• Auth flows
• Data loading bugs

---

## **4. What You Can Inspect at a Breakpoint**

### **1. Scope Panel**

Shows:
• Local variables
• Block scope
• Closure variables
• Global scope

This is how you debug:
• Scope bugs
• Closure confusion

---

### **2. Call Stack**

Shows:
• Function call order
• How execution reached current line

Essential for:
• Async bugs
• Deep nested calls

---

### **3. `this` Context**

At a breakpoint you can see:
• What `this` currently refers to

This is critical for:
• Event handlers
• Object methods
• Callback issues

---

## **5. Stepping Through Code**

When paused, you can:

• **Step Over** → Execute next line
• **Step Into** → Enter function
• **Step Out** → Exit function

This allows:
• Understanding logic flow
• Catching wrong branches
• Debugging async behavior

---

## **6. Breakpoints vs console.log (Interview Comparison)**

| Aspect            | Breakpoints   | Console.log     |
| ----------------- | ------------- | --------------- |
| Execution control | Yes           | No              |
| Live inspection   | Yes           | No              |
| Call stack view   | Yes           | No              |
| Scope inspection  | Yes           | No              |
| Production safety | Remove easily | Often forgotten |

Interview line to say:

> “I start with console logs but rely on breakpoints for root-cause analysis.”

---

## **7. Common Interview Traps**

### Trap 1: Forgetting to Remove `debugger`

Leaving it in production code **breaks execution**.

---

### Trap 2: Not Using Conditional Breakpoints

Loop debugging without conditions wastes time.

---

## **8. Real-World Debugging Example**

```javascript
for (let i = 0; i < users.length; i++) {
  if (users[i].age < 18) {
    debugger;
  }
}
```

Pauses only when an underage user is found.

---

## **9. Interview-Ready Summary**

Breakpoints allow developers to pause JavaScript execution at a specific point and inspect the program’s state in real time. They can be set on lines of code, conditionally, via the `debugger` keyword, or on events and network requests. Breakpoints enable step-by-step execution, inspection of scope and call stacks, and accurate identification of bugs, making them more powerful than console logging.

---

## **10. Quick Practice Interview Questions**

1. What is a breakpoint?
2. Difference between breakpoint and console.log?
3. What is a conditional breakpoint?
4. When would you use the `debugger` keyword?
5. What information can you inspect at a breakpoint?
6. How do breakpoints help debug async code?
7. Why are breakpoints important in large applications?

---

## **48. How do you handle exceptions in JavaScript?**

---

## **1. Concept**

An **exception** is a runtime error that **interrupts normal program execution**.

If exceptions are not handled:
• Program crashes
• UI breaks
• App becomes unstable

**Exception handling** allows us to:
• Catch errors
• Prevent crashes
• Recover gracefully
• Show meaningful messages

JavaScript provides **structured error handling mechanisms** for this.

---

## **2. Types of Errors in JavaScript (Interview Foundation)**

| Error Type     | Description                |
| -------------- | -------------------------- |
| SyntaxError    | Invalid JS syntax          |
| ReferenceError | Variable not defined       |
| TypeError      | Invalid operation on value |
| RangeError     | Value out of range         |
| URIError       | Invalid URI handling       |
| Custom Error   | Developer-defined          |

---

## **3. `try...catch` Block (Core Mechanism)**

### Basic Syntax

```javascript
try {
  // code that may throw error
} catch (error) {
  // error handling logic
}
```

Example:

```javascript
try {
  let result = JSON.parse("{invalid json}");
} catch (err) {
  console.log("Parsing failed:", err.message);
}
```

Execution:
• Error occurs in `try`
• Control jumps to `catch`
• App does not crash

---

## **4. `finally` Block**

`finally` always runs:
• Whether error occurs or not

```javascript
try {
  console.log("Try block");
} catch (e) {
  console.log("Catch block");
} finally {
  console.log("Cleanup");
}
```

Used for:
• Closing resources
• Cleanup tasks

---

## **5. Throwing Custom Errors**

You can manually throw errors using `throw`.

```javascript
function withdraw(balance, amount) {
  if (amount > balance) {
    throw new Error("Insufficient balance");
  }
  return balance - amount;
}
```

Handling it:

```javascript
try {
  withdraw(1000, 2000);
} catch (err) {
  console.log(err.message);
}
```

---

## **6. Creating Custom Error Types (Advanced)**

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
```

Used in:
• Large applications
• Domain-specific errors

---

## **7. Handling Errors in Async Code**

### **Promises**

```javascript
fetch("/api/data")
  .then((res) => res.json())
  .catch((err) => {
    console.log("API Error:", err);
  });
```

---

### **async / await (Preferred)**

```javascript
async function getData() {
  try {
    const res = await fetch("/api/data");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Failed:", err);
  }
}
```

Interview tip:

> `async/await` uses **try-catch**, not `.catch()` chains.

---

## **8. Global Error Handling**

### **Browser Global Handler**

```javascript
window.onerror = function (message, source, lineno, colno, error) {
  console.log("Global error:", message);
};
```

Used for:
• Catching unhandled errors
• Logging production crashes

---

### **Unhandled Promise Rejection**

```javascript
window.addEventListener("unhandledrejection", (event) => {
  console.log("Unhandled promise:", event.reason);
});
```

---

## **9. Best Practices (Interview Gold)**

• Catch only what you can handle
• Do not swallow errors silently
• Log errors meaningfully
• Fail gracefully
• Use global handlers in production

Bad practice:

```javascript
try {
  riskyCode();
} catch (e) {}
```

This hides bugs.

---

## **10. Common Interview Traps**

### Trap 1: Thinking `try-catch` catches async errors automatically

Wrong:

```javascript
try {
  setTimeout(() => {
    throw new Error("Oops");
  }, 1000);
} catch (e) {
  // never runs
}
```

Correct:
• Wrap inside async function
• Or handle inside callback

---

## **11. Interview-Ready Summary**

JavaScript handles exceptions using `try...catch...finally` blocks, allowing errors to be caught and handled without crashing the application. Developers can throw custom errors using `throw`, define custom error classes, and handle asynchronous errors using `catch()` or `try-catch` with `async/await`. For production applications, global error handlers help capture unhandled errors and improve stability.

---

## **12. Quick Practice Interview Questions**

1. What is an exception?
2. Difference between error and exception?
3. How does `try-catch` work?
4. What is the purpose of `finally`?
5. How do you throw custom errors?
6. How are async errors handled?
7. What is global error handling?
