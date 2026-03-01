// Step 1: Hum ek function bana rahe hain jo pizza order karega
// Ye function immediately pizza nahi dega
// Ye Promise return karega (future me pizza milega)

function orderPizza(pizzaName) {
  // Step 2: new Promise object create ho raha hai
  // Promise ke andar ek executor function hota hai
  // Ye executor turant run hota hai

  return new Promise((resolve, reject) => {
    console.log("Order received for:", pizzaName);

    // Step 3: Kitchen ko time lagega (simulate karne ke liye setTimeout use kar rahe hain)
    // setTimeout asynchronous hai
    // Isliye Promise pending state me rahega

    setTimeout(() => {
      let kitchenHasIngredients = true; // condition change karke test karo

      // Step 4: Agar ingredients available hain
      // to resolve call hoga (success state)
      if (kitchenHasIngredients) {
        // resolve ka matlab:
        // "Pizza ready hai, le jao"
        resolve(pizzaName + " is ready!");
      } else {
        // reject ka matlab:
        // "Sorry, ingredients nahi hain"
        reject("Sorry, ingredients not available.");
      }
    }, 2000); // 2 second baad result milega
  });
}

// Step 5: Function call karte hain
// IMPORTANT: orderPizza immediately pizza nahi deta
// Ye Promise return karta hai

const pizzaPromise = orderPizza("Margherita");

console.log("Cooking started...");
console.log("Promise object:", pizzaPromise);

// Step 6: Ab hum Promise consume karenge
// .then() success handle karta hai
// .catch() failure handle karta hai

pizzaPromise
  .then((message) => {
    // Ye tab run karega jab resolve call hoga
    console.log("SUCCESS:", message);
  })
  .catch((error) => {
    // Ye tab run karega jab reject call hoga
    console.log("ERROR:", error);
  })
  .finally(() => {
    // Ye dono case me chalega (success ya failure)
    console.log("Order process finished.");
  });
