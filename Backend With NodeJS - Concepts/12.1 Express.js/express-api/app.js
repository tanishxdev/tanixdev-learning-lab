// ===========================
// Mini Project: Simple Express API
// ===========================

const express = require("express");
const app = express();
app.use(express.json());

let products = [
  { id: 1, name: "Keyboard", price: 500 },
  { id: 2, name: "Mouse", price: 300 },
];

// Get all products
app.get("/api/products", (req, res) => {
  res.send(products);
});

// Get single product
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send("Product not found.");
  res.send(product);
});

// Add new product
app.post("/api/products", (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.status(201).send(newProduct);
});

// Delete product
app.delete("/api/products/:id", (req, res) => {
  products = products.filter((p) => p.id !== parseInt(req.params.id));
  res.send({ message: "Product deleted" });
});

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
