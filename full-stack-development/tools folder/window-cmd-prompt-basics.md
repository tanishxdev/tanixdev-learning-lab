# **Windows Command Prompt (CMD)** 


---

## Navigation Basics

| Command         | Description                                 | Example      |
| --------------- | ------------------------------------------- | ------------ |
| `cd`            | Show current directory                      | `cd`         |
| `cd folderName` | Move **into** a folder                      | `cd backend` |
| `cd ..`         | Move **up one level**                       | `cd ..`      |
| `cd \`          | Go to **root of drive**                     | `cd \`       |
| `dir`           | List all files/folders in current directory | `dir`        |

---

## Folder (Directory) Commands

| Command               | Description                        | Example             |
| --------------------- | ---------------------------------- | ------------------- |
| `mkdir folderName`    | Create a new folder                | `mkdir controllers` |
| `rmdir folderName`    | Remove an empty folder             | `rmdir logs`        |
| `rmdir /s folderName` | Remove folder **and all contents** | `rmdir /s temp`     |

💡 **Tip:** If folder name has spaces → put quotes

```bash
mkdir "My Folder"
cd "My Folder"
```

---

## File Commands

| Command                 | Description             | Example                              |
| ----------------------- | ----------------------- | ------------------------------------ |
| `type nul > fileName`   | Create an empty file    | `type nul > server.js`               |
| `echo text > fileName`  | Create a file with text | `echo console.log("Hello") > app.js` |
| `echo text >> fileName` | Append text to a file   | `echo Another line >> app.js`        |
| `del fileName`          | Delete a file           | `del app.js`                         |

---

## View & Read Files

| Command         | Description       | Example       |
| --------------- | ----------------- | ------------- |
| `type fileName` | Show file content | `type app.js` |
| `cls`           | Clear the screen  | `cls`         |

---

## Other Useful Commands

| Command            | Description                                       |
| ------------------ | ------------------------------------------------- |
| `exit`             | Close CMD                                         |
| `color 0A`         | Change CMD color (try different combos)           |
| `title My Project` | Set a custom CMD window title                     |
| `help`             | Show all available commands                       |
| `help <command>`   | Show help for specific command, e.g. `help mkdir` |

---

## Example: Create Node Project Structure

```bash
mkdir myapp
cd myapp
mkdir routes controllers data
type nul > server.js
type nul > routes\book.routes.js
type nul > controllers\book.controller.js
type nul > data\books.js
```

Result:

```
myapp/
 ├── server.js
 ├── routes/
 │    └── book.routes.js
 ├── controllers/
 │    └── book.controller.js
 └── data/
      └── books.js
```
