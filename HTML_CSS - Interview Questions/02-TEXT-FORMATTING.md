# CHAPTER 2 — TEXT FORMATTING IN HTML

---

## 11) What is the difference between `<b>` and `<strong>` tags?

### Concept

Both make text appear bold, **but they have different meanings**.

* `<b>` → purely visual bold (no importance implied).
* `<strong>` → semantic emphasis meaning “important text”. Search engines and screen readers treat it differently.

### Interview-Style Answer

`<b>` is used only for styling without any importance, while `<strong>` conveys importance semantically and is recognized by assistive technologies.

### Example

Price warnings or alerts use `<strong>`, not `<b>`.

### Code

```html
<p>This is a <b>bold word</b> with no meaning.</p>

<p>Please read the <strong>Safety Instructions</strong> carefully.</p>
```

### Notes

Use `<strong>` when the text adds meaning, `<b>` for simple styling.

---

## 12) When would you use `<em>` over `<i>`, and vice versa?

### Concept

Both make text italic visually, **but they represent different intentions**:

* `<i>` → Italic purely for style, foreign words, technical terms.
* `<em>` → Emphasis (changes meaning when stressed).

### Interview-Style Answer

Use `<em>` when the sentence meaning changes by emphasizing the word.
Use `<i>` for stylistic italics such as citations, thoughts, foreign words.

### Example

Sentence meaning changes with stress → use `<em>`.

### Code

```html
<p>I told you to <em>call</em> him. Not email.</p>
<!-- Here 'call' is emphasized; meaning changes -->

<p>She said <i>bonjour</i> when she arrived.</p>
<!-- 'bonjour' is foreign term, not an emphasis -->
```

### Notes

Search engines understand `<em>` as semantic emphasis.
Screen-readers also change voice tone.

---

## 13) What is the purpose of `<small>`, `<s>`, and `<mark>` tags?

### Concept

These tags add meaning and formatting.

### 1. `<small>`

Indicates fine print, disclaimers, side comments.

### 2. `<s>`

Represents content that is **no longer accurate**, e.g., old price, outdated text.
(Not for deletion; that’s `<del>`.)

### 3. `<mark>`

Highlights text that is relevant to the user’s current action, like search results.

### Code

```html
<p>
  Original price: <s>₹999</s>  
  <!-- Outdated price -->

  Discounted price: ₹499
</p>

<p>
  <mark>Special Offer Today Only</mark>
  <!-- Highlighted important phrase -->
</p>

<p>
  <small>*Terms and conditions apply</small>
  <!-- Small disclaimer text -->
</p>
```

### Notes

Use them semantically so browsers and SEO tools can interpret meaning.

---

## 14) What are semantic HTML tags and why are they important?

### Concept

Semantic tags describe **meaning** and **role** of content rather than just appearance.

Examples:

* `<header>`
* `<footer>`
* `<section>`
* `<article>`
* `<nav>`
* `<main>`
* `<aside>`
* `<figure>` / `<figcaption>`

### Why important?

1. Improves SEO
2. Helps screen readers
3. Better code readability
4. Browser understands structure → better rendering

### Interview-Style Answer

Semantic tags improve accessibility, SEO, and maintainability by giving meaningful structure to HTML instead of relying on generic `<div>` elements.

### Code

```html
<body>
  <header>
    <h1>My Blog</h1>
  </header>

  <main>
    <article>
      <h2>Blog Title</h2>
      <p>Content here...</p>
    </article>

    <aside>
      <p>Related links</p>
    </aside>
  </main>

  <footer>
    <p>Copyright 2025</p>
  </footer>
</body>
```

### Notes

Using `<div>` everywhere makes structure meaningless. Semantic tags fix that.

---

## 15) How do you create a paragraph or a line break in HTML?

### Concept

HTML paragraphs use `<p>`.
Line breaks use `<br>`.

### Interview-Style Answer

`<p>` creates block-level paragraphs with spacing, while `<br>` creates a single line break inside text without starting a new paragraph.

### Code

```html
<p>This is a paragraph. It has spacing before and after.</p>

<p>
  This is line 1.<br>
  This is line 2 after a break.<br>
  This is line 3.
</p>
```

### Notes

Use `<br>` for poetry, addresses, or forced line breaks.
Do not use `<br>` to create layout spacing; use CSS instead.

---
