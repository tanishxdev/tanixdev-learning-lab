# SECTION 7 — HTML LAYOUT & RESPONSIVE DESIGN

---

# PART 1 — WHAT IS PAGE LAYOUT?

---

Page layout = arrangement of elements on the webpage.

Good layout ensures:

• visual hierarchy
• readability
• responsive behaviour
• accessibility
• clean structure for CSS

HTML only provides **structure**, CSS handles **presentation**.

---

# PART 2 — SEMANTIC LAYOUT TAGS (CORE STRUCTURE)

---

These tags divide the page into meaningful sections.

### 1. `<header>`

Top of page or top of section.

```html
<header>
    <h1>My Website</h1>
</header>
```

### 2. `<nav>`

Contains navigation links.

```html
<nav>
    <a href="#">Home</a>
</nav>
```

### 3. `<main>`

Main content of the page (1 per page).

```html
<main>
    <h2>Welcome</h2>
</main>
```

### 4. `<section>`

A thematic grouping.

```html
<section>
    <h2>Services</h2>
</section>
```

### 5. `<article>`

Independent content.

```html
<article>
    <h2>Blog Post</h2>
</article>
```

### 6. `<aside>`

Sidebar content.

```html
<aside>
    <p>Related Posts</p>
</aside>
```

### 7. `<footer>`

End of page or section.

```html
<footer>
    <p>© 2025 MySite</p>
</footer>
```

---

# PART 3 — BASIC LAYOUT STRUCTURE (STANDARD TEMPLATE)

---

```html
<header></header>

<nav></nav>

<main>
    <section></section>
    <aside></aside>
</main>

<footer></footer>
```

This is the professional structure used in all large websites.

---

# PART 4 — PAGE LAYOUT PATTERNS

---

### 1. **Single Column Layout (Mobile-first)**

Used for blogs, articles.

### 2. **Two Column Layout**

Left = content
Right = sidebar

### 3. **Three Column Layout**

Used in dashboards or blogs.

### 4. **Header + Content + Footer**

Classic layout.

---

# PART 5 — RESPONSIVE META TAG (VERY IMPORTANT)

---

Your page is NOT responsive until you add:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Meaning:

• width = device width
• initial zoom = 1

Without this:
Mobile view looks zoomed out.

---

# PART 6 — RESPONSIVE IMAGES

---

Basic:

```html
<img src="img.jpg" style="max-width:100%; height:auto;">
```

### Advanced — `srcset`

```html
<img 
  src="small.jpg"
  srcset="small.jpg 500w, medium.jpg 900w, large.jpg 1500w"
  alt="Landscape">
```

Browser chooses best image size based on screen resolution.

### `<picture>` tag (art direction)

```html
<picture>
    <source srcset="desktop.jpg" media="(min-width: 800px)">
    <source srcset="mobile.jpg" media="(max-width: 799px)">
    <img src="mobile.jpg" alt="Responsive">
</picture>
```

---

# PART 7 — RESPONSIVE VIDEOS

---

### Issue:

YouTube iframe does NOT scale automatically.

### Solution: Wrap inside a responsive container.

```html
<div class="video-box">
    <iframe src="https://www.youtube.com/embed/ID" allowfullscreen></iframe>
</div>
```

```css
.video-box {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 ratio */
    height: 0;
}

.video-box iframe {
    position: absolute;
    width: 100%;
    height: 100%;
}
```

---

# PART 8 — IFRAMES (EMBED ANYTHING)

---

Embed Google Maps:

```html
<iframe 
  src="https://www.google.com/maps/embed?..." 
  width="600" 
  height="450"
  loading="lazy">
</iframe>
```

Embed a website:

```html
<iframe src="https://example.com" width="100%" height="500"></iframe>
```

---

# PART 9 — LAYOUT EXAMPLE 1: HEADER + NAV + CONTENT + FOOTER

---

```html
<header>
    <h1>My Website</h1>
</header>

<nav>
    <a href="#">Home</a>
    <a href="#">Contact</a>
</nav>

<main>
    <section>
        <h2>Welcome</h2>
        <p>This is content.</p>
    </section>

    <aside>
        <h3>Sidebar</h3>
    </aside>
</main>

<footer>
    <p>© 2025 All Rights Reserved</p>
</footer>
```

---

# PART 10 — LAYOUT EXAMPLE 2: 2-COLUMN LAYOUT

---

```html
<main class="layout">
    <section class="content">Content</section>
    <aside class="sidebar">Sidebar</aside>
</main>
```

CSS:

```css
.layout {
    display: flex;
}

.content {
    flex: 3;
}

.sidebar {
    flex: 1;
}
```

Mobile-responsive:

```css
@media (max-width: 600px) {
    .layout {
        flex-direction: column;
    }
}
```

---

# PART 11 — LAYOUT EXAMPLE 3: RESPONSIVE CARD GRID

---

```html
<div class="grid">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
</div>
```

CSS:

```css
.grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

This layout automatically adjusts to any screen.

---

# PART 12 — FULL RESPONSIVE PAGE EXAMPLE

---

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Responsive Layout</title>
</head>

<body>

<header>
    <h1>My Site</h1>
</header>

<nav>
    <a href="#">Home</a>
    <a href="#">Blog</a>
</nav>

<main>
    <section>
        <h2>Article</h2>
        <p>This is an example article.</p>
    </section>

    <aside>
        <h3>Sidebar</h3>
        <p>Useful links</p>
    </aside>
</main>

<footer>
    <p>© 2025 MySite</p>
</footer>

</body>
</html>
```

---

# PART 13 — INTERVIEW QUESTIONS

---

1. What is the purpose of `<main>`?
2. How is `<section>` different from `<div>`?
3. Why is `<meta viewport>` important?
4. How do you make images responsive?
5. Difference between `srcset` and `picture`?
6. How to embed a responsive YouTube video?
7. Which layout techniques are used for responsiveness?
8. Why are semantic layout tags used?
9. How do you create a two-column layout?
10. How does the browser decide which image to load from `srcset`?

---