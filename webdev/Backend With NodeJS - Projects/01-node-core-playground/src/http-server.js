const http = require("http");

const server = http.createServer((req, res) => {
  // req = incoming request
  // res = response we send back

  if (req.url === "/") {
    res.write("Home Page");
  } else if (req.url === "/about") {
    res.write("About Page");
  } else {
    res.write("404 Not Found");
  }

  res.end(); // end response
});

// Start server
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
