// promise-version.js
// Promise-based async flow

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Tanish" });
    }, 1000);
  });
}

function getOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([100, 200, 300]);
    }, 1000);
  });
}

function calculateTotal(orders) {
  return new Promise((resolve) => {
    const total = orders.reduce((sum, val) => sum + val, 0);
    resolve(total);
  });
}

getUser()
  .then((user) => getOrders(user.id))
  .then((orders) => calculateTotal(orders))
  .then((total) => console.log("Total bill:", total))
  .catch((err) => console.error(err));
