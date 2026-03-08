const fs = require("fs");

const stream = fs.createReadStream("file.txt", "utf-8");

stream.on("data", (chunk) => {
  console.log("Received chunk:", chunk);
});
