# SECTION 2 — HTML DOCUMENT STRUCTURE

---

cover:

1. HTML Document Structure (Full breakdown)
2. `<head>` Tag — Deep Explanation
3. Metadata (`<meta>`)
4. Page Title
5. Linking CSS, JS, Icons, Fonts
6. File Paths (relative/absolute/root)
7. HTML Layout Basics
8. Block vs Inline Elements
9. The `<div>` Element
10. Semantic HTML (overview, detailed later)

---

# PART 1 — COMPLETE HTML PAGE STRUCTURE

---

This is the skeleton of every webpage:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>

<body>
    Visible content goes here
</body>

</html>
```

Let's break everything down.

---

# PART 2 — <!DOCTYPE html>

---

### Concept

Tells the browser:
"Render this page using **HTML5 standards mode**."

Without DOCTYPE, browsers may switch to **quirks mode**, causing layout bugs.

---

# PART 3 — <html> Tag

---

### What it does

The `<html>` tag wraps the entire document.

### Important attribute: `lang`

```html
<html lang="en">
```

Used for:

• screen readers
• SEO
• browser language detection

---

# PART 4 — THE <head> TAG (DETAILED)

---

The `<head>` contains **metadata**, not visible on the page.

Used for:

• SEO
• social previews
• linking CSS
• importing fonts
• scripts
• favicon
• page title

### Typical `<head>` structure:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="My website description">
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
```

---

# PART 5 — IMPORTANT <meta> TAGS

---

### 1. Character Encoding (UTF-8)

```html
<meta charset="UTF-8">
```

Supports all languages + emojis.

### 2. Responsive Web Design (Critical!)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Tells browser:

• width = device width
• scale = 1 (no zoom)

### 3. Description (SEO)

```html
<meta name="description" content="Best learning site.">
```

Used by Google search results.

### 4. Keywords (not used much today)

```html
<meta name="keywords" content="HTML, CSS, JavaScript">
```

### 5. Author

```html
<meta name="author" content="Tanish">
```

---

# PART 6 — PAGE TITLE

---

Displayed:

• in browser tab
• in bookmarks
• in search engines

```html
<title>My Awesome Page</title>
```

---

# PART 7 — LINKING FILES (CSS, JS, FAVICON, FONTS)

---

### 1. Stylesheet

```html
<link rel="stylesheet" href="style.css">
```

### 2. JavaScript

Before closing body:

```html
<script src="app.js"></script>
```

### 3. Favicon

```html
<link rel="icon" href="favicon.png">
```

### 4. Google Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
```

### 5. Import CSS inside CSS file

```css
@import url("reset.css");
```

---

# PART 8 — FILE PATHS (VERY IMPORTANT)

---

### 1. Same folder:

```
index.html  
style.css  
```

```html
<link rel="stylesheet" href="style.css">
```

### 2. Inside folder:

```
css/style.css
```

```html
<link rel="stylesheet" href="css/style.css">
```

### 3. Going back a folder:

```
../images/photo.jpg
```

### 4. Absolute paths:

```html
<img src="https://example.com/photo.jpg">
```

### 5. Root relative paths (web servers):

```html
href="/assets/logo.png"
```

---

# PART 9 — BLOCK VS INLINE ELEMENTS

---

### Block-level elements

• Always start on a new line
• Take full width
• Can contain block or inline

Examples:

```
<div>
<h1>–<h6>
<p>
<section>
<footer>
<header>
ul, li
```

### Inline elements

• Flow with text
• Take only necessary width
• Cannot contain block elements

Examples:

```
<span>
<a>
<strong>
<em>
<img>
```

---

# PART 10 — THE <div> ELEMENT

---

### Purpose

A `<div>` is a container used to group HTML elements.

```html
<div class="card">
    <h2>Title</h2>
    <p>Description text</p>
</div>
```

Common uses:

• Cards
• Navbars
• Layout grids
• Sections
• Wrappers

---

# PART 11 — SEMANTIC HTML OVERVIEW

## (Detailed in Section 5, but intro here)

Semantic tags describe **meaning**:

```
<header>
<nav>
<main>
<section>
<article>
<footer>
<aside>
```

Better for:

• SEO
• Accessibility
• Screen readers
• Clean structure

Example:

```html
<main>
    <section>
        <h2>Blog Post</h2>
    </section>
</main>
```

---

# SECTION 2 — FULL EXAMPLE PAGE

---

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Section 2 Demo</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<header>
    <h1>Welcome to My Site</h1>
</header>

<main>
    <section>
        <h2>Section Title</h2>
        <p>This is a paragraph of text inside a section.</p>
    </section>
</main>

<footer>
    <p>© 2025 My Website</p>
</footer>

<script src="app.js"></script>
</body>

</html>
```

---

# SECTION 2 — INTERVIEW QUESTIONS

---

1. What is the purpose of `<!DOCTYPE html>`?
2. What is the difference between `<head>` and `<body>`?
3. Why is `<meta viewport>` important?
4. What is the purpose of the `lang` attribute?
5. Difference between relative and absolute paths?
6. Block vs Inline elements?
7. Why use semantic tags?
8. What is the DOM?
9. Difference between linking CSS via `<link>` vs `<style>`?
10. Why should scripts be placed before `</body>`?
