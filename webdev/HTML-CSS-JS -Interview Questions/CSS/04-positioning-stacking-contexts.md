# CSS Interview Questions and Answers

---

**Topic : Positioning and Stacking Contexts**

## 16. Explain the different values for the `position` property.

### Answer

The `position` property defines **how an element is positioned** in the document and how it responds to top, right, bottom, and left values.

There are **five main values**:

---

### 1. `static` (default)

* Element follows the normal document flow
* `top`, `left`, `right`, `bottom`, `z-index` do NOT work

```css
.box {
  position: static;
}
```

---

### 2. `relative`

* Element stays in normal flow
* Can be moved relative to its **original position**
* Space is still reserved in layout

```css
.box {
  position: relative;
  top: 10px;
  left: 20px;
}
```

---

### 3. `absolute`

* Removed from normal document flow
* Positioned relative to the **nearest positioned ancestor**
* If none exists, relative to the viewport

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
}
```

---

### 4. `fixed`

* Removed from document flow
* Positioned relative to the **viewport**
* Stays fixed during scrolling

```css
.header {
  position: fixed;
  top: 0;
  width: 100%;
}
```

---

### 5. `sticky`

* Acts like `relative` initially
* Becomes `fixed` when scroll reaches a threshold

```css
.nav {
  position: sticky;
  top: 0;
}
```

---

### Short Interview Answer

The `position` property controls how an element is placed. `static` is default, `relative` moves the element relative to itself, `absolute` positions it relative to a parent, `fixed` locks it to the viewport, and `sticky` switches from relative to fixed during scroll.

---

## 17. Describe `z-index` and how stacking order is controlled in CSS.

### Answer

`z-index` controls the **vertical stacking order** of positioned elements (which element appears in front or behind).

Only elements with a **position value other than `static`** can use `z-index`.

---

### How Stacking Order Works

Elements are stacked based on:

1. **Stacking context**
2. **z-index value**
3. **HTML order (later elements appear on top if z-index is equal)**

Higher `z-index` → appears on top.

---

### Example

```css
.box1 {
  position: absolute;
  z-index: 1;
}

.box2 {
  position: absolute;
  z-index: 10;
}
```

`box2` appears **above** `box1`.

---

### Stacking Context

A new stacking context is created when an element has:

* `position` + `z-index`
* `opacity < 1`
* `transform`
* `filter`
* `will-change`

Elements inside a stacking context cannot overlap elements outside it based on z-index.

---

### Short Interview Answer

`z-index` controls the stacking order of positioned elements. Higher values appear on top. Stacking order is affected by stacking contexts, z-index values, and HTML order. `z-index` works only on non-static positioned elements.


---


## 18. How do you create a sticky footer with CSS?

### Answer

A **sticky footer** stays at the bottom of the page when content is short and moves down naturally when content is long.

The most reliable way is using **Flexbox**.

---

### Flexbox Method (Recommended)

```css
html, body {
  height: 100%;
  margin: 0;
}

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}

.footer {
  background: #222;
  color: white;
  padding: 10px;
}
```

```html
<div class="page">
  <div class="content">
    Main content
  </div>
  <footer class="footer">
    Footer content
  </footer>
</div>
```

---

### Why This Works

* `min-height: 100vh` fills viewport height
* `flex: 1` pushes footer to bottom when content is short
* Footer stays after content when content grows

---

### Short Interview Answer

A sticky footer can be created using Flexbox by making the page a column layout and allowing the main content to grow using `flex: 1`. This keeps the footer at the bottom when content is short and below content when it’s long.


---

## 19. Can you explain how to create a fixed header that remains at the top on scroll?

### Answer

A fixed header stays **visible at the top of the viewport** even when the page is scrolled.
This is done using `position: fixed`.

---

### Basic Implementation

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #333;
  color: white;
}
```

---

### Important: Prevent Content Overlap

Because fixed elements are removed from normal flow, content goes **under the header**.

Add top margin or padding to the body or main content:

```css
body {
  padding-top: 60px;
}
```

---

### Full Example

```html
<header class="header">Header</header>
<main class="content">
  Page content here
</main>
```

```css
.header {
  position: fixed;
  top: 0;
  width: 100%;
}

.content {
  padding-top: 60px;
}
```

---

### Short Interview Answer

A fixed header is created using `position: fixed` with `top: 0`. It stays at the top of the viewport during scrolling. Since it’s removed from normal flow, padding or margin is added to the content to prevent overlap.

---

## 20. When would you use `position: sticky`?

### Answer

`position: sticky` is used when you want an element to **scroll normally at first**, but then **stick to a specific position** (usually top) once a scroll threshold is reached.

It is a **hybrid of `relative` and `fixed`**.

---

### How It Works

* Acts like `position: relative` initially
* Becomes `position: fixed` when the scroll reaches the given offset
* Stops sticking when its **parent container ends**

```css
.section-title {
  position: sticky;
  top: 0;
  background: white;
}
```

---

### Common Use Cases

* Sticky navigation bars inside sections
* Table headers that stay visible while scrolling
* Section headings in long content pages
* Filters or sidebars that should stick temporarily

---

### Important Notes

* Requires a `top`, `left`, `right`, or `bottom` value
* Works relative to the **nearest scrollable parent**
* Does NOT work if parent has `overflow: hidden` in some cases

---

### Short Interview Answer

`position: sticky` is used when an element should behave like a normal element while scrolling but stick to a fixed position once a certain scroll point is reached. It’s commonly used for headers, section titles, and in-page navigation.

