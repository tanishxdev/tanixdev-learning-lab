# SECTION 3 — HTML TEXT & CONTENT ELEMENTS

---
We cover:

1. Text Elements
2. Headings (revisited with best practices)
3. Paragraphs + Line Breaks
4. Formatting Tags
5. Lists (ul, ol, dl)
6. Links (internal, external, email, phone, bookmarks)
7. Images
8. Image Attributes
9. Tables (full structure)
10. Divisions + Span
11. Content Grouping
12. Interview Questions

---

# PART 1 — TEXT ELEMENTS

---

Text is displayed using:

```
<h1> to <h6>  
<p>  
<span>  
<strong>, <em>  
<blockquote>, <q>  
<br>, <hr>  
```

### 1. Headings

```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Sub-section</h3>
```

### Rules:

• Use **one `<h1>`** per page
• Don’t choose headings for styling; they have semantic meaning
• Important for SEO

---

# PART 2 — PARAGRAPHS

---

```html
<p>This is a paragraph of text.</p>
```

Multiple spaces collapse → HTML ignores extra whitespace.

### Line break

```html
<br>
```

### Horizontal rule

```html
<hr>
```

Used to separate sections.

---

# PART 3 — FORMATTING TAGS (INLINE STYLING)

---

Emphasis:

```html
<em>Emphasized text</em>
```

Strong importance:

```html
<strong>Important text</strong>
```

Bold:

```html
<b>Bold</b>
```

Italic:

```html
<i>Italic</i>
```

Monospace:

```html
<code>console.log("Hello")</code>
```

Subscript / Superscript:

```html
H<sub>2</sub>O  
x<sup>2</sup>
```

Underline:

```html
<u>Underlined text</u>
```

---

# PART 4 — LISTS (VERY IMPORTANT)

---

### 1. Unordered List (bullets)

```html
<ul>
    <li>Apple</li>
    <li>Banana</li>
</ul>
```

### 2. Ordered List (numbers)

```html
<ol>
    <li>Step 1</li>
    <li>Step 2</li>
</ol>
```

### 3. Description List

```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
</dl>
```

Widely used for definition pages.

---

# PART 5 — LINKS (ANCHORS)

---

### Basic link

```html
<a href="https://google.com">Visit Google</a>
```

### Open in new tab

```html
<a href="https://google.com" target="_blank">Google</a>
```

### Email link

```html
<a href="mailto:example@email.com">Send Email</a>
```

### Phone link

```html
<a href="tel:+918765432100">Call Me</a>
```

### Internal link (same website)

```html
<a href="/contact.html">Contact</a>
```

### Bookmark link (scroll to section)

```html
<a href="#about">About Section</a>

<h2 id="about">About Us</h2>
```

---

# PART 6 — IMAGES

---

Basic image:

```html
<img src="photo.jpg" alt="Description of image">
```

### Important attributes:

| Attribute | Meaning                                               |
| --------- | ----------------------------------------------------- |
| `src`     | image path                                            |
| `alt`     | text shown if image fails; required for accessibility |
| `width`   | pixel width                                           |
| `height`  | pixel height                                          |

Example:

```html
<img src="dog.jpg" alt="A cute dog" width="300">
```

### Responsive image (auto-scale)

```html
<img src="hero.jpg" alt="" style="max-width:100%; height:auto;">
```

---

# PART 7 — FAVICON (icon in browser tab)

---

```html
<link rel="icon" type="image/png" href="favicon.png">
```

---

# PART 8 — TABLES (DETAILED)

---

Tables represent structured data.

### Basic table:

```html
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Tanish</td>
        <td>21</td>
    </tr>
</table>
```

### Full structure:

```html
<table>
    <caption>Student Data</caption>

    <thead>
        <tr>
            <th>Name</th>
            <th>Marks</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Amit</td>
            <td>95</td>
        </tr>
    </tbody>

    <tfoot>
        <tr>
            <td>Total</td>
            <td>95</td>
        </tr>
    </tfoot>
</table>
```

### Table cell merging:

Row span:

```html
<td rowspan="2">Amit</td>
```

Column span:

```html
<td colspan="3">Merged Cell</td>
```

---

# PART 9 — BLOCK VS INLINE ELEMENTS (RECAP)

---

### Block elements

Take full width
Start on new line

Examples:

```
<div>
<p>
<h1>–<h6>
<section>
```

### Inline elements

Fit content width
Don't force new line

Examples:

```
<span>
<a>
<img>
<strong>
```

---

# PART 10 — <div> AND <span>

---

`<div>` = block container
`<span>` = inline container

Used for grouping:

```html
<div class="card">
    <span class="tag">New</span>
    <p>Product description</p>
</div>
```

---

# PART 11 — CONTENT GROUPING TAGS

---

```
<div> - generic container
<figure> - image + caption
<figcaption> - caption for images
<main> - main content
<section> - logical grouping
<article> - standalone content
<aside> - sidebar content
```

---

# PART 12 — SECTION 3 FULL EXAMPLE

---

```html
<!DOCTYPE html>
<html>
<body>

<h1>HTML Section 3 Demo</h1>

<p>This is a paragraph with <strong>important</strong> text.</p>

<ul>
    <li>HTML</li>
    <li>CSS</li>
</ul>

<a href="#img">Go to Image</a>

<h2 id="img">Example Image</h2>
<img src="nature.jpg" alt="Nature" width="300">

<table>
    <caption>Scores</caption>
    <tr>
        <th>Name</th>
        <th>Score</th>
    </tr>
    <tr>
        <td>Amit</td>
        <td>92</td>
    </tr>
</table>

</body>
</html>
```

---

# SECTION 3 — INTERVIEW QUESTIONS

---

1. Difference between `<b>` vs `<strong>`?
2. Difference between inline vs block elements?
3. What is the purpose of the `alt` attribute?
4. Max difference between `<ol>`, `<ul>`, and `<dl>`?
5. What are rowspan and colspan used for?
6. How to create an email link in HTML?
7. How do you link to a section inside the same page?
8. How do you make an image responsive?
9. Can a `<div>` contain inline elements?
10. What is the semantic meaning of `<figure>` and `<figcaption>`?

---