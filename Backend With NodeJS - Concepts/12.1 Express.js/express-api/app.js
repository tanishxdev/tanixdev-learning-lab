const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Data
let products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

// Get all products
app.get("/api/products", (req, res) => {
  res.send(products);
});
// Get single product
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));

  if (!product) {
    return res.status(404).send("Product not found");
  }

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
  const product = products.find((p) => p.id === parseInt(req.params.id));

  if (!product) {
    return res.status(404).send("Product not found");
  }

  products = products.filter((p) => p.id !== parseInt(req.params.id));
  res.send("Product deleted");
});

// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
