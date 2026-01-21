
// Function returning a rejected or resolved Promise randomly
function riskyOperation() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // Random success/failure
    setTimeout(() => {
      if (success) resolve("Operation successful!"); // 50% chance
      else reject("Operation failed!"); // 50% chance
    }, 1000);
  });
}

// Async function with try-catch-finally for error handling
async function execute() {
  try {
    const result = await riskyOperation(); // Wait for operation result
    console.log(result); // Runs only if resolved
  } catch (error) {
    console.log("Error:", error); // Runs if rejected
  } finally {
    console.log("Execution finished."); // Always runs (success or error)
  }
}

// Call the async function
execute();

/*
👉 Line-by-Line Explanation

function riskyOperation() { ... }
→ Defines a function that returns a new Promise.
→ It simulates an uncertain async operation (may fail or succeed).

const success = Math.random() > 0.5;
→ Generates random true/false (50% chance).

if (success) resolve("Operation successful!");
→ If true, the Promise resolves successfully.

else reject("Operation failed!");
→ If false, the Promise rejects with an error message.

async function execute() { ... }
→ Declares an async function so we can use 'await' inside.

try { ... } catch (error) { ... } finally { ... }
→ Standard JavaScript error-handling pattern.
→ 'try' runs normally.
→ 'catch' executes if an exception (or Promise rejection) occurs.
→ 'finally' always executes, regardless of success/failure.

const result = await riskyOperation();
→ Waits for riskyOperation() to resolve or reject.

console.log(result);
→ Prints result only if resolved successfully.

console.log("Error:", error);
→ Handles rejection case gracefully.

console.log("Execution finished.");
→ Always executes (for cleanup, logging, etc.).

execute();
→ Starts the async workflow.

👉 Concept Summary

| Concept    | Explanation                                     |
| ---------- | ----------------------------------------------- |
| `try`      | Code that might throw error or rejected Promise |
| `catch`    | Handles Promise rejection or runtime errors     |
| `finally`  | Executes always, used for cleanup               |
| `reject()` | Used inside Promise to simulate failure         |
| `await`    | Suspends execution until Promise settles        |

👉 Difference Between These Two Examples

| Example               | Focus                     | Behavior                                       |
| --------------------- | ------------------------- | ---------------------------------------------- |
| **Basic Async/Await** | Sequential task execution | All Promises resolve successfully              |
| **Error Handling**    | Managing failures         | Uses `try...catch...finally` for clean control |

👉 Key Takeaway

Async/Await = cleaner syntax for Promises.
It converts this:

step1().then(step2).then(step3).catch(errorHandler);


into:

try {
  await step1();
  await step2();
  await step3();
} catch (error) {
  handleError(error);
}

*/