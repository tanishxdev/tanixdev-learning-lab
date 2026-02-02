// ===========================
// JWT Authentication Middleware
// ===========================

const jwt = require('jsonwebtoken');               // 1) Import jsonwebtoken for verifying JWT tokens
const User = require('../models/userModel');       // 2) Import User model to fetch user details from DB

// ---------------------------
// Protect Middleware
// ---------------------------
// 3) Used to protect routes — only accessible with a valid JWT
exports.protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];  // 4) Extract token from 'Authorization' header (format: "Bearer <token>")
    if (!token)                                              // 5) If token missing,
      return res.status(401).json({ message: 'Not authorized, token missing' }); // 6) return 401 Unauthorized

    const decoded = jwt.verify(token, 'secret_key_123');     // 7) Verify token using secret key, returns decoded payload (contains user id)
    req.user = await User.findById(decoded.id).select('-password'); // 8) Fetch the user document by ID and attach it to req.user (excluding password)

    next();                                                   // 9) Pass control to next middleware or controller
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' }); // 10) If verification fails or token expired, return 401 Unauthorized
  }
};

// ---------------------------
// Role-based Access Control
// ---------------------------
// 11) Restricts certain routes to specific user roles
// 12) Accepts allowed roles as arguments (e.g., admin, manager)
exports.restrictTo = (...roles) => {                          // 13) Returns a middleware function
  return (req, res, next) => {
    if (!roles.includes(req.user.role))                       // 14) Check if logged-in user's role exists in allowed roles
      return res.status(403).json({ message: 'Access denied' }); // 15) If not, deny access with 403 Forbidden
    next();                                                    // 16) Otherwise, continue to next middleware/controller
  };
};
