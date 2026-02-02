const express = require('express');
const app = express();

// Step 1: Tell Express to use EJS as the templating engine
app.set('view engine', 'ejs');

// Step 2: Define homepage route
app.get('/', (req, res) => {
  const posts = [
    { id: 1, title: 'Intro to Node.js', content: 'Node.js is awesome!' },
    { id: 2, title: 'Learning EJS', content: 'EJS helps render templates easily.' },
  ];
  // Render index.ejs and pass posts data
  res.render('index', { posts });
});

// Step 3: Define a single post route
app.get('/post/:id', (req, res) => {
  const post = { id: req.params.id, title: `Post ${req.params.id}`, content: 'This is a sample blog post.' };
  res.render('post', { post });
});

// Step 4: Start the server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
