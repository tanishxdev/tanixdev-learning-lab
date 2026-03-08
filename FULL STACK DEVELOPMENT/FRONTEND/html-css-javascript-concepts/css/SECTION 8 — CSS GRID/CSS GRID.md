# SECTION 8 — CSS GRID

---

CSS Grid is the most powerful **2D layout system** in CSS.
While Flexbox is 1D (row *or* column), **Grid can control rows AND columns at the same time**.


---

# PART 1 — Concept

Grid allows you to divide the page into:

• rows
• columns
• cells
• areas

You can build:

• Full layouts
• Dashboard layouts
• Photo grids
• Complex responsive designs
• Template-based page layouts

Flexbox → best for one direction
Grid → best for full-page layout

---

# PART 2 — Why Grid Is Needed

Without Grid, developers used:

• floats
• flexbox hacks
• nested layouts

Grid simplifies:

• Multi-column layouts
• Gap management
• Placing items in exact rows & columns
• Responsive layout without media queries
• Defining entire page structure from parent

---

# PART 3 — Grid Intuition (Very Important)

Think of:

### 1) Grid Container

The element where you apply:

```
display: grid;
grid-template-columns: ...
grid-template-rows: ...
gap: ...
```

### 2) Grid Items

Children inside the container.
You can place them:

```
grid-column:
grid-row:
grid-area:
```

### 3) Grid Lines

Invisible lines dividing rows & columns.

### 4) Grid Tracks

Row or column spaces.

### 5) Grid Cells

Each small box in the grid.

---

# PART 4 — Grid Container Properties

These are applied to the parent.

---

## 1. display: grid

```css
.container {
    display: grid;
}
```

---

## 2. grid-template-columns

Defines how many columns and their widths.

Examples:

```css
grid-template-columns: 200px 200px 200px;        /* 3 fixed columns */
grid-template-columns: 1fr 1fr 1fr;              /* 3 equal columns */
grid-template-columns: repeat(3, 1fr);           /* same as above */
grid-template-columns: 200px auto 100px;         /* different sizes */
```

`fr` = flexible unit ("fraction")

---

## 3. grid-template-rows

```css
grid-template-rows: 100px 200px;
grid-template-rows: repeat(4, auto);
```

---

## 4. gap

Space between grid cells.

```css
gap: 20px;
row-gap: 20px;
column-gap: 30px;
```

---

## 5. justify-items (horizontal alignment inside cells)

```
start
end
center
stretch (default)
```

---

## 6. align-items (vertical alignment inside cells)

```
start
end
center
stretch
```

---

## 7. justify-content & align-content

Controls alignment of the entire grid inside the container.

---

# PART 5 — Grid Item Properties

Applied to child items.

---

## 1. grid-column

Place item across specific columns.

```css
grid-column: 1 / 3;      /* From column line 1 → 3 (spans 2 columns) */
grid-column: span 2;     /* Span 2 columns */
```

---

## 2. grid-row

```css
grid-row: 1 / 4;
grid-row: span 2;
```

---

## 3. grid-area

Give items names and place them in template.

---

# PART 6 — Full Example (with detailed explanation)

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CSS Grid Example</title>

<style>

/* Grid Container */
.container {
    display: grid;                            
    grid-template-columns: repeat(3, 1fr);     /* 3 equal columns */
    grid-template-rows: 120px auto 120px;      /* 3 rows */
    gap: 20px;                                  /* spacing between grid items */
    padding: 20px;
    background: #ddd;
}

/* Grid Items */
.box {
    background: steelblue;
    color: white;
    padding: 20px;
    font-size: 20px;
}

/* Header spans all columns */
.header {
    grid-column: 1 / 4;
    background: darkslateblue;
}

/* Footer spans all columns */
.footer {
    grid-column: 1 / 4;
    background: darkgreen;
}

/* Sidebar spans 2 rows */
.sidebar {
    grid-row: 2 / 4;
    background: darkred;
}

</style>
</head>

<body>

<h1>CSS Grid Layout Demo</h1>

<div class="container">

    <div class="box header">Header</div>
    <div class="box">Content 1</div>
    <div class="box">Content 2</div>
    <div class="box">Content 3</div>

    <div class="box sidebar">Sidebar (spans 2 rows)</div>

    <div class="box footer">Footer</div>

</div>

</body>
</html>
```

---

# Output Explanation

Grid layout will show:

• Header at top spanning all 3 columns
• Three content boxes in the middle
• Sidebar on the left spanning two rows
• Footer at bottom spanning all columns

This layout would take hours with floats or flexbox but takes minutes with Grid.

---

# PART 7 — Grid Template Areas (Very Powerful)

Allows you to define layout visually.

Example:

```css
grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
```

Then assign:

```css
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

This is how dashboards are built.

---

# PART 8 — Responsive Grid (Without Media Queries)

```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

This automatically creates responsive card grids.

---

# PART 9 — Notes

• Use Flexbox for 1D layouts, Grid for 2D layouts.
• Grid is best for page layouts, dashboards, galleries.
• `fr` unit is extremely useful.
• Template areas improve readability of large layouts.
• Repeat + minmax = most powerful responsive combination.

---

# PART 10 — Interview Questions

1. What is the difference between Flexbox and Grid?
2. When would you use Grid instead of Flexbox?
3. What does the `fr` unit mean?
4. How do you create a layout with 3 equal columns?
5. How do you stretch an item across multiple columns?
6. What is `grid-template-areas` used for?
7. Explain auto-fit vs auto-fill.
8. What does `minmax()` do?
9. How do you create a responsive grid without media queries?
10. What are grid lines, tracks, and cells?

---
