# SECTION 4 — HTML MEDIA & GRAPHICS

---

cover:

1. HTML Media Overview
2. Images (advanced attributes)
3. HTML Video
4. HTML Audio
5. HTML YouTube Embeds
6. HTML `<figure>` & `<figcaption>`
7. HTML `<picture>` Tag + Responsive Images
8. HTML Canvas (JS-based)
9. HTML SVG (vector graphics)
10. Difference: Canvas vs SVG
11. Plugins (deprecated understanding)
12. Interview Questions

---

# PART 1 — MEDIA OVERVIEW

---

HTML supports various media types:

• Images
• Audio
• Video
• SVG (vector graphics)
• Canvas (JS-based drawing)
• Embedded content (YouTube, Maps, PDFs)

Media is essential for:

• Landing pages
• Portfolio sites
• UI components
• Dashboards
• Data visualization

---

# PART 2 — IMAGES (ADVANCED)

---

### Basic:

```html
<img src="image.jpg" alt="Description">
```

### Important attributes:

| Attribute          | Use                                    |
| ------------------ | -------------------------------------- |
| `src`              | image source                           |
| `alt`              | accessibility + SEO                    |
| `width` / `height` | control size                           |
| `loading="lazy"`   | performance improvement                |
| `srcset`           | responsive images                      |
| `sizes`            | tells browser which image size to load |

### Example: Responsive Image

```html
<img 
  src="small.jpg" 
  srcset="small.jpg 480w, medium.jpg 768w, large.jpg 1200w"
  sizes="(max-width:600px) 480px, (max-width:900px) 768px, 1200px"
  alt="Landscape">
```

Purpose: mobile loads small image, desktop loads big image.

---

# PART 3 — FIGURE & FIGCAPTION

---

Better semantics for images with description:

```html
<figure>
    <img src="mountain.jpg" alt="Mountain">
    <figcaption>Beautiful mountain in summer</figcaption>
</figure>
```

Used for articles, blogs, documentation.

---

# PART 4 — HTML VIDEO

---

### Basic video:

```html
<video src="movie.mp4" controls></video>
```

### Common attributes:

| Attribute  | Meaning               |
| ---------- | --------------------- |
| `controls` | show play/pause UI    |
| `autoplay` | play automatically    |
| `loop`     | repeat video          |
| `muted`    | required for autoplay |
| `poster`   | thumbnail image       |
| `width`    | force width           |

### Example:

```html
<video width="400" controls poster="thumbnail.jpg">
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.webm" type="video/webm">
    Your browser does not support video tag.
</video>
```

---

# PART 5 — HTML AUDIO

---

### Basic:

```html
<audio src="song.mp3" controls></audio>
```

Attributes:

| Attribute  | Purpose            |
| ---------- | ------------------ |
| `controls` | show playback UI   |
| `autoplay` | automatically play |
| `loop`     | repeat audio       |
| `muted`    | mute initially     |

### Example:

```html
<audio controls>
    <source src="song.mp3" type="audio/mpeg">
    <source src="song.ogg" type="audio/ogg">
</audio>
```

---

# PART 6 — YOUTUBE EMBEDS

---

Use `<iframe>` to embed YouTube videos.

### Basic embed:

```html
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  allowfullscreen>
</iframe>
```

### Responsive YouTube Embed (important):

```html
<div class="video-container">
    <iframe src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen></iframe>
</div>
```

```css
.video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 ratio */
    height: 0;
}

.video-container iframe {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
}
```

---

# PART 7 — HTML <picture> TAG (Responsive + Art Direction)

---

### Example:

```html
<picture>
    <source srcset="img-large.jpg" media="(min-width: 800px)">
    <source srcset="img-small.jpg" media="(max-width: 799px)">
    <img src="img-small.jpg" alt="A scenery">
</picture>
```

Used for:

• Adaptive images
• Different images for mobile/desktop
• Performance optimization

---

# PART 8 — HTML CANVAS (JavaScript-based drawing)

---

Canvas provides a pixel-based drawing environment.

### Basic setup:

```html
<canvas id="myCanvas" width="400" height="300"></canvas>
```

### Drawing using JavaScript:

```html
<script>
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100);
</script>
```

Used for:

• Games
• Data visualizations
• Custom animations
• Charts (Chart.js, etc.)

---

# PART 9 — HTML SVG (Vector Graphics)

---

SVG = Scalable Vector Graphics
Resizable without losing quality.

### Basic shape:

```html
<svg width="200" height="200">
    <circle cx="100" cy="100" r="80" fill="blue"/>
</svg>
```

### Inline SVGs support:

• CSS styling
• animation
• event handling

SVG is used for:

• icons
• illustrations
• dashboards
• logos

---

# PART 10 — CANVAS vs SVG (Interview Favourite)

---

| Feature      | SVG                   | Canvas                    |
| ------------ | --------------------- | ------------------------- |
| Type         | Vector (shapes)       | Pixel-based               |
| Scaling      | Infinite              | Loses quality             |
| DOM elements | Yes                   | No                        |
| Interaction  | Easy                  | Hard                      |
| Performance  | Good for small shapes | Best for heavy animations |
| Use cases    | Icons, charts         | Games, particle effects   |

---

# PART 11 — HTML PLUGINS (Deprecated Understanding)

---

Old tag:

```html
<object data="file.swf"></object>
```

Flash/Plug-ins are no longer used.

Modern web uses:

• HTML5 Video
• HTML5 Audio
• Canvas
• WebGL

---

# PART 12 — FULL MEDIA EXAMPLE

---

```html
<!DOCTYPE html>
<html>
<body>

<h1>Media Demo</h1>

<h2>Image</h2>
<img src="nature.jpg" alt="Nature" width="300">

<h2>Video</h2>
<video width="300" controls>
    <source src="video.mp4" type="video/mp4">
</video>

<h2>Audio</h2>
<audio controls>
    <source src="song.mp3" type="audio/mpeg">
</audio>

<h2>YouTube</h2>
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen></iframe>

<h2>SVG</h2>
<svg width="200" height="200">
    <rect width="200" height="200" fill="orange"/>
</svg>

</body>
</html>
```

---

# PART 13 — INTERVIEW QUESTIONS

---

1. Difference between `<img>` and `<picture>`?
2. What is `srcset` and why is it used?
3. Difference between `<video>` and `<iframe>` for YouTube?
4. What is Canvas used for?
5. Difference between SVG and Canvas?
6. What is the use of `<figcaption>`?
7. Why is `alt` attribute important?
8. How do you make a YouTube video responsive?
9. Why is SVG preferred for icons?
10. What does `<source>` tag do inside `<audio>` or `<video>`?

---