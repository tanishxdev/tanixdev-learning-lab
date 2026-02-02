
## **1️⃣ Project Overview**

Your app is a simple **Express + EJS** setup.

Goal:

* Show pages (like homepage, single post page).
* Use reusable parts (header, footer).
* Render HTML dynamically from `.ejs` files.

---

## **2️⃣ Folder Structure Breakdown**

```
blog-app/
│
├── app.js                → Main Express app (server + routes)
└── views/                → All EJS template files
    ├── index.ejs         → Homepage template
    ├── post.ejs          → Single blog post template
    └── partials/         → Folder for reusable templates
        ├── header.ejs    → Common top part of every page
        └── footer.ejs    → Common bottom part of every page
```

---

## **3️⃣ How the App Flows**

### **(1) app.js — Your Backend Entry Point**

This file:

* Starts the Express server
* Configures EJS as view engine
* Defines routes (like `/` and `/post/:id`)
* Sends data to templates

Example:

```js
const express = require('express');
const app = express();

// Step 1: Tell Express to use EJS as the templating engine
app.set('view engine', 'ejs');

// Step 2: Define homepage route
app.get('/', (req, res) => {
  const posts = [
    { id: 1, title: 'Intro to Node.js', content: 'Node.js is awesome!' },
    { id: 2, title: 'Learning EJS', content: 'EJS helps render templates easily.' },
  ];
  // Render index.ejs and pass posts data
  res.render('index', { posts });
});

// Step 3: Define a single post route
app.get('/post/:id', (req, res) => {
  const post = { id: req.params.id, title: `Post ${req.params.id}`, content: 'This is a sample blog post.' };
  res.render('post', { post });
});

// Step 4: Start the server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
```

---

### **(2) views/ — Template Files**

These `.ejs` files are like your frontend **HTML**, but smarter —
they can display **dynamic data** from the backend.

#### **(a) views/index.ejs**

```ejs
<!DOCTYPE html>
<html>
  <head>
    <title>My Blog</title>
  </head>
  <body>
    <%- include('partials/header') %>

    <h1>Welcome to My Blog</h1>

    <ul>
      <% posts.forEach(post => { %>
        <li>
          <a href="/post/<%= post.id %>"><%= post.title %></a>
        </li>
      <% }) %>
    </ul>

    <%- include('partials/footer') %>
  </body>
</html>
```

**What happens here:**

* `<%- include('partials/header') %>` imports `header.ejs`
* `<% posts.forEach(...) %>` loops through posts sent by backend
* `<%= post.title %>` injects dynamic data into HTML

---

#### **(b) views/post.ejs**

```ejs
<!DOCTYPE html>
<html>
  <head>
    <title><%= post.title %></title>
  </head>
  <body>
    <%- include('partials/header') %>

    <h2><%= post.title %></h2>
    <p><%= post.content %></p>

    <a href="/">Back to Home</a>

    <%- include('partials/footer') %>
  </body>
</html>
```

**What happens here:**

* Displays the single post data dynamically (`post.title`, `post.content`).
* Reuses the same header/footer partials to maintain layout consistency.

---

#### **(c) views/partials/header.ejs**

```ejs
<header>
  <h2>My Blog App</h2>
  <nav>
    <a href="/">Home</a> |
    <a href="/about">About</a>
  </nav>
  <hr>
</header>
```

#### **(d) views/partials/footer.ejs**

```ejs
<hr>
<footer>
  <p>© 2025 My Blog App</p>
</footer>
```

**Why partials?**
So you don’t repeat common HTML in every page.
If you update header/footer once, it updates across all pages.

---

## **4️⃣ How Rendering Works Internally**

When you visit:

### **`http://localhost:3000/`**

1. Express receives request.
2. Finds route `/` in `app.js`.
3. Calls `res.render('index', { posts })`.
4. Express loads `views/index.ejs`.
5. EJS replaces `<%= post.title %>` with actual data.
6. Response HTML is sent to browser.

### **`http://localhost:3000/post/2`**

1. Express gets route `/post/:id`.
2. Fetches post data.
3. Calls `res.render('post', { post })`.
4. EJS fills in placeholders like `<%= post.title %>`.

---

## **5️⃣ Concept Summary Table**

| Component                | Description              | Example                             |
| ------------------------ | ------------------------ | ----------------------------------- |
| `app.js`                 | Main backend server file | Defines routes and passes data      |
| `views/`                 | EJS templates            | Dynamic HTML                        |
| `partials/`              | Shared components        | header, footer                      |
| `res.render(view, data)` | Sends data to template   | `res.render('index', { posts })`    |
| `<%= variable %>`        | Output escaped variable  | `<%= post.title %>`                 |
| `<%- include('file') %>` | Include another EJS file | `<%- include('partials/footer') %>` |
| `<% code %>`             | Execute JS logic         | `<% posts.forEach(...) %>`          |

---

## **6️⃣ Full Request-Response Flow (Simplified)**

```
Browser  →  http://localhost:3000/post/1
↓
Express route (app.get('/post/:id'))
↓
Backend fetches data (dummy or DB)
↓
res.render('post', { post })
↓
EJS compiles post.ejs with dynamic data
↓
Browser receives final HTML
```

---

## **7️⃣ Notes**

* All `.ejs` files must live in the folder set by:

  ```js
  app.set('view engine', 'ejs');
  ```

  (defaults to `/views`)
* To use a different folder (like `/templates`), add:

  ```js
  app.set('views', path.join(__dirname, 'templates'));
  ```
* `include()` is for reusing layouts — very similar to React components or partials in PHP.

---
