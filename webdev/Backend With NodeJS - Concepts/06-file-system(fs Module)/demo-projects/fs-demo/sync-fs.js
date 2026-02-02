const fs = require('fs');

// Write a file
fs.writeFileSync('./data/sync.txt', 'Synchronous file write example.');

// Read the file
const data = fs.readFileSync('./data/sync.txt', 'utf8');
console.log('File Content:', data);

// Delete the file
fs.unlinkSync('./data/sync.txt');
console.log('File deleted successfully.');