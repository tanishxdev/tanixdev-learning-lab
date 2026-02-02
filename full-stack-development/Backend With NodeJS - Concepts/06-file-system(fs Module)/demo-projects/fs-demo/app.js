// Write and Read Files (Asynchronous)

const fs = require('fs');

// Write data to a new file (creates file if not exists)
fs.writeFile('./data/notes.txt', 'Node.js File System module!', (err) => {
  if (err) throw err;
  console.log('File created and data written successfully!');

  // Now read the file
  fs.readFile('./data/notes.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('\nFile Content:\n', data);
  });
});

// Append data to existing file
fs.appendFile('./data/notes.txt', '\nAppended line using fs.appendFile().', (err) => {
  if (err) throw err;
  console.log('Data appended successfully!');

  // Rename file
  fs.rename('./data/notes.txt', './data/updated-notes.txt', (err) => {
    if (err) throw err;
    console.log('File renamed successfully!');

    // Delete file
    fs.unlink('./data/updated-notes.txt', (err) => {
      if (err) throw err;
      console.log('File deleted successfully!');
    });
  });
});