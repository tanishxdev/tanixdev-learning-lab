# SECTION 7 — FLEXBOX

---

# PART 1 — Concept

Flexbox (Flexible Box Layout) is a CSS layout system designed for **1-dimensional layouts**:

• Horizontal alignment
or
• Vertical alignment

Flexbox makes it easy to:

• Center anything
• Create navbars
• Make responsive layouts
• Distribute space
• Align items perfectly
• Reorder items

---

# PART 2 — Why Flexbox Is Needed

Before Flexbox, we used:

• float
• inline-block
• table layouts

These were hacks, not layout systems.

Flexbox solves problems that older methods cannot:

• Vertical centering
• Equal spacing automatically
• Equal height columns
• Responsive wrapping
• Aligning left, center, right in one line

Flexbox = clean + modern + powerful.

---

# PART 3 — Flexbox Intuition (VERY IMPORTANT)

Think in terms of:

**1) A Parent (Flex Container)**
`display: flex`
This activates Flexbox.

**2) Many Children (Flex Items)**
These items will align themselves based on Flexbox rules.

Flexbox works along **two axes**:

1. **Main Axis** (default: horizontal → left to right)
2. **Cross Axis** (vertical → top to bottom)

---

# PART 4 — Flex Container Properties

These properties are applied to the **parent**.

1. display: flex
2. flex-direction
3. justify-content
4. align-items
5. flex-wrap
6. align-content
7. gap

Let’s understand them.

---

## 1. display: flex

Turns container into a flex system.

```css
.container {
    display: flex;
}
```

---

## 2. flex-direction

Controls direction of main axis.

```
row            (default)
row-reverse
column
column-reverse
```

Trust this rule:

**Row = horizontal layout**
**Column = vertical layout**

---

## 3. justify-content (Main Axis alignment)

Used to align items **horizontally** (when flex-direction: row)

Values:

```
flex-start       (default)
flex-end
center
space-between
space-around
space-evenly
```

---

## 4. align-items (Cross Axis alignment)

Used to align items **vertically** (when flex-direction: row)

```
stretch          (default)
flex-start
flex-end
center
baseline
```

---

## 5. flex-wrap

Controls whether items stay in one line or wrap.

```
nowrap           (default)
wrap
wrap-reverse
```

---

## 6. align-content

Works only when wrapping happens.

```
flex-start
flex-end
center
space-between
space-around
space-evenly
```

---

## 7. gap

Space between flex items (no margin hack needed)

```
gap: 20px;
row-gap: 20px;
column-gap: 30px;
```

---

# PART 5 — Flex Item Properties

These apply to **children** inside a flex container.

1. flex-grow
2. flex-shrink
3. flex-basis
4. align-self
5. order

---

## 1. flex-grow

How much an item grows relative to siblings.

```
flex-grow: 1;   /* fill remaining space */
```

## 2. flex-shrink

How much an item shrinks when space is small.

```
flex-shrink: 0; /* do not shrink */
```

## 3. flex-basis

Initial width of the item.

```
flex-basis: 200px;
```

## 4. align-self

Overrides parent's align-items for a single item.

```
align-self: center;
```

## 5. order

Changes display order.

```
order: 3;  /* appears last */
```

---

# PART 6 — Full Example (with complete comments)

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Flexbox Example</title>

<style>

.container {
    display: flex;              /* Activate flexbox */
    flex-direction: row;        /* Horizontal alignment */
    justify-content: space-between; /* Distribute items */
    align-items: center;        /* Vertical align center */
    gap: 20px;                  /* Space between items */
    padding: 20px;
    background: lightgray;
}

.box {
    background: steelblue;
    color: white;
    padding: 20px;
    flex-basis: 150px;          /* Initial width */
    flex-grow: 1;               /* Items grow equally */
    text-align: center;
}

.box:nth-child(3) {
    align-self: flex-start;     /* Override alignment for one item */
}

</style>
</head>

<body>

<h1>Flexbox Demo</h1>

<div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3 (align-start)</div>
</div>

</body>
</html>
```

---

# Output Explanation

• Boxes appear in a single line
• Equal width due to flex-grow
• Space between them due to gap
• Third box aligns at top because of align-self
• Perfect responsive behavior

This is the foundation of all modern navbars, hero sections, product grids, etc.

---

# PART 7 — Most Common Flexbox Patterns

## 1. Center Anything

```css
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

## 2. Navbar Layout

```css
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

## 3. Responsive Wrap

```css
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
```

## 4. Equal Height Columns

```css
.card {
    flex: 1;
}
```

---

# PART 8 — Notes

• Always identify main axis vs cross axis
• Flexbox is 1D, Grid is 2D
• Use justify-content for main axis alignment
• Use align-items for cross-axis alignment
• Use flex-wrap for responsive cards

---

# PART 9 — Flexbox Interview Questions

1. What is Flexbox and why was it introduced?
2. Difference between justify-content and align-items?
3. What is the main axis and cross axis?
4. What does flex-direction change?
5. What are flex-grow, flex-shrink, flex-basis?
6. How do you center an element using Flexbox?
7. Difference between Flexbox and Grid?
8. What does flex-wrap do?
9. When does align-content work?
10. What is the use of order property?

---