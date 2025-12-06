# SECTION 4 — CSS TEXT & FONTS

---

# PART 1 — TEXT PROPERTIES

---
# TEXT PROPERTY 1 — color

Sets text color.

```css
p {
    color: #333;
}
```

Accepts:

• Keyword: red
• Hex: #ff0000
• RGB: rgb(255,0,0)
• RGBA
• HSL

---
# TEXT PROPERTY 2 — text-align

Horizontal alignment of text.

```
left (default)
right
center
justify
```

Example:

```css
h1 {
    text-align: center;
}
```

---
# TEXT PROPERTY 3 — text-decoration

Controls underline, line-through, overline.

```css
a {
    text-decoration: none;
}

p {
    text-decoration: underline;
}

del {
    text-decoration: line-through;
}
```

---
# TEXT PROPERTY 4 — text-transform

Changes case of text visually.

```
uppercase
lowercase
capitalize
none
```

Example:

```css
h2 {
    text-transform: uppercase;
}
```

---
# TEXT PROPERTY 5 — line-height (critical)

Controls space between lines.

```css
p {
    line-height: 1.6;  /* recommended */
}
```

Important:

Avoid setting line-height in px. Use unitless for scalability.

---
# TEXT PROPERTY 6 — letter-spacing

Space between letters.

```css
h1 {
    letter-spacing: 2px;
}
```

---
# TEXT PROPERTY 7 — word-spacing

Space between words.

```css
p {
    word-spacing: 5px;
}
```

---
# TEXT PROPERTY 8 — text-indent

Indent first line.

```css
p {
    text-indent: 40px;
}
```

---
# TEXT PROPERTY 9 — text-shadow

Adds shadow to text.

Syntax:

```
text-shadow: horizontal vertical blur color;
```

Example:

```css
h1 {
    text-shadow: 2px 2px 4px gray;
}
```

---
# TEXT PROPERTY 10 — white-space

Controls how text wraps.

```
normal (default)
nowrap
pre      (preserves whitespace)
pre-wrap
```

Example:

```css
p {
    white-space: nowrap; /* prevents wrapping */
}
```

---

# PART 2 — FONT PROPERTIES

These control typography style.

1. font-family
2. font-size
3. font-style
4. font-weight
5. font-variant
6. @font-face
7. Google Fonts

---
# FONT PROPERTY 1 — font-family

Defines the font stack.

```css
p {
    font-family: "Arial", "Helvetica", sans-serif;
}
```

Rules:

• First font tried: Arial
• If missing → Helvetica
• If missing → system sans-serif

Use generic families:

```
serif
sans-serif
monospace
cursive
fantasy
```

---
# FONT PROPERTY 2 — font-size

Controls text size.

Recommended units: **rem**

```css
html {
    font-size: 16px;     /* root size */
}

p {
    font-size: 1.25rem;  /* 20px */
}
```

Avoid px for scalable designs.

---
# FONT PROPERTY 3 — font-style

Options:

```
normal
italic
oblique
```

---
# FONT PROPERTY 4 — font-weight

Controls “thickness” of text.

```
normal (400)
bold (700)
300, 500, 600 (if font supports)
```

Example:

```css
h1 {
    font-weight: 700;
}
```

---
# FONT PROPERTY 5 — font-variant

Used for small-caps.

```css
p {
    font-variant: small-caps;
}
```

---
# FONT PROPERTY 6 — Loading Custom Fonts (Google Fonts)

Very common in real projects.

Step 1: Import font

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
```

Step 2: Use it

```css
body {
    font-family: "Poppins", sans-serif;
}
```

---
# FONT PROPERTY 7 — @font-face (self-hosted fonts)

```css
@font-face {
    font-family: "MyFont";
    src: url("fonts/myfont.ttf");
}

p {
    font-family: "MyFont";
}
```

---

# PART 3 — FULL CODE EXAMPLE

(Using all important text and font properties)

```html
<!DOCTYPE html>
<html>
<head>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet">

<style>

/* Global font */
body {
    font-family: "Poppins", sans-serif;
    line-height: 1.6;
    color: #333;
    padding: 20px;
}

/* Heading styling */
h1 {
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-shadow: 2px 2px 4px lightgray;
    font-weight: 600;
}

/* Paragraph styling */
p {
    text-indent: 20px;
    font-size: 1.1rem;
    margin-bottom: 15px;
}

/* Special highlighted text */
.highlight {
    background: yellow;
    font-weight: 600;
}

/* Link */
a {
    text-decoration: none;
    color: blue;
}

a:hover {
    text-decoration: underline;
}

</style>

</head>
<body>

<h1>CSS Text and Fonts</h1>

<p>
    This paragraph demonstrates <span class="highlight">typography</span> in CSS.
    Notice the spacing, indentation, and the imported Poppins font.
</p>

<p>
    CSS makes your content readable and visually pleasant using spacing,
    font weights, transformations, and many text utilities.
</p>

<a href="#">Read More</a>

</body>
</html>
```

---

# OUTPUT EXPLANATION

You will see:

• A centered uppercase heading with shadow
• Clean, modern font (Poppins)
• Text indentation
• Highlighted spans
• Spaced paragraphs
• Clean link styling

This resembles real website typography standards.

---

# NOTES & BEST PRACTICES

1. Prefer using **rem** instead of px for font-size.
2. Don’t overuse text-shadow—it reduces readability.
3. Use Google Fonts or system fonts for consistency.
4. Keep line-height between **1.4–1.8** for readability.
5. text-align: justify is hard to read—use carefully.
6. Avoid using more than 2–3 font families per site.

---

# SECTION 4 — INTERVIEW QUESTIONS

1. Difference between rem and em?
2. What is line-height and why is unitless recommended?
3. How do you import Google Fonts?
4. Difference between font-style and font-weight?
5. What does text-transform do?
6. Explain text-shadow syntax.
7. What is fallback font?
8. Why avoid too many custom fonts?
9. How does white-space: nowrap behave?
10. Why do designers love letter-spacing?

---