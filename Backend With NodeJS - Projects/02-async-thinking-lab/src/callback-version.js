// callback-version.js
// Demonstrates callback-based async flow

function getUser(callback) {
  setTimeout(() => {
    callback(null, { id: 1, name: "Tanish" });
  }, 1000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    callback(null, [100, 200, 300]);
  }, 1000);
}

function calculateTotal(orders, callback) {
  setTimeout(() => {
    const total = orders.reduce((sum, val) => sum + val, 0);
    callback(null, total);
  }, 1000);
}

// Callback hell
getUser((err, user) => {
  if (err) return console.error(err);

  getOrders(user.id, (err, orders) => {
    if (err) return console.error(err);

    calculateTotal(orders, (err, total) => {
      if (err) return console.error(err);

      console.log("Total bill:", total);
    });
  });
});
