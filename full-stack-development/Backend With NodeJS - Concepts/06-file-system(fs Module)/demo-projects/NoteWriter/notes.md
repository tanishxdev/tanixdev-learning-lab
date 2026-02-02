# 📂 Mini Project: “NoteWriter CLI”

(A simple Node.js script to take user input and save it into a text file)

---

## 🧠 Concept

We’ll use:

| Module     | Purpose                     |
| ---------- | --------------------------- |
| `fs`       | To read/write files         |
| `path`     | To handle file paths safely |
| `readline` | To take input from the user |

The file will be created **in the same directory as your script** — not in root.

---

## 🧱 Project Structure

```
C:\Projects\NoteWriter
│
├── index.js              // main script
├── data                  // folder to store user notes
│    └── (auto-created)
```

---

## 💻 Code — `index.js`

```js
// Import core modules
const fs = require("fs");             // For reading/writing files
const path = require("path");         // For path handling
const readline = require("readline"); // For user input

// Create readline interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Step 1: Define the data folder path (in same directory)
const dataDir = path.join(__dirname, "data");

// Step 2: Ensure the "data" folder exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
  console.log("✅ Created 'data' folder successfully.");
}

// Step 3: Ask user for a filename
rl.question("Enter a file name (without extension): ", (fileName) => {
  // Step 4: Ask user for content
  rl.question("Write your note: ", (noteContent) => {

    // Step 5: Build full file path (same directory)
    const filePath = path.join(dataDir, `${fileName}.txt`);

    // Step 6: Write content into the file
    fs.writeFileSync(filePath, noteContent, "utf-8");
    console.log(`\n✅ Note saved successfully to ${filePath}`);

    // Step 7: Read file back and display content
    const savedContent = fs.readFileSync(filePath, "utf-8");
    console.log("\n--- File Content ---");
    console.log(savedContent);
    console.log("--------------------\n");

    // Step 8: Close the input stream
    rl.close();
  });
});
```

---

## 🧠 Line-by-Line Explanation

| Step | Code                                 | Meaning                                  |
| ---- | ------------------------------------ | ---------------------------------------- |
| 1    | `readline.createInterface()`         | Allows Node to take input from terminal  |
| 2    | `path.join(__dirname, "data")`       | Builds a folder path next to your script |
| 3    | `fs.existsSync()` + `fs.mkdirSync()` | Creates folder if missing                |
| 4    | `rl.question()`                      | Prompts user for input                   |
| 5    | `fs.writeFileSync()`                 | Writes input to a new `.txt` file        |
| 6    | `fs.readFileSync()`                  | Reads and prints the saved content       |
| 7    | `rl.close()`                         | Ends the terminal input session          |

---

## 🧩 Example Dry Run

### Command:

```bash
node index.js
```

### Output:

```
✅ Created 'data' folder successfully.
Enter a file name (without extension): myNote
Write your note: Learning Node.js path and fs modules!

✅ Note saved successfully to C:\Projects\NoteWriter\data\myNote.txt

--- File Content ---
Learning Node.js path and fs modules!
--------------------
```

### Folder after run:

```
NoteWriter/
│
├── index.js
└── data/
    └── myNote.txt
```

---

## 🧠 Notes

* `__dirname` ensures it always writes inside **your script folder**.
* If you run it again, the `data` folder will not be recreated.
* You can easily extend this to:

  * list all saved files
  * delete a note
  * or append new content instead of overwriting.

---

## 🔧 Challenge Extension (for practice)

Try adding these features next:

1. If the file already exists → ask “Do you want to append or overwrite?”
2. Show a list of all files inside `/data` folder using:

   ```js
   fs.readdirSync(dataDir);
   ```
3. Add timestamp automatically to each note.

---