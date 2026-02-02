# HTML Interview Questions and Answers

---

**Topic : Text Formating**

# 11. What is the difference between **b** and **strong** tags?

## Complete Explanation

Both `<b>` and `<strong>` visually make text appear **bold**, but they serve **different purposes** in HTML.

### `<b>` tag (Non-semantic bold)

* Only makes text **visually bold**.
* Does **not** add meaning, importance, or emphasis.
* Used when you want bold styling **without implying importance**.
  Examples: keywords, UI labels, product names.

### `<strong>` tag (Semantic strong importance)

* Makes text **bold**, but also carries **semantic meaning**.
* Suggests that the text is **important**, **urgent**, or **critical**.
* Screen readers read it with emphasis (e.g., a stronger tone).
* Better for accessibility and SEO.

### Key Difference

* `<b>` = only visual.
* `<strong>` = visual + meaning (importance).

This difference matters for accessibility tools, search engines, and structured content.

## Code Example (with comments)

```html
<!-- Simple bold styling only -->
<p>
  Please read the <b>manual</b> before using the device.
</p>

<!-- Indicates important information -->
<p>
  <strong>Warning:</strong> Do not touch the hot surface.
</p>

<!-- Both look similar visually but serve different purposes -->
<p>
  Your score is <b>85</b>.  
  Minimum required score is <strong>90</strong>.
</p>

<!-- Example showing screen readers treat strong differently -->
<p>
  <strong>Important update:</strong> Server will restart at 2 AM.
</p>
```

## Short Answer Version

`<b>` makes text bold without adding meaning.
`<strong>` makes text bold and also indicates importance, which screen readers and search engines recognize.

---

# 12. When would you use **em** over **i**, and vice versa?

## Complete Explanation

Both `<em>` and `<i>` make text *italic*, but they have different purposes.

### `<i>` tag (Non-semantic italic)

* Only changes **visual appearance** to italics.
* Does **not** imply emphasis, mood, or importance.
* Used for special text that needs different styling but not emphasis.
  Examples:
* Technical terms
* Foreign words
* Book titles
* Thoughts/dialogues in writing

### `<em>` tag (Semantic emphasis)

* Adds **emphasis**—meaning the word should be stressed when read.
* Screen readers read it with **emphasis**.
* Nesting `<em>` increases emphasis level.
* Useful when meaning changes with stress.

### Key Difference

* `<i>` = only visual italics.
* `<em>` = italics + semantic emphasis + accessibility meaning.

### Why it matters?

Search engines, accessibility tools, and screen readers treat `<em>` as meaningful information but ignore `<i>` semantically.

## Code Example (with comments)

```html
<!-- Using <i> for stylistic italics only -->
<p>
  The word <i>café</i> is borrowed from French.
</p>

<p>
  The book <i>The Great Gatsby</i> is a classic.
</p>

<!-- Using <em> for emphasis in speech or meaning -->
<p>
  I said <em>now</em>, not later.  <!-- Emphasis changes meaning -->
</p>

<!-- Nested emphasis increases level -->
<p>
  This is <em>very <em>important</em></em>.
</p>

<!-- Comparison in same paragraph -->
<p>
  She whispered, <i>I’m fine</i>, but her tone said <em>otherwise</em>.
</p>
```

## Short Answer Version

Use `<i>` for stylistic italics (foreign words, titles, terms).
Use `<em>` when you want meaningful emphasis—something that should be stressed in reading.

---

# 13. What is the purpose of **small**, **s**, and **mark** tags?

## Complete Explanation

HTML provides several inline formatting tags with **specific semantic purposes**:

---

## 1. `<small>` tag

### Meaning

Displays text in **smaller size** and indicates **fine print, disclaimers, or secondary information**.

### Use Cases

* Legal disclaimers
* Copyright text
* Side notes
* Footnotes

It is **semantic**, meaning screen readers understand that the text is less prominent.

---

## 2. `<s>` tag

### Meaning

Represents **strikethrough text** that is no longer accurate, valid, or relevant.

### Use Cases

* Updated or replaced prices
* Deprecated information
* Incorrect items in a list

Important note: For *edits* (deleted text), HTML5 recommends `<del>` instead.
`<s>` is used when text is wrong **but not meant as a document edit**.

---

## 3. `<mark>` tag

### Meaning

Highlights text (yellow by default) to show **relevance, search highlight, or user focus**.

### Use Cases

* Highlighting search results
* Highlighting important key words
* Drawing attention to part of a sentence

Screen readers also understand `<mark>` as highlighted content.

---

## Code Example (with comments)

```html
<!-- SMALL: used for secondary information -->
<p>
  Product Warranty: <small>Valid for 6 months only</small>
</p>

<!-- S: text that is no longer correct or valid -->
<p>
  Original Price: <s>₹1999</s>  Now: ₹1499
</p>

<!-- MARK: highlighting key information -->
<p>
  Please submit the form before <mark>Friday</mark>.
</p>

<!-- Combined example -->
<p>
  <s>Registration closed.</s>
  <mark>New dates announced!</mark>
  <small>(Check the updates page.)</small>
</p>
```

