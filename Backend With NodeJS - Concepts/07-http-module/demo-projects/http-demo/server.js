// ===========================
// Example: Serving HTML Files
// ===========================

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = '';

  if (req.url === '/') {
    filePath = path.join(__dirname, 'pages', 'index.html');
  } else if (req.url === '/about') {
    filePath = path.join(__dirname, 'pages', 'about.html');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
    return;
  }

  // Read and serve file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
