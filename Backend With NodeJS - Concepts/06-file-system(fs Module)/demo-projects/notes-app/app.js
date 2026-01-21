// ===========================
// Mini Project: Notes Manager
// ===========================

const fs = require('fs');
const path = require('path');

// Define file path for notes
const notesFile = path.join(__dirname, 'data', 'notes.json');

// Function to add a note
function addNote(title, body) {
  let notes = [];

  // If file exists, read old notes
  if (fs.existsSync(notesFile)) {
    const data = fs.readFileSync(notesFile, 'utf8');
    notes = JSON.parse(data);
  }

  // Add new note
  notes.push({ title, body });

  // Write back to file
  fs.writeFileSync(notesFile, JSON.stringify(notes, null, 2));
  console.log(`Note "${title}" added successfully.`);
}

// Function to list all notes
function listNotes() {
  if (!fs.existsSync(notesFile)) return console.log("No notes found.");
  const data = fs.readFileSync(notesFile, 'utf8');
  const notes = JSON.parse(data);
  console.log("\nAll Notes:");
  notes.forEach((note, index) => {
    console.log(`${index + 1}. ${note.title} - ${note.body}`);
  });
}

// Function to delete a note by title
function deleteNote(title) {
  if (!fs.existsSync(notesFile)) return console.log("No notes to delete.");
  const data = fs.readFileSync(notesFile, 'utf8');
  let notes = JSON.parse(data);
  notes = notes.filter(note => note.title !== title);
  fs.writeFileSync(notesFile, JSON.stringify(notes, null, 2));
  console.log(`Note "${title}" deleted successfully.`);
}

// Example Usage
addNote("Learning FS", "Today I learned how to use fs module in Node.js");
addNote("Async vs Sync", "Async is non-blocking, Sync blocks execution.");
listNotes();
deleteNote("Async vs Sync");
listNotes();
