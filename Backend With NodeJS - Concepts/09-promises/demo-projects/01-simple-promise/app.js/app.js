// ===========================
// Example 1: Simple Promise
// ===========================

// A Promise is an object representing a future result
// The executor function runs immediately
const task = new Promise((resolve, reject) => {
  // Simulating a condition (like API success / failure)
  const isDone = true;

  // If task completed successfully
  if (isDone) {
    // resolve() marks the Promise as fulfilled
    // and stores the success value internally
    resolve("Task completed successfully!");
  } else {
    // reject() marks the Promise as rejected
    // and stores the error internally
    reject("Task failed!");
  }
});

// Consuming the Promise
task
  .then((message) => {
    // Runs when Promise is fulfilled
    console.log("Success:", message);
  })
  .catch((error) => {
    // Runs when Promise is rejected
    console.log("Error:", error);
  })
  .finally(() => {
    // Always runs (success or failure)
    console.log("Promise execution finished.");
  });