## Short Answer Version

`<small>` shows secondary or fine-print text.
`<s>` shows text that is no longer correct or valid.
`<mark>` highlights text as relevant or important.

---


# 14. What are **semantic HTML tags** and why are they important?

## Complete Explanation

Semantic HTML tags are elements that **describe the meaning and purpose of content**, not just how it looks.
They make the structure of the page clear to:

* Browsers
* Search engines
* Screen readers
* Developers

Examples:
`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`, `<main>`, `<aside>`, `<figure>`, `<figcaption>`, `<time>`, etc.

### Why They Are Important

#### 1. **Accessibility**

Screen readers understand sections of a page better when semantic tags are used.
For example, `<nav>` tells assistive tech this is the navigation menu.

#### 2. **SEO (Search Engine Optimization)**

Search engines use semantic tags to understand which content is important.
Example: `<article>` helps Google know the main content of a blog post.

#### 3. **Better Code Structure**

Makes HTML easier to read and maintain.
Replacing div-heavy code with meaningful tags improves clarity.

#### 4. **Browser Behaviour**

Some tags have default behaviours useful for layout (e.g., `<main>` must appear once).

### Without semantic tags (bad practice)

Using only `<div>` makes HTML unclear and inaccessible.

### With semantic tags (good practice)

Meaning is clear even without CSS.

## Code Example (with comments)

### Non-semantic version (using only divs)

```html
<div class="header">My Website</div>
<div class="nav">Home | About | Contact</div>
<div class="content">
  <div class="post-title">Semantic HTML</div>
  <div class="post-body">This is an example article.</div>
</div>
<div class="footer">© 2025</div>
```

### Semantic version (correct)

```html
<header>
  <h1>My Website</h1>
</header>

<nav>
  <a href="#">Home</a> |
  <a href="#">About</a> |
  <a href="#">Contact</a>
</nav>

<main> <!-- main content of the page -->
  <article>
    <h2>Semantic HTML</h2>
    <p>This is an example article.</p>
  </article>
</main>

<aside>
  <!-- Side content -->
  <p>Sponsored Links</p>
</aside>

<footer>
  © 2025
</footer>
```

### Note

Both versions look the same **visually** if styled with CSS, but the semantic version is superior for SEO, accessibility, and code clarity.

## Short Answer Version

Semantic HTML tags describe meaning rather than appearance (like `<header>`, `<nav>`, `<article>`).
They improve accessibility, SEO, browser understanding, and code readability.

---


# 15. How do you create a paragraph or a line break in HTML?

## Complete Explanation

In HTML, **paragraphs** and **line breaks** are created using different tags because they serve different purposes.

---

## 1. Creating a Paragraph → `<p>` Tag

### Meaning

`<p>` defines a **block-level paragraph**.
Browsers automatically add **space above and below** paragraphs.

### When to use

* For any standalone text block.
* When content represents a complete idea.
* When you want proper spacing and structure.

### Important Behavior

Two paragraphs never appear on the same line unless forced with CSS.

---

## 2. Creating a Line Break → `<br>` Tag

### Meaning

`<br>` inserts a **manual line break** inside text **without starting a new paragraph**.

### When to use

* Addresses
* Poems
* Lyrics
* Formatted text where line breaks matter
* Breaking long sentences manually (if needed)

### Important Behavior

`<br>` does **not** add top/bottom spacing like `<p>`.

---

## 3. Other ways of breaking lines (must know)

### A. Using Multiple `<p>` Tags

Each paragraph appears on a new line with spacing.

```html
<p>First paragraph.</p>
<p>Second paragraph.</p>
```

### B. Using CSS to break lines

If asked in interview:

#### Display block

```html
<span style="display: block;">Line 1</span>
<span style="display: block;">Line 2</span>
```

#### Margin-based spacing

```html
<div style="margin-bottom: 10px;">Line 1</div>
<div>Line 2</div>
```

#### White-space property

```html
<style>
  preformatted {
    white-space: pre;
  }
</style>

<div class="preformatted">
Line 1
Line 2
Line 3
</div>
```

### C. Using `<pre>` for preserving line breaks

`<pre>` keeps text exactly as written.

```html
<pre>
This is line 1
This is line 2
This is line 3
</pre>
```

---

## Code Example (with comments)

```html
<!-- Creating paragraphs -->
<p>This is the first paragraph.</p>
<p>This is the second paragraph with natural spacing.</p>

<!-- Using <br> for manual line breaks -->
<p>
  Address:<br>
  221B Baker Street<br>
  London
</p>

<!-- Using multiple <p> as separate blocks -->
<p>Paragraph 1</p>
<p>Paragraph 2</p>

<!-- Using <pre> to preserve formatting -->
<pre>
Roses are red
Violets are blue
HTML is simple
And readable too
</pre>

<!-- Using CSS for line breaks -->
<span style="display: block;">Line A</span>
<span style="display: block;">Line B</span>
```

---

## Short Answer Version

Use `<p>` for paragraphs (block-level text with spacing).
Use `<br>` for line breaks inside text without creating a new paragraph.
`<pre>` and CSS methods can also preserve or create line breaks when needed.
