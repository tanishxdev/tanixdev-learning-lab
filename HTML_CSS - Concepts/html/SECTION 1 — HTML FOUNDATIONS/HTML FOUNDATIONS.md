# SECTION 1 — HTML FOUNDATIONS

## (The absolute basics every developer must know)

This section teaches the **core building blocks** of HTML.
If you master Section 1, you can build 80% of all web pages.

We cover:

1. HTML Introduction
2. How Browsers Read HTML (DOM)
3. HTML Editors
4. HTML Basic Structure
5. HTML Elements
6. HTML Attributes
7. HTML Headings
8. HTML Paragraphs
9. HTML Styles
10. HTML Formatting Tags
11. HTML Quotations
12. HTML Comments
13. HTML Colors
14. HTML Entities & Symbols
15. HTML Emojis
16. HTML Charsets
17. HTML URL Encoding
18. HTML vs XHTML

---

# 1. HTML INTRODUCTION

---

### Concept

HTML = **HyperText Markup Language**
It defines the **structure** of a webpage.

HTML is **not a programming language**; it is a **markup language** used to:

• structure content
• create layout
• define meaning of elements

### Why it matters

Browsers convert HTML into the **DOM (Document Object Model)**, which JS and CSS interact with.

### Minimal Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

---

# 2. HOW BROWSERS READ HTML (DOM)

---

Browser converts HTML → **DOM Tree**.

Example:

```html
<body>
    <h1>Title</h1>
    <p>Paragraph</p>
</body>
```

DOM becomes:

```
body
 ├─ h1
 └─ p
```

CSS styles these nodes.
JavaScript manipulates these nodes.

Understanding DOM = understanding how the web works.

---

# 3. HTML EDITORS

---

Professional setup:

• VS Code
• Live Server extension
• Prettier for clean formatting

Organize folders like:

```
project/
  index.html
  /images
  /css
  /js
```

---

# 4. HTML BASIC STRUCTURE

---

Every HTML document requires:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    Content goes here
</body>

</html>
```

### Key parts:

1. `<!DOCTYPE html>` → tells browser to use HTML5
2. `<html>` → root element
3. `<head>` → metadata (title, links, charset)
4. `<body>` → visible content

---

# 5. HTML ELEMENTS

---

HTML element = start tag + content + end tag

```html
<p>Hello</p>
```

Void elements (no closing tag):

```html
<br>
<img>
<hr>
<meta>
<link>
```

---

# 6. HTML ATTRIBUTES

---

Attributes add extra information.

Example:

```html
<img src="photo.jpg" alt="Profile Picture" width="200">
```

### Global attributes (can be used on any element):

```
id
class
title
style
lang
hidden
draggable
data-*
```

---

# 7. HTML HEADINGS

---

```html
<h1>Main Title</h1>
<h2>Section</h2>
<h3>Sub section</h3>
```

Use only **one `<h1>`** per page for SEO & accessibility.

---

# 8. HTML PARAGRAPHS

---

```html
<p>This is a paragraph.</p>
```

Multiple spaces collapse into one.

Use:

```html
<br>   <!-- line break -->
<hr>   <!-- horizontal line -->
```

---

# 9. HTML STYLES (Inline)

---

Not recommended for real projects (use CSS).
But you must understand.

```html
<p style="color:red; font-size:20px;">Hello</p>
```

---

# 10. HTML FORMATTING TAGS

---

Bold:

```html
<b>Bold</b>
<strong>Important</strong>
```

Italic:

```html
<i>Italic</i>
<em>Emphasized</em>
```

Underline:

```html
<u>Underline</u>
```

Monospace:

```html
<code>console.log("Hello")</code>
```

---

# 11. HTML QUOTATIONS

---

Short quote:

```html
<q>Small quote</q>
```

Long quote:

```html
<blockquote>
    This is a paragraph quoted from somewhere.
</blockquote>
```

Cite:

```html
<cite>The Great Book</cite>
```

---

# 12. HTML COMMENTS

---

```html
<!-- This is a comment -->
```

Used for notes, debugging, documentation.

---

# 13. HTML COLORS

---

Used via inline CSS:

```html
<p style="color:blue;">Text</p>
```

Formats:

```
color names  
hex (#ff0000)
rgb(255,0,0)
hsl(0,100%,50%)
```

---

# 14. HTML ENTITIES & SYMBOLS

---

Used to display reserved characters:

```
&lt;     less than (<)
&gt;     greater than (>)
&quot;   double quotes
&amp;   &
&nbsp;  non-breaking space
```

Example:

```html
<p>5 &lt; 10</p>
```

---

# 15. HTML EMOJIS

---

HTML supports Unicode emojis:

```html
<p>😊 🚀 ❤️</p>
```

---

# 16. HTML CHARSETS (UTF-8)

---

Always include:

```html
<meta charset="UTF-8">
```

Ensures all characters (Hindi, emojis, symbols) render correctly.

---

# 17. HTML URL ENCODING

---

Space → `%20`
Slash → `%2F`
Colon → `%3A`

Used in:

• URLs
• API requests
• Query parameters

---

# 18. HTML vs XHTML

---

| HTML5                | XHTML               |
| -------------------- | ------------------- |
| Not strict           | Very strict         |
| Tags can be unclosed | Must close all tags |
| Case-insensitive     | Lowercase required  |
| Better flexibility   | Better validation   |

Interviewers often ask this.

---

# SECTION 1 — INTERVIEW QUESTIONS

---

1. What is HTML and why is it not a programming language?
2. Difference between element and attribute?
3. Why do we use `<!DOCTYPE html>`?
4. What goes inside `<head>`?
5. What is DOM?
6. What is the difference between `<strong>` and `<b>`?
7. What is the purpose of `alt` in `<img>`?
8. Explain block vs inline elements.
9. Why do we add `<meta charset="UTF-8">`?
10. What are HTML entities?

---
