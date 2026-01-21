// Import express
const express = require("express");

// Create an express application
const app = express();

// Define a port
const PORT = 3000;

// Import routes
const healthRoutes = require("./routes/health.routes");

// Use routes
app.use("/", healthRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
