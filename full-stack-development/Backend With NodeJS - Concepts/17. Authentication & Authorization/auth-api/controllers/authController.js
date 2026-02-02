// ===========================
// Authentication Controller
// ===========================

const User = require('../models/userModel');          // 1) Import User model to interact with "users" collection
const jwt = require('jsonwebtoken');                  // 2) Import jsonwebtoken to create/verify JWTs

// ---------------------------
// Generate JWT Token
// ---------------------------
// 3) A small helper that accepts a user id and returns a signed JWT
// 4) Payload = { id }, Secret = 'secret_key_123' (move to ENV in real apps), Expiry = 1 hour
const generateToken = (id) => {
  return jwt.sign({ id }, 'secret_key_123', { expiresIn: '1h' }); // 5) Create and return JWT string
};

// ---------------------------
// REGISTER User
// ---------------------------
// 6) Controller to register a new user
// 7) Steps: read body → check duplicate email → create user → send 201 response
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;                 // 8) Destructure input fields from request body

    const existing = await User.findOne({ email });             // 9) Query DB to see if a user with same email exists
    if (existing)                                               // 10) If user already present,
      return res.status(400).json({ message: 'Email already exists' }); // 11) send 400 Bad Request

    const user = await User.create({ name, email, password });  // 12) Create and save a new user document
    res.status(201).json({ message: 'User registered successfully', user }); // 13) Send 201 Created with user payload
  } catch (err) {
    res.status(400).json({ message: err.message });             // 14) On validation/other errors, send 400 with error message
  }
};

// ---------------------------
// LOGIN User
// ---------------------------
// 15) Controller to authenticate a user and issue a JWT
// 16) Steps: find by email → verify password → sign token → respond
exports.login = async (req, res) => {
  const { email, password } = req.body;                         // 17) Extract credentials from request body

  const user = await User.findOne({ email });                   // 18) Find user document by email
  if (!user)                                                    // 19) If user not found,
    return res.status(400).json({ message: 'Invalid credentials' }); // 20) send generic invalid creds message

  const isMatch = await user.comparePassword(password);         // 21) Compare given password with hashed password (instance method on model)
  if (!isMatch)                                                 // 22) If password mismatch,
    return res.status(400).json({ message: 'Invalid credentials' }); // 23) send same generic response

  const token = generateToken(user._id);                        // 24) Sign a JWT with the user's MongoDB _id as payload
  res.json({ message: 'Login successful', token });             // 25) Respond with success and token
};

// ---------------------------
// GET Profile (protected route)
// ---------------------------
// 26) Controller to return the logged-in user's profile
// 27) Assumes an auth middleware has verified JWT and set req.user.id
exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id)                 // 28) Fetch user by id from request (set by middleware)
                         .select('-password');                  // 29) Exclude password field from the result
  res.json({ success: true, user });                            // 30) Send sanitized user object
};
