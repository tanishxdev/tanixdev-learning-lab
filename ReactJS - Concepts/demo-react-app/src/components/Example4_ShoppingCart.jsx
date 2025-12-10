import { useState } from "react";

// Simulating real cart logic
function Example4_ShoppingCart() {
  const [items, setItems] = useState(0);

  return (
    <div>
      <h3>Example 4: Shopping Cart</h3>
      <p>Items in cart: {items}</p>

      <button onClick={() => setItems(items + 1)}>
        Add Item
      </button>

      <button onClick={() => setItems(items > 0 ? items - 1 : 0)}>
        Remove Item
      </button>
    </div>
  );
}

export default Example4_ShoppingCart;
