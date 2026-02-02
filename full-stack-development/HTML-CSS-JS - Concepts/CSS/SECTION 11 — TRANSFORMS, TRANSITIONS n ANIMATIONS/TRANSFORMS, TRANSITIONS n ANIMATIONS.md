# SECTION 11 — TRANSFORMS, TRANSITIONS & ANIMATIONS

---

# PART 1 — CSS TRANSFORMS (2D & 3D)

---

Transforms change **how an element looks** without affecting layout flow.

Common transform functions:

### 1. translate()

Moves element along X or Y axis.

```css
box {
    transform: translateX(20px);
}
```

### 2. scale()

Resizes element.

```css
box:hover {
    transform: scale(1.1);
}
```

### 3. rotate()

Rotates element.

```css
box {
    transform: rotate(45deg);
}
```

### 4. skew()

Slants element.

```css
box {
    transform: skewX(20deg);
}
```

### 5. combine transforms

```css
box {
    transform: translateY(-10px) scale(1.2) rotate(10deg);
}
```

---

## 3D Transforms

### 1. rotateX / rotateY / rotateZ

```css
.card:hover {
    transform: rotateY(20deg);
}
```

### 2. perspective (required for 3D effect)

```css
.container {
    perspective: 800px;
}
```

---

### Important Notes

• transform does NOT affect normal document flow
• only visual appearance changes
• transitions help animate transforms smoothly

---

# PART 2 — CSS TRANSITIONS (SMOOTH CHANGES)

---

A transition describes *how fast* and *how smoothly* a property changes.

### Syntax:

```css
transition: property duration timing-function delay;
```

Example:

```css
button {
    background: blue;
    transition: background 0.3s ease;
}

button:hover {
    background: darkblue;
}
```

---

## Common timing functions

```
ease        (default)
linear
ease-in
ease-out
ease-in-out
cubic-bezier(x1, y1, x2, y2)
```

Custom cubic-bezier for advanced UIs.

---

## What properties can transition?

Most numeric or color-based properties:

• transform
• opacity
• color
• background
• width
• height

Cannot transition:

• display
• visibility (unless using visibility+opacity trick)

---

## Transition shorthand

```css
transition: all 0.4s ease;
```

---

## Example: Hover Zoom Button

```css
button {
    transform: scale(1);
    transition: transform 0.3s ease;
}

button:hover {
    transform: scale(1.1);
}
```

---

# PART 3 — CSS ANIMATIONS (KEYFRAMES)

---

Animations allow **continuous**, **repeating**, or **complex multi-step** movements.

### Syntax:

```css
@keyframes myAnimation {
    from { opacity: 0; }
    to { opacity: 1; }
}
```

Apply:

```css
box {
    animation: myAnimation 2s ease-in-out;
}
```

---

## Multi-step animations

```css
@keyframes slide {
    0%   { transform: translateX(0); }
    50%  { transform: translateX(50px); }
    100% { transform: translateX(0); }
}
```

---

## Animation Properties

### 1. animation-duration

How long one cycle lasts.

### 2. animation-timing-function

```
ease, linear, cubic-bezier(...)
```

### 3. animation-delay

### 4. animation-iteration-count

Number of loops.

```
1, 2, infinite
```

### 5. animation-direction

```
normal
reverse
alternate
alternate-reverse
```

### 6. animation-fill-mode

```
none
forwards
backwards
both
```

Example:

```css
box {
    animation: slide 2s infinite alternate ease-in-out;
}
```

---

# PART 4 — PRACTICAL UI EXAMPLES

---

## EXAMPLE 1 — Fade In on Page Load

```css
@keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}

.card {
    opacity: 0;
    animation: fadeIn 1s ease forwards;
}
```

---

## EXAMPLE 2 — Loading Spinner

```css
.loader {
    width: 40px;
    height: 40px;
    border: 4px solid #ccc;
    border-top-color: #4a6cff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}
```

---

## EXAMPLE 3 — Modern Hover Card Lift

```css
.card {
    transition: transform 0.4s, box-shadow 0.4s;
}

.card:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}
```

---

## EXAMPLE 4 — Pulse Animation (buttons)

```css
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.btn {
    animation: pulse 2s infinite;
}
```

---

## EXAMPLE 5 — Image Reveal From Left

```css
@keyframes reveal {
    0% { transform: translateX(-100%); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
}

.img {
    animation: reveal 1s ease forwards;
}
```

---

# PART 5 — IMPORTANT CONCEPTS

---

### 1. transitions vs animations

| Feature       | Transitions        | Animations |
| ------------- | ------------------ | ---------- |
| Needs trigger | yes (hover, focus) | no         |
| Multi-step    | no                 | yes        |
| Infinite loop | no                 | yes        |
| Keyframes     | no                 | yes        |

---

### 2. Hardware acceleration

Use `transform` instead of `left/top`

BAD:

```css
div:hover {
    left: 20px;
}
```

GOOD:

```css
div:hover {
    transform: translateX(20px);
}
```

Transforms use GPU → smoother animations.

---

# PART 6 — FULL DEMO PROJECT

---

```html
<!DOCTYPE html>
<html>
<head>
<style>

.card {
    width: 250px;
    padding: 20px;
    border-radius: 12px;
    background: white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    transition: transform 0.4s, box-shadow 0.4s;
}

.card:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

button {
    padding: 12px 20px;
    background: #4a6cff;
    color: white;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: transform 0.3s;
}

button:hover {
    transform: scale(1.1);
}

button:active {
    transform: scale(0.95);
}

@keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
}

.container {
    animation: fade 1s ease forwards;
}

</style>
</head>

<body>

<div class="container">
    <div class="card">
        <h3>Product Title</h3>
        <p>Nice UI animation example using CSS transforms, transitions, and keyframes.</p>
        <button>Buy Now</button>
    </div>
</div>

</body>
</html>
```

---

# PART 7 — INTERVIEW QUESTIONS (VERY COMMON)

1. Difference between transitions and animations?
2. Why use transform instead of left/top?
3. What does transform: translateZ(0) do?
4. What is animation-fill-mode: forwards?
5. How do you create infinite animations?
6. What is the performance cost of box-shadow animations?
7. Explain cubic-bezier() with an example.
8. How to stop animation after one iteration?
9. Can transitions animate display:none?
10. Why should you avoid animating width/height?

---