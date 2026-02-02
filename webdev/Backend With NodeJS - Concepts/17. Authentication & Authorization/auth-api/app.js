// ===========================
// Main App File (Auth API)
// ===========================

const express = require('express');
const mongoose = require('mongoose');
const { register, login, getProfile } = require('./controllers/authController');
const { protect, restrictTo } = require('./middleware/authMiddleware');

const app = express();
app.use(express.json());

// MongoDB Atlas Connection
mongoose.connect(
  'mongodb+srv://tanishkumarrn68_db_user:c5vpFY3l0NxdzeXN@cluster0.zm92w0s.mongodb.net/?appName=Cluster0'
)
  .then(() => console.log('✅ MongoDB Atlas Connected Successfully'))
  .catch((err) => console.log('❌ DB Connection Error:', err.message));

// Routes
app.post('/api/register', register);
app.post('/api/login', login);
app.get('/api/profile', protect, getProfile);
app.get('/api/admin', protect, restrictTo('admin'), (req, res) => res.send('Admin Access Granted'));

// Start Server
app.listen(4000, () => console.log('🚀 Auth API running on http://localhost:4000'));
