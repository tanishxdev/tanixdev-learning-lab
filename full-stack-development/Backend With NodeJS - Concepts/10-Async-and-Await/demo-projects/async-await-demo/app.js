// Example: Basic Async / Await

// Function that return a promise
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Waited for ${ms / 1000} seconds`);
        }, ms);
    });
}

// Aync function that uses awit
async function runTask() {
    console.log("Task Started...");

    const msg1 = await delay(2000);
    console.log(msg1);

    const msg2 = await delay(1000);
    console.log(msg2);

    console.log("Task Completed!");
}

// Call the async function
runTask();


// 👉 Line-by-Line Explanation

/*
function delay(ms) { ... }
→ Defines a function that returns a Promise which resolves after a delay.

return new Promise((resolve) => { ... })
→ Creates a Promise that resolves after 'ms' milliseconds.

setTimeout(() => { resolve(...) }, ms)
→ Simulates asynchronous behavior like API call or DB query.

async function runTask() { ... }
→ Declares an asynchronous function.
→ Inside an async function, you can use the 'await' keyword.

console.log("Task Started...");
→ Executes immediately when runTask() is called.

const msg1 = await delay(2000);
→ Waits (without blocking) for the Promise from delay(2000) to resolve.
→ The value from 'resolve()' gets stored in 'msg1'.

console.log(msg1);
→ Logs the resolved message from the first delay.

const msg2 = await delay(1000);
→ Waits another second for the second delay Promise.

console.log(msg2);
→ Logs the message after second Promise resolves.

console.log("Task Completed!");
→ Runs only after all awaited Promises are done.

runTask();
→ Calls the async function to execute the sequence.

👉 Concept Summary

| Keyword         | Meaning                                                            |
| --------------- | ------------------------------------------------------------------ |
| `async`         | Declares a function that automatically returns a Promise           |
| `await`         | Pauses execution inside an async function until a Promise resolves |
| `Promise`       | Represents an asynchronous task that will finish in future         |
| Sequential Flow | Each `await` executes in order, giving clean synchronous-like flow |

*/