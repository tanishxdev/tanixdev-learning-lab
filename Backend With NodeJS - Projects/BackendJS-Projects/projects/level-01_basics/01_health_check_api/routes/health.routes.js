const express = require("express");
const router = express.Router();

// Import controller
const { healthCheck } = require("../controllers/health.controller");

// Define route
router.get("/health", healthCheck);

module.exports = router;
