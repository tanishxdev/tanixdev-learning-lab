
# SECTION 10 — HTML GRAPHICS & ADVANCED MEDIA

---
We cover:

1. HTML Graphics Overview
2. `<canvas>` (pixel-based drawing)
3. Canvas API basics (JS code)
4. Canvas use cases
5. `<svg>` (vector-based graphics)
6. SVG basic shapes
7. SVG icons & inline styling
8. Difference: Canvas vs SVG
9. `<picture>` Tag (Responsive Images)
10. `<source>` and art direction
11. Advanced Video API attributes
12. Advanced Audio API
13. Embedding PDFs, Maps, External Widgets
14. Compatibility & Performance
15. Interview Questions

---

# PART 1 — WHAT ARE HTML GRAPHICS?

---

HTML supports **two major graphics systems**:

1. **Canvas** (pixel-based, dynamic)
2. **SVG** (vector-based, scalable)

Plus features for:

• Responsive images
• Video and audio
• YouTube / Map embeds
• WebGL (via canvas)
• Complex graphic drawing

---

# PART 2 — CANVAS ELEMENT (Pixel-Based Drawing)

---

### Canvas is an **empty container**.

HTML:

```html
<canvas id="board" width="400" height="300"></canvas>
```

JS required to draw:

```javascript
const c = document.getElementById("board")
const ctx = c.getContext("2d")

ctx.fillStyle = "blue"
ctx.fillRect(50, 50, 150, 100)
```

### Canvas: What you can draw

• Shapes
• Lines
• Text
• Images
• Animations
• Particle effects
• Games
• Charts (Chart.js uses canvas)
• Image manipulation

### Draw a circle:

```javascript
ctx.beginPath()
ctx.arc(150, 150, 60, 0, Math.PI * 2)
ctx.fillStyle = "red"
ctx.fill()
```

### Draw text:

```javascript
ctx.font = "24px Arial"
ctx.fillText("Hello Canvas", 50, 40)
```

Canvas is **imperative** → you must redraw everything manually.

---

# PART 3 — SVG (Scalable Vector Graphics)

---

SVG is **resolution-independent**. Great for:

• Logos
• Icons
• Dashboard visuals
• Animated shapes
• UI illustrations

### Basic example:

```html
<svg width="200" height="200">
    <circle cx="100" cy="100" r="80" fill="orange"/>
</svg>
```

### Rectangle:

```html
<rect width="150" height="80" fill="blue"/>
```

### Line:

```html
<line x1="0" y1="0" x2="200" y2="200" stroke="black" stroke-width="3"/>
```

### SVG with text:

```html
<svg width="300" height="100">
    <text x="20" y="50" font-size="30" fill="green">Hello SVG</text>
</svg>
```

### Why SVG is powerful:

• No pixelation
• Easy to animate
• CSS can style SVG
• JS can manipulate SVG
• Better performance for icons

---

# PART 4 — CANVAS vs SVG (Most asked interview topic)

---

| Feature       | SVG                            | Canvas                    |
| ------------- | ------------------------------ | ------------------------- |
| Type          | Vector                         | Pixel-based               |
| Resolution    | Infinite                       | Fixed resolution          |
| DOM           | Yes (each shape is an element) | No DOM elements           |
| Interactivity | Easy (via DOM events)          | Hard (manual math)        |
| Performance   | Best for few shapes            | Best for many shapes      |
| Use Case      | Icons, diagrams                | Games, animations, charts |

### Rule of thumb:

• **SVG** → UI graphics, dashboards, icons
• **Canvas** → Games, dynamic animations, painting apps

---

# PART 5 — RESPONSIVE IMAGES (THE `<picture>` ELEMENT)

---

The `<picture>` tag allows **different images** for mobile, tablet, desktop.

### Example:

```html
<picture>
    <source srcset="img-large.jpg" media="(min-width: 900px)">
    <source srcset="img-medium.jpg" media="(min-width: 600px)">
    <img src="img-small.jpg" alt="Landscape">
</picture>
```

Browser picks the best image automatically.

### Use cases:

• High-quality hero banners
• Mobile-optimized thumbnails
• “Art direction” (completely different image per device)

---

# PART 6 — SRCSET (Responsive performance)

---

```html
<img 
  src="small.jpg"
  srcset="
     small.jpg 500w,
     medium.jpg 900w,
     large.jpg 1500w
  "
  alt="Scenery">
```

Browser loads image depending on screen width.

---

# PART 7 — ADVANCED VIDEO HANDLING

---

### HTML:

```html
<video controls width="400" poster="thumb.jpg">
    <source src="movie.mp4" type="video/mp4">
</video>
```

### Useful attributes:

| Attribute | Purpose                |
| --------- | ---------------------- |
| controls  | show buttons           |
| autoplay  | play automatically     |
| muted     | required for autoplay  |
| loop      | repeat                 |
| poster    | preview image          |
| preload   | auto / metadata / none |

### Example Autoplay (muted required):

```html
<video autoplay muted loop>
    <source src="bg.mp4" type="video/mp4">
</video>
```

---

# PART 8 — ADVANCED AUDIO HANDLING

---

```html
<audio controls>
    <source src="song.mp3" type="audio/mpeg">
</audio>
```

### Audio attributes:

• controls
• muted
• loop
• autoplay
• preload

---

# PART 9 — EMBEDDING EXTERNAL CONTENT (iframes)

---

### 1. Embed YouTube

```html
<iframe 
  src="https://www.youtube.com/embed/VIDEO_ID"
  allowfullscreen>
</iframe>
```

### 2. Embed Google Maps

```html
<iframe 
  src="https://www.google.com/maps/embed?..."
  loading="lazy"></iframe>
```

### 3. Embed PDF

```html
<iframe src="file.pdf" width="100%" height="500"></iframe>
```

---

# PART 10 — FULL GRAPHICS + MEDIA EXAMPLE

---

```html
<!DOCTYPE html>
<html>
<body>

<h1>HTML Graphics & Media Demo</h1>

<h2>SVG</h2>
<svg width="200" height="200">
    <circle cx="100" cy="100" r="80" fill="tomato" />
</svg>

<h2>Canvas</h2>
<canvas id="myCanvas" width="300" height="200"></canvas>

<script>
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(30, 30, 150, 80);
</script>

<h2>Responsive Image</h2>
<picture>
    <source srcset="large.jpg" media="(min-width:800px)">
    <img src="small.jpg" alt="">
</picture>

<h2>Video</h2>
<video controls width="300">
    <source src="movie.mp4" type="video/mp4">
</video>

</body>
</html>
```

---

# PART 11 — INTERVIEW QUESTIONS (GRAPHICS)

---

1. Difference between Canvas and SVG?
2. When should you use `<picture>` tag?
3. What is `srcset` and how does it improve performance?
4. Why is Canvas not good for UI icons?
5. Can SVG be styled with CSS?
6. What is the poster attribute in `<video>`?
7. How do you embed YouTube videos?
8. How can you optimize images for responsive design?
9. Why does `<video autoplay>` require `muted`?
10. What is the advantage of Canvas over SVG for animations?

---
