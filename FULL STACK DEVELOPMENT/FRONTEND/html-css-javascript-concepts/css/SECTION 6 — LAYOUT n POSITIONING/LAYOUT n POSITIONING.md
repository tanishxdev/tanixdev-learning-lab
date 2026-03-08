# SECTION 6 — CSS LAYOUT & POSITIONING

---

covers:

1. CSS Display
2. CSS Position
3. CSS Z-index
4. CSS Overflow
5. CSS Float
6. CSS Inline-block
7. CSS Alignment Techniques
8. CSS Multiple Columns
9. Navigation Bar Layout Basics
10. Dropdown Layout Basics
11. object-fit
12. object-position


---

# PART 1 — CSS DISPLAY

---

## 1. Concept

`display` controls how an element behaves in the layout:

• How it occupies space
• Whether it starts a new line
• Whether width/height apply
• Whether children follow a layout model

## 2. Types of display

### A) block

• Takes full width
• Starts a new line
• Width/height respected

Examples: `div`, `p`, `h1`

### B) inline

• Takes only required width
• Does NOT start a new line
• Width/height NOT respected

Examples: `span`, `a`

### C) inline-block

• Behaves inline but accepts width/height
• Good for menus, buttons, cards

### D) none

• Removes element completely (not visible & not in layout)

### E) Others (advanced)

`flex`, `grid`, `table`, `contents`, `inline-flex`, etc.
(You will learn in Flexbox & Grid sections)

---

## 3. Example Code (with deep comments)

```html
<style>
.box1 {
    display: block;      /* Takes full width */
    background: lightgray;
}

.box2 {
    display: inline;     /* Behaves like text */
    background: yellow;
}

.box3 {
    display: inline-block; /* Inline but width/height allowed */
    background: pink;
    width: 120px;
    height: 40px;
}

.box4 {
    display: none;        /* Removed from layout */
}
</style>

<div class="box1">Block Element</div>

<span class="box2">Inline 1</span>
<span class="box2">Inline 2</span>

<div class="box3">Inline-Block</div>

<div class="box4">This will not appear</div>
```

---

## 4. Notes

• Use inline-block to make menu items align nicely.
• Use display:none for toggling dropdowns/popups.
• inline cannot set height/width.

---

## 5. Interview Questions

1. Difference between inline, block, inline-block.
2. Why height does not apply on inline elements?
3. How is display:none different from visibility:hidden?
4. Where is inline-block commonly used?

---

# PART 2 — CSS POSITION

---

## 1. Concept

`position` controls where an element is placed relative to normal flow.

Types:

1. static
2. relative
3. absolute
4. fixed
5. sticky

---

## 2. All Position Types Explained Simply

### static (default)

No positioning. Top/left do not work.

### relative

• Stays in normal flow
• But can shift using top/left
• Creates a positioning *context* for absolute children

### absolute

• Removed from normal flow
• Positioned relative to the nearest positioned parent
• If no parent is positioned → relative to `<body>`

### fixed

• Stays fixed relative to **viewport**
• Does not move on scroll
Examples: sticky headers, floating chat buttons

### sticky

• Acts like relative until scroll passes a threshold
• Then sticks to the top
Useful for sticking headings

---

## 3. Example Code

```html
<style>
.parent {
    position: relative;     /* Provides context to absolute child */
    width: 300px;
    height: 200px;
    background: lightgray;
}

.child {
    position: absolute;     /* Positioned inside parent */
    top: 20px;
    left: 30px;
    background: orange;
    padding: 10px;
}
</style>

<div class="parent">
    Parent Box
    <div class="child">Absolute Child</div>
</div>
```

---

## 4. Notes

• Always set `position: relative` on parent when using `absolute` child.
• `fixed` ignores parent positioning.
• Sticky requires a top value: `top:0`.

---

## 5. Interview Questions

1. How does absolute positioning decide its reference?
2. Difference between relative and static.
3. Real use cases of fixed?
4. Why does sticky not work sometimes?

---

