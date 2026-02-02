

# SECTION 5 — HTML SEMANTICS


---
1. What is Semantic HTML
2. Why semantics matter
3. Full list of semantic tags
4. Structure of a semantic webpage
5. Examples of correct usage
6. `<section>` vs `<article>` vs `<div>`
7. `<header>`, `<footer>`, `<nav>`, `<main>`
8. `<figure>` & `<figcaption>`
9. Accessibility impact
10. SEO best practices
11. Full example page
12. Interview questions

---
# PART 1 — WHAT IS SEMANTIC HTML?

---

Semantic HTML refers to using **meaningful tags** that describe the purpose of content.

Example of semantic:

```html
<header>
<nav>
<section>
<article>
<footer>
```

Non-semantic:

```html
<div>
<span>
```

Semantic tags help:

• Browsers
• Search engines
• Screen readers
• Developers

understand **what** each part of the page represents.

---

# PART 2 — WHY SEMANTIC HTML MATTERS

---

### 1. Improves Accessibility

Screen readers announce content better.

### 2. Improves SEO

Google understands content structure.

### 3. Better readability for developers

Clean, structured HTML = easier maintenance.

### 4. Browser optimizations

Browsers treat semantic elements differently for layout calculations.

### 5. Reusability & conventions

Modern frameworks depend heavily on semantics.

---

# PART 3 — ALL SEMANTIC ELEMENTS (FULL LIST)

---

### Structural Tags

```
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

### Media / content

```
<figure>
<figcaption>
```

### Text meaning

```
<mark>
<time>
<abbr>
<cite>
<q>
<blockquote>
```

### Table semantics

```
<thead>
<tbody>
<tfoot>
<caption>
```

---

# PART 4 — MEANING + USE CASE OF EACH SEMANTIC TAG

---

### 1. `<header>`

Used at top of page or section.

```html
<header>
    <h1>Website Logo</h1>
</header>
```

### 2. `<nav>`

Contains navigation links.

```html
<nav>
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
</nav>
```

### 3. `<main>`

Represents main content area (1 per page).

```html
<main>
    <h2>Main Article</h2>
</main>
```

### 4. `<section>`

Represents a **thematic grouping**.

```html
<section>
    <h2>Services</h2>
    <p>We provide web solutions.</p>
</section>
```

### 5. `<article>`

Independent content that makes sense alone.

Examples:

• Blog post
• News article
• Product card

```html
<article>
    <h3>Blog Post</h3>
    <p>Content...</p>
</article>
```

### Difference: `<section>` vs `<article>`

| `<section>`              | `<article>`               |
| ------------------------ | ------------------------- |
| Groups related content   | Self-contained content    |
| Part of something bigger | Can be standalone         |
| Needs heading            | Often has its own heading |

### 6. `<aside>`

Side content / sidebar.

```html
<aside>
    <p>Related articles</p>
</aside>
```

### 7. `<footer>`

Appears at end of page or section.

```html
<footer>
    <p>© 2025 My Site</p>
</footer>
```

### 8. `<figure>` & `<figcaption>`

```html
<figure>
    <img src="img.jpg">
    <figcaption>Image explanation</figcaption>
</figure>
```

### 9. `<time>`

Represents dates and times:

```html
<time datetime="2025-02-14">Feb 14, 2025</time>
```

Great for SEO.

---

# PART 5 — CORRECT SEMANTIC PAGE STRUCTURE

---

```html
<body>

<header>
    <h1>My Website</h1>
    <nav>
        <a href="#">Home</a>
        <a href="#">Blog</a>
    </nav>
</header>

<main>

    <section>
        <h2>About Us</h2>
        <p>We create beautiful websites.</p>
    </section>

    <section>
        <h2>Latest Articles</h2>

        <article>
            <h3>Learning HTML</h3>
            <p>HTML is the structure of the web.</p>
        </article>

        <article>
            <h3>Why Semantics Matter</h3>
            <p>Better SEO & accessibility.</p>
        </article>
    </section>

    <aside>
        <h3>Popular Tags</h3>
        <p>#webdev #html</p>
    </aside>

</main>

<footer>
    <p>© 2025 My Website</p>
</footer>

</body>
```

---

# PART 6 — WHEN TO USE DIV vs SEMANTIC TAGS

---

### Use `<div>` when:

• No semantic meaning
• Just a container for styling (cards, wrappers, grids)

### Use semantic tags when:

• The content has structure
• Section titles exist
• It improves meaning

Example:
GOOD:

```html
<section>
    <h2>Features</h2>
</section>
```

BAD:

```html
<div class="section">
```

---

# PART 7 — ACCESSIBILITY & SEO BENEFITS

---

### Accessibility:

Screen readers read structure:

• “Navigation”
• “Main section”
• “Footer region”

### SEO:

Google uses semantics to understand:

• Main topics
• Important sections
• Article relevance
• Structured content

It influences ranking.

---

# PART 8 — FULL SEMANTIC EXAMPLE (WITH MEDIA)

---

```html
<!DOCTYPE html>
<html lang="en">

<body>

<header>
    <h1>Travel Blog</h1>
    <nav>
        <a href="#articles">Articles</a>
        <a href="#contact">Contact</a>
    </nav>
</header>

<main>
    <section id="articles">
        <h2>Recent Posts</h2>

        <article>
            <h3>Exploring Mountains</h3>
            <figure>
                <img src="mountain.jpg" alt="Mountains">
                <figcaption>Beautiful mountain view</figcaption>
            </figure>
            <time datetime="2025-02-01">Feb 1, 2025</time>
            <p>An amazing journey through nature.</p>
        </article>

    </section>

    <aside>
        <h3>Recommended Reads</h3>
        <p>Top 10 travel tips</p>
    </aside>
</main>

<footer id="contact">
    <p>Contact us at travel@example.com</p>
</footer>

</body>
</html>
```

---

# PART 9 — INTERVIEW QUESTIONS (SEMANTIC HTML)

---

1. What is semantic HTML?
2. Why is semantic HTML important?
3. Difference between `<section>` and `<article>`?
4. When should you use `<div>` instead of semantic tags?
5. What are the benefits of semantic HTML for SEO?
6. What does the `<main>` tag represent?
7. Difference between `<header>` and `<nav>`?
8. What is `<figure>` used for?
9. How does semantic HTML improve accessibility?
10. Why should there be only one `<main>`?

---
