const fs = require('fs');
const path = require('path');

console.log(__filename);
console.log(__dirname);

const filePath = path.join(__dirname, 'notes.txt');
console.log("File Path", filePath);

fs.writeFileSync(filePath, 'Hello from Node.js!');

const content = fs.readFileSync(filePath, 'utf-8');
console.log("File Content:", content);