# PART 3 — CSS Z-INDEX

---

## 1. Concept

Controls which element appears **on top**.

Works only on positioned elements (not static).

---

## 2. Example

```html
<style>
.box1 {
    position: absolute;
    z-index: 1;
    background: red;
    width: 150px;
    height: 150px;
}
.box2 {
    position: absolute;
    z-index: 5;
    background: blue;
    width: 150px;
    height: 150px;
    left: 50px;
    top: 50px;
}
</style>

<div class="box1"></div>
<div class="box2"></div>
```

Blue appears on top because z-index is higher.

---

## Notes

• z-index works only when position ≠ static.

---

## Interview Questions

1. Why does z-index sometimes not work?
2. What is a stacking context?

---

# PART 4 — CSS OVERFLOW

---

## 1. Concept

Controls content that exceeds the box.

Values:

• visible
• hidden
• scroll
• auto

---

## 2. Example

```html
.box {
    width: 150px;
    height: 50px;
    overflow: scroll;
    background: lightblue;
}
```

---

## Notes

• Use overflow hidden to crop images.
• overflow:auto adds scrollbars only when needed.

---

## Interview Questions

1. Difference between auto and scroll?
2. Use cases of overflow:hidden?

---

# PART 5 — CSS FLOAT

---

## 1. Concept

Originally used to wrap text around images.

Float moves elements left or right and removes them from normal flow.

---

## 2. Example

```html
img {
    float: left;
    margin-right: 10px;
}
```

---

## Notes

• Float is outdated for layout (Flexbox/Grid are used now).
• Still useful in legacy code.

---

## Interview Questions

1. Why isn’t float used for layout now?
2. How do you clear floats?

---

# PART 6 — CSS INLINE-BLOCK

---

## 1. Concept

Best of both worlds:

• Behaves inline
• But allows width/height
• Useful for horizontal menus, buttons, cards

---

## Example

```html
.menu-item {
    display: inline-block;
    padding: 10px 20px;
    background: lightgray;
}
```

---

# PART 7 — CSS ALIGNMENT TECHNIQUES

---

### Horizontal Center (block elements)

```css
margin: 0 auto;
```

### Center text

```css
text-align: center;
```

### Vertical Center (pre-flexbox method)

```css
line-height: 100px;  /* works only if text is one line */
```

We will learn perfect centering in Flexbox section.

---

# PART 8 — MULTIPLE COLUMNS (NEWSPAPER STYLE)

```css
.columns {
    column-count: 3;
    column-gap: 20px;
}
```

Creates automatic 3-column layout.

---

# PART 9 — NAVIGATION BAR LAYOUT BASICS

Navigation typically uses:

```css
nav a {
    display: inline-block;
    padding: 10px;
}
```

We will build full navbars in the project section.

---

# PART 10 — DROPDOWN LAYOUT BASICS

Hide + show using display property:

```css
.dropdown-menu {
    display: none;
}

.dropdown:hover .dropdown-menu {
    display: block;
}
```

---

# PART 11 — object-fit

Used for images inside fixed containers.

```
object-fit: cover;   /* best for hero banners */
object-fit: contain; /* fit without crop */
```

---

# PART 12 — object-position

Controls which part of image stays visible after cropping:

```
object-position: top;
object-position: center;
object-position: 50% 30%;
```

---

# FULL SECTION 6 SUMMARY

You learned:

• display
• position
• z-index
• overflow
• float
• inline-block
• alignment
• multi-columns
• navbar basics
• dropdown basics
• object-fit & object-position

This is the foundation of all modern layouts.

---

# SECTION 6 INTERVIEW QUESTIONS (CONSOLIDATED)

1. Difference between inline, block, inline-block.
2. Why width does not apply on inline?
3. Explain all position types with examples.
4. What is stacking context?
5. Why does z-index not work sometimes?
6. What is overflow? Difference between auto & scroll.
7. Difference between float and position.
8. Why float is outdated?
9. How do you horizontally center a block element?
10. What is object-fit and why is it used?

---