# CHAPTER 1 — HTML BASICS

---

## 1) What does HTML stand for and what is its purpose?

### Concept

HTML stands for **HyperText Markup Language**.
Its purpose is to **structure** the content of a webpage: text, images, layout, forms, videos, links, etc.

### Interview-Style Answer

HTML is a markup language used to define the structure of web pages using tags. It does not handle logic or styling; those are handled by JavaScript and CSS.

### Example

A simple page displaying a heading and a paragraph.

### Code (with comments)

```html
<!-- HTML file defines structure only -->
<!DOCTYPE html>
<html>
  <head>
    <title>Simple Page</title>
  </head>

  <body>
    <!-- Heading element -->
    <h1>Welcome to My Website</h1>

    <!-- Paragraph element -->
    <p>This is my first HTML page.</p>
  </body>
</html>
```

### Notes

Think of HTML as the “skeleton” of a webpage.
CSS = design, JavaScript = interactivity.

---

## 2) Describe the basic structure of an HTML document.

### Concept

Every HTML page has a predictable structure with 5 main parts:

1. `<!DOCTYPE html>`
2. `<html>`
3. `<head>`
4. `<body>`
5. Content inside the body

### Interview-Style Answer

HTML structure follows a strict hierarchy, starting with DOCTYPE, then root `<html>`, then metadata in `<head>`, and visible content in `<body>`.

### Code

```html
<!DOCTYPE html> <!-- Tells browser this is HTML5 -->
<html lang="en"> <!-- Root element -->

<head>
  <meta charset="UTF-8">        <!-- Character encoding -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Structure</title>
</head>

<body>
  <!-- All visible content stays here -->
  <h2>Hello</h2>
  <p>This is the body area.</p>
</body>

</html>
```

### Notes

Interviewers often ask why `<head>` and `<body>` exist separately → we answer in Q4.

---

## 3) What do DOCTYPE and html lang attributes do?

### DOCTYPE

**Purpose:** Tells the browser to render the page using **HTML5 standards mode**.
Without DOCTYPE → browser may switch to "quirks mode" causing layout issues.

### lang attribute

Defines the language of the document for:

* Screen readers (accessibility)
* SEO
* Browser spell-checking

### Code

```html
<!DOCTYPE html>       <!-- Enables HTML5 standards mode -->
<html lang="en">      <!-- Tells browser page language is English -->
<head>
  <title>Example</title>
</head>
<body></body>
</html>
```

### Notes

Always include `lang` – helps Google and accessibility tools.

---

## 4) What is the difference between head and body tags?

### Concept

`<head>` = metadata
`<body>` = visible content

### Interview-Style Answer

The head contains configuration data (title, meta tags, links, scripts), while the body contains everything that appears on the screen.

### Code

```html
<html>
<head>
  <!-- NOT visible on page -->
  <title>My Page Title</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css"> <!-- CSS loaded here -->
</head>

<body>
  <!-- Visible UI elements -->
  <h1>Main Heading</h1>
  <p>User-visible content starts here.</p>
</body>
</html>
```

### Notes

Anything that doesn’t need to be displayed goes inside `<head>`.

---

## 5) Can you explain the purpose of meta tags in HTML?

### Concept

Meta tags provide information **about the webpage** to browsers, search engines, and devices.

### Uses:

* SEO
* Responsive design
* Charset
* Description

### Code

```html
<head>
  <!-- Sets character encoding -->
  <meta charset="UTF-8">

  <!-- Makes page responsive -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- SEO description -->
  <meta name="description" content="Interview questions on HTML basics.">
</head>
```

### Notes

The viewport meta tag is critical for mobile screens.

---

## 6) How do you link a CSS file to an HTML document?

### Concept

Use the `<link>` tag inside the `<head>`.

### Code

```html
<head>
  <!-- Linking external CSS -->
  <link rel="stylesheet" href="style.css">
</head>
```

### Notes

`rel="stylesheet"` tells the browser the linked file contains CSS.

---

## 7) How do you link a JavaScript file to an HTML document?

### Concept

Use `<script>` tag.
Place it before `</body>` for better performance.

### Code

```html
<body>
  <h1>Hello JS</h1>

  <!-- Load JS file -->
  <script src="script.js"></script>
</body>
```

### Notes

Scripts in `<head>` block page loading unless `defer` is used.

Example:

```html
<script src="app.js" defer></script>
```

---

## 8) How do you add a comment in HTML and why would you use them?

### Concept

HTML comment syntax:

```html
<!-- comment here -->
```

### Why use them?

* Documentation
* Separating sections
* Notes for other developers
* Temporarily disable code

### Example

```html
<body>
  <!-- Navigation section -->
  <nav>...</nav>

  <!-- Temporarily removing this section
  <div>Old UI</div>
  -->
</body>
```

---

## 9) How do you serve your page in multiple languages?

### Concept

Three ways:

1. Use `lang` attribute
2. Create separate localized pages (`index.en.html`, `index.fr.html`)
3. Use server-side i18n (Next.js, React Intl, etc.)
4. Use `<meta http-equiv="content-language">`

### Example

```html
<html lang="fr">
<body>
  <h1>Bonjour</h1>
</body>
</html>
```

### Notes

HTML alone does not translate text; you create versions or use JS/server logic.

---

## 10) What are data-* attributes and when should they be used?

### Concept

`data-*` attributes store **custom data** inside HTML elements.

Used when:

* Passing data to JS
* Storing metadata (IDs, states, flags)
* No need to create custom attributes

### Example

### Code

```html
<button 
  id="buyBtn" 
  data-product-id="101"
  data-price="399"
>
  Buy Now
</button>

<script>
  const btn = document.getElementById("buyBtn");

  // Reading custom data attributes
  console.log(btn.dataset.productId); // "101"
  console.log(btn.dataset.price);     // "399"
</script>
```

### Notes

Use them for small metadata, not for storing large JSON structures.

---


Below is a **clear, simple, deep explanation** of:

**“Scripts in `<head>` block page loading unless `defer` is used.”**

No emojis.
Full reasoning + small diagrams + code with comments.

---


## 11) Why scripts in `<head>` block page loading?

### Concept

When the browser loads an HTML file, it reads it **top to bottom**.

If it finds:

```html
<script src="app.js"></script>
```

inside `<head>`, the browser **stops rendering the page**, downloads the JS file, executes it, and then continues.

This causes:

* Slower page loading
* Blank page for a moment (because body is not rendered yet)

### 1. Why blocking happens?

Because JavaScript can modify HTML structure using DOM APIs, so browser pauses rendering to ensure JS doesn’t conflict with layout building.

#### Mini Flow Diagram

```
[Browser starts reading HTML]
       |
       V
reads <head> 
       |
       V
finds <script src="app.js">
       |
       V
STOP rendering HTML
download JS file
execute JS
       |
       V
continue rendering <body>
```

So JS inside `<head>` = blocking behavior.

---

### 2. What does `defer` do?

The `defer` attribute tells the browser:

* “Download the script in parallel”
* “But do NOT execute it until the HTML is fully parsed”

This removes the blocking behavior.

#### Flow with defer

```
HTML parsing continues → parallel download of JS → execute JS AFTER HTML is complete
```

---

### 3. Example WITHOUT defer (blocking)

```html
<!DOCTYPE html>
<html>
<head>
  <script src="heavy.js"></script> 
  <!-- Browser stops here, downloads + runs JS, then continues -->
</head>
<body>
  <h1>This content appears late</h1>
</body>
</html>
```

#### Behaviour

The user sees a **blank screen** until `heavy.js` finishes.

---

### 4. Example WITH defer (non-blocking)

```html
<!DOCTYPE html>
<html>
<head>
  <!-- JS downloads in background but does NOT block -->
  <script src="heavy.js" defer></script>
</head>
<body>
  <h1>This content loads immediately</h1>
</body>
</html>
```

#### Behaviour

* HTML loads first
* Body becomes visible
* JavaScript executes **after the DOM is fully ready**

Equivalent to running JS at bottom of `<body>`.

---

### 5. When should you use `defer`?

Use `defer` when:

* Your JS needs to access DOM elements
* You want fast page load
* You don’t want to put scripts at bottom of body

Example in real project:

```html
<script src="script.js" defer></script>
```

---

### 6. Difference between `defer` and `async` for interviews

| Attribute | Behaviour                                               | Best Use                             |
| --------- | ------------------------------------------------------- | ------------------------------------ |
| `defer`   | Downloads in parallel, executes after HTML fully parsed | Most general, safe for DOM           |
| `async`   | Downloads in parallel, executes immediately when ready  | For analytics, ads, tracking scripts |

---
