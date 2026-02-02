# SECTION 5 — CSS COLORS & BACKGROUNDS

---

# PART 1 — CSS COLORS

CSS supports multiple color formats:

1. Color Keywords
2. Hexadecimal
3. RGB
4. RGBA
5. HSL
6. HSLA
7. CurrentColor


---

# COLOR FORMAT 1 — Color Keywords

Simple named colors.

```css
h1 {
    color: red;
}
```

Common examples:

red, blue, green, gray, black, white, violet

Not recommended for professional UI (limited + inconsistent).

---

# COLOR FORMAT 2 — HEX

Most used in UI design.

```css
color: #ff0000;  /* red */
color: #333;     /* dark gray */
```

Shorthand allowed:
`#333` is same as `#333333`

---

# COLOR FORMAT 3 — RGB

Red, Green, Blue (0–255)

```css
color: rgb(255, 0, 0);
```

---

# COLOR FORMAT 4 — RGBA

RGB + Alpha (opacity)

```css
color: rgba(0, 0, 0, 0.6);
```

Useful for overlays & shadows.

---

# COLOR FORMAT 5 — HSL

Hue, Saturation, Lightness

```css
color: hsl(200, 80%, 50%);
```

Better for color adjustments because:

• Hue = actual color
• Saturation = intensity
• Lightness = brightness

---

# COLOR FORMAT 6 — HSLA

HSL + Alpha

```css
color: hsla(200, 80%, 50%, 0.4);
```

---

# COLOR FORMAT 7 — currentColor

Uses the element's current text color:

```css
border: 2px solid currentColor;
```

Useful for buttons, icons.

---

# INTERVIEW QUESTIONS (Colors)

1. Difference between hex, rgb, and hsl?
2. Why use rgba?
3. What is currentColor?
4. Why is HSL preferred for design systems?

---

# PART 2 — BACKGROUND PROPERTIES

These control image-based backgrounds.

Properties:

1. background-color
2. background-image
3. background-repeat
4. background-position
5. background-size
6. background-attachment
7. background-origin
8. background-clip
9. background (shorthand)
10. multiple backgrounds

Let’s learn each.

---

# BACKGROUND PROPERTY 1 — background-color

```css
div {
    background-color: lightblue;
}
```

---

# BACKGROUND PROPERTY 2 — background-image

```css
div {
    background-image: url("banner.jpg");
}
```

---

# BACKGROUND PROPERTY 3 — background-repeat

Controls repeating pattern.

```
repeat (default)
no-repeat
repeat-x
repeat-y
```

Example:

```css
div {
    background-repeat: no-repeat;
}
```

---

# BACKGROUND PROPERTY 4 — background-position

Controls the position of background image.

Values:

```
top, bottom, left, right, center
50% 50% (common)
```

Example:

```css
background-position: center;
```

---

# BACKGROUND PROPERTY 5 — background-size

```
auto        (default)
cover       (fills container; crops image)
contain     (fits entire image; may leave space)
100% 100%   (stretch)
```

Examples:

```css
background-size: cover;    /* best for hero banners */
background-size: contain;
```

---

# BACKGROUND PROPERTY 6 — background-attachment

```
scroll (default)
fixed  (parallax effect)
local
```

Example:

```css
background-attachment: fixed;
```

This creates parallax scrolling.

---

# BACKGROUND PROPERTY 7 — background-clip

Defines area where background is painted.

```
border-box
padding-box
content-box
```

---

# BACKGROUND PROPERTY 8 — background-origin

```
border-box
padding-box
content-box
```

Not commonly used but important in theory.

---

# BACKGROUND PROPERTY 9 — background (shorthand)

```css
background: url("img.jpg") no-repeat center/cover;
```

This includes:

• image
• repeat
• position
• size

---

# BACKGROUND PROPERTY 10 — Multiple Backgrounds

```css
background-image: 
    url("texture.png"),
    url("pattern.svg");
```

Each layer can be positioned separately.

---

# PART 3 — GRADIENTS

Gradients are treated as background images.

Types:

1. linear-gradient
2. radial-gradient
3. conic-gradient

---

## 1. Linear Gradient

```css
background: linear-gradient(to right, #ff0000, #0000ff);
```

Direction examples:

```
to right
to left
to bottom
45deg
```

---

## 2. Radial Gradient

```css
background: radial-gradient(circle, #fff, #000);
```

---

## 3. Conic Gradient (modern)

```css
background: conic-gradient(red, yellow, green);
```

Used for charts & meters.

---

# PART 4 — FULL DEMO (With All Background Features)

```html
<!DOCTYPE html>
<html>
<head>
<style>

.hero {
    height: 300px;

    /* Background image */
    background-image: url("banner.jpg");

    /* No repeating */
    background-repeat: no-repeat;

    /* Center the image */
    background-position: center;

    /* Fill container while cropping */
    background-size: cover;

    /* Parallax effect */
    background-attachment: fixed;

    /* Add gradient overlay */
    background-image:
        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url("banner.jpg");

    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2rem;
    text-transform: uppercase;
}

</style>
</head>

<body>

<div class="hero">
    Modern Hero Section
</div>

</body>
</html>
```

---

# OUTPUT EXPLANATION

You see a modern-looking hero banner with:

• dark overlay
• full-width background
• centered text
• parallax scroll
• gradient + image layered

This is how actual landing pages are built.

---

# NOTES & BEST PRACTICES

1. Use **background-size: cover** for hero sections
2. Apply gradient overlays using multiple backgrounds
3. Do not stretch images using 100% 100% (distortion)
4. Use **rgba** for transparent overlays
5. Use **fixed background** sparingly (performance)
6. Always use compressed images (webp recommended)

---

# SECTION 5 — INTERVIEW QUESTIONS

1. Difference between RGB and HSL?
2. What does background-size: cover do?
3. How to create a gradient overlay on an image?
4. Difference between background-position: center vs 50% 50%?
5. What is background-attachment: fixed used for?
6. How do you apply multiple backgrounds?
7. What does no-repeat do?
8. How does rgba differ from opacity?
9. What is the shorthand form of background?
10. Which color system is best for UI design?

---