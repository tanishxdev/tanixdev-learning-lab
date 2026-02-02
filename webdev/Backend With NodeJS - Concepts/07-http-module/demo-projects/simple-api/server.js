const http = require('http');

let books = [
  { id: 1, title: 'Learn Node.js', author: 'Tanish' },
  { id: 2, title: 'Master Express.js', author: 'Ryan Dahl' },
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  // GET all books
  if (req.url === '/books' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify(books));

  // POST (Add a new book)
  } else if (req.url === '/books' && req.method === 'POST') {
    let body = '';

    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      const newBook = JSON.parse(body);
      books.push({ id: books.length + 1, ...newBook });
      res.writeHead(201);
      res.end(JSON.stringify({ message: 'Book added successfully', books }));
    });

  // DELETE a book (by id)
  } else if (req.url.startsWith('/books/') && req.method === 'DELETE') {
    const id = parseInt(req.url.split('/')[2]);
    books = books.filter(book => book.id !== id);
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'Book deleted', books }));

  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));