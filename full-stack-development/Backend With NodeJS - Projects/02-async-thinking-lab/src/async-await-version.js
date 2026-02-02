// async-await-version.js
// Cleanest async mental model

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
  const total = orders.reduce((sum, val) => sum + val, 0);
  return total;
}

async function main() {
  try {
    const user = await getUser();
    const orders = await getOrders(user.id);
    const total = await calculateTotal(orders);

    console.log("Total bill:", total);
  } catch (err) {
    console.error(err);
  }
}

main();
