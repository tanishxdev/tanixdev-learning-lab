// ===========================
// Example: Setup EJS in Express
// ===========================


const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// Define routes
app.get('/users', (req, res) => {
  const users = [
    { name: 'Tanish', email: 'tanish@example.com' },
    { name: 'Ravi', email: 'ravi@example.com' }
  ];
  res.render('users', { users });
});

app.get('/', (req, res) => {
  res.render('index', { title: 'Home', message: 'Welcome to EJS Demo!' });
});
app.get('/about', (req, res) => {
  res.render('about', { title: 'about', message: 'We are learing EJS in NODEJS!' });
});

app.listen(3000, () => console.log('Server started on port 3000'));