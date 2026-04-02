# CONCEPT BUILDING EXAMPLE

## Situation: Pizza Order System

Tum pizza order karte ho.
Kitchen ko time lagega.
Tab tak tum wait karte ho.

Yahi Promise hai.

---

```js
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
```

---

# Ab Mental Execution Samjho (Dry Run)

1. orderPizza call hua
2. Promise create hua
3. setTimeout start hua
4. JS aage badh gaya (block nahi hua)
5. 2 second baad:
   - Agar resolve hua → .then chalega
   - Agar reject hua → .catch chalega

6. Last me .finally chalega

---

# Ab Important Concept Observe Karo

## 1️⃣ Promise Immediately Return Ho Gaya

```js
const pizzaPromise = orderPizza("Margherita");
```

Is line pe pizza ready nahi hai.

Sirf ek Promise object mila hai.

---

## 2️⃣ Why .then() Works Later?

Kyuki Promise internally yaad rakhta hai:

> "Jab resolve hoga tab ye function run karna"

Isliye .then future callback register karta hai.

---

# Chain Example (Concept Deep)

```js
orderPizza("Farmhouse")
  .then((message) => {
    // Yaha pe hum pizza mil gaya
    console.log(message);

    // Agar yaha return kare
    return "Eating pizza...";
  })
  .then((status) => {
    // Ye previous return ka value receive karega
    console.log(status);
  });
```

Rule:

Agar .then me value return ki → next .then me jayegi
Agar Promise return ki → next wait karega

---

# Ab Real Concept Clear Sentence Me

Promise =
Ek object jo future me ya to value dega ya error dega.

resolve() → success path activate karta hai
reject() → error path activate karta hai

.then() → success handler attach karta hai
.catch() → error handler attach karta hai

---
