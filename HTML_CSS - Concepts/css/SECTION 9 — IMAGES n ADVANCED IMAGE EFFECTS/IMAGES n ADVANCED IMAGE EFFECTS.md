# SECTION 9 — IMAGES & ADVANCED IMAGE EFFECTS

---

# PART 1 — BASIC IMAGE STYLING

---

### 1. Controlling width & height

```css
img {
    width: 300px;
    height: auto;      /* maintain aspect ratio */
}
```

### 2. Rounded corners

```css
img {
    border-radius: 10px;
}
```

### 3. Circular image

```css
img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;        /* prevents distortion */
}
```

### 4. Adding a border

```css
img {
    border: 3px solid #555;
}
```

---

# PART 2 — RESPONSIVE IMAGES

---

### 1. Make image scale with container

```css
img {
    width: 100%;
    height: auto;
}
```

### 2. Prevent overflow

```css
img {
    max-width: 100%;
}
```

### 3. picture tag (for responsive sources)

```html
<picture>
    <source media="(max-width:600px)" srcset="mobile.jpg">
    <source media="(min-width:601px)" srcset="desktop.jpg">
    <img src="desktop.jpg" alt="">
</picture>
```

---

# PART 3 — ALIGNING IMAGES

---

### Centering image (block-level)

```css
img {
    display: block;
    margin: 0 auto;
}
```

### Floating image left/right (old method)

```css
img {
    float: right;
    margin-left: 10px;
}
```

---

# PART 4 — IMAGE GALLERY (GRID BASED)

---

```css
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 15px;
}

.gallery img {
    width: 100%;
    border-radius: 10px;
}
```

HTML:

```html
<div class="gallery">
    <img src="img1.jpg">
    <img src="img2.jpg">
    <img src="img3.jpg">
    <img src="img4.jpg">
</div>
```

---

# PART 5 — IMAGE SPRITES (Performance Optimization)

---

Used to combine many small icons into a single image.

```css
.sprite {
    width: 50px;
    height: 50px;
    background: url("icons.png") -10px -20px;
}
```

Benefits:

• fewer server requests
• faster loading

---

# PART 6 — IMAGE FILTERS (Modern CSS Effects)

---

Filters:

```
blur(px)
brightness(%)
contrast(%)
grayscale(%)
hue-rotate(deg)
invert(%)
opacity(%)
saturate(%)
sepia(%)
```

Example:

```css
img:hover {
    filter: brightness(60%) blur(2px);
}
```

---

# PART 7 — CLIP-PATH / IMAGE SHAPES

---

### 1. Circle

```css
img {
    clip-path: circle(50% at 50% 50%);
}
```

### 2. Polygon Shape

```css
img {
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
}
```

Creates angled shapes used in modern UI.

---

# PART 8 — object-fit (EXTREMELY IMPORTANT)

---

Used when image container has a fixed size.

Values:

```
cover     (fills box, crops image)
contain   (fits without cropping)
fill      (may distort)
none
scale-down
```

Example:

```css
img {
    width: 300px;
    height: 200px;
    object-fit: cover;
}
```

---

# PART 9 — object-position

---

Controls which part stays visible after cropping.

```css
img {
    object-fit: cover;
    object-position: top;     /* crop from bottom */
}
```

Examples:

```
left
right
center
50% 30%
```

---

# PART 10 — IMAGE OVERLAYS (Gradient + Dark Layer)

---

Used in hero sections.

```css
.hero {
    height: 300px;
    background-image:
        linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
        url("banner.jpg");
    background-size: cover;
}
```

---

# PART 11 — IMAGE HOVER EFFECTS

---

### 1. Zoom on hover

```css
img {
    transition: transform 0.4s;
}

img:hover {
    transform: scale(1.1);
}
```

### 2. Fade effect

```css
img:hover {
    opacity: 0.7;
}
```

### 3. Blur on hover

```css
img:hover {
    filter: blur(2px);
}
```

### 4. Black & White → Color

```css
img {
    filter: grayscale(100%);
    transition: 0.4s;
}

img:hover {
    filter: grayscale(0%);
}
```

---

# PART 12 — IMAGE CARD HOVER PROJECT

```html
<div class="card">
    <img src="product.jpg">
    <div class="overlay">Buy Now</div>
</div>
```

```css
.card {
    position: relative;
    width: 250px;
    overflow: hidden;
}

.card img {
    width: 100%;
    transition: 0.4s;
}

.card:hover img {
    transform: scale(1.1);
    filter: brightness(60%);
}

.overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    background: rgba(0,0,0,0.6);
    padding: 10px 20px;
    opacity: 0;
    transition: 0.4s;
}

.card:hover .overlay {
    opacity: 1;
}
```

This creates a modern product-card animation.

---

# PART 13 — IMAGE MODAL (Zoom Popup)

```css
.modal {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.7);
    justify-content: center;
    align-items: center;
}

.modal img {
    width: 60%;
    border-radius: 10px;
}

.thumbnail {
    width: 150px;
    cursor: pointer;
}
```

HTML:

```html
<img class="thumbnail" src="pic.jpg" onclick="document.querySelector('.modal').style.display='flex'">

<div class="modal" onclick="this.style.display='none'">
    <img src="pic.jpg">
</div>
```

---

# PART 14 — BEST PRACTICES

• Always use `object-fit: cover` for uniform card layouts
• Always use compressed images (prefer .webp)
• Avoid stretching images (distorts UX)
• Use CSS filters sparingly (performance impact)
• Use lazy-loading for large image-heavy pages
• Use picture tag for responsive, high-quality images

---

# INTERVIEW QUESTIONS (IMAGES)

1. Difference between object-fit: cover vs contain?
2. How do you make images responsive?
3. What is the clip-path property used for?
4. How do you create a hover zoom effect?
5. What are CSS filters?
6. How do image sprites improve performance?
7. Explain background overlay techniques.
8. How do you maintain aspect ratio of images?
9. Difference between opacity vs rgba overlay?
10. How do you build an image gallery using CSS Grid?

---
