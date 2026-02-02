/**
 * PROJECT 2 — ASYNC THINKING LAB
 *
 * Goal:
 * Understand async execution using:
 * 1. Callbacks
 * 2. Promises
 * 3. Async / Await
 *
 * Run:
 * node src/async-lab.js
 */

// ------------------------------
// Common business logic (shared)
// ------------------------------

function fakeGetUser() {
  return { id: 1, name: "Tanish" };
}

function fakeGetOrders() {
  return [100, 200, 300];
}

function calculateTotal(orders) {
  return orders.reduce((sum, val) => sum + val, 0);
}

// ------------------------------
// 1. CALLBACK VERSION
// ------------------------------

function callbackFlow() {
  console.log("\n--- CALLBACK VERSION ---");

  setTimeout(() => {
    const user = fakeGetUser();

    setTimeout(() => {
      const orders = fakeGetOrders();

      setTimeout(() => {
        const total = calculateTotal(orders);
        console.log("Total bill:", total);
      }, 1000);
    }, 1000);
  }, 1000);
}

// ------------------------------
// 2. PROMISE VERSION
// ------------------------------

function promiseFlow() {
  console.log("\n--- PROMISE VERSION ---");

  Promise.resolve()
    .then(() => fakeGetUser())
    .then((user) => fakeGetOrders())
    .then((orders) => calculateTotal(orders))
    .then((total) => console.log("Total bill:", total))
    .catch((err) => console.error(err));
}

// ------------------------------
// 3. ASYNC / AWAIT VERSION
// ------------------------------

async function asyncAwaitFlow() {
  console.log("\n--- ASYNC / AWAIT VERSION ---");

  try {
    const user = fakeGetUser();
    const orders = fakeGetOrders();
    const total = calculateTotal(orders);

    console.log("Total bill:", total);
  } catch (err) {
    console.error(err);
  }
}

// ------------------------------
// ENTRY POINT (CONTROL EXECUTION)
// ------------------------------

async function main() {
  console.log("=== ASYNC THINKING LAB START ===");

  callbackFlow();

  // delay to avoid mixed logs
  setTimeout(() => {
    promiseFlow();
  }, 4000);

  setTimeout(() => {
    asyncAwaitFlow();
  }, 8000);
}

main();
