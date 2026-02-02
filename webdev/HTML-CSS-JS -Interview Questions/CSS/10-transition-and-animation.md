# CSS Interview Questions and Answers

---

**Topic : ransitions and Animations**

## 46. How do you create a CSS transition?

### Answer

A **CSS transition** allows an element to **smoothly change** from one state to another when a property value changes.

You define:

* **what** property to animate
* **how long** it should take
* **how** it should move

```css
.box {
  width: 100px;
  background: blue;
  transition: width 0.3s ease;
}

.box:hover {
  width: 200px;
}
```

Here, width changes smoothly when hovered.

Common transition properties:

* `transition-property`
* `transition-duration`
* `transition-timing-function`
* `transition-delay`

Shorthand:

```css
transition: all 0.3s ease-in-out;
```

---

## 47. What is the difference between a CSS transition and animation?

### Answer

| Feature   | Transition                        | Animation               |
| --------- | --------------------------------- | ----------------------- |
| Trigger   | Needs state change (hover, class) | Runs automatically      |
| Control   | Simple start → end                | Multiple steps          |
| Keyframes | Not used                          | Required                |
| Looping   | Not possible                      | Possible                |
| Use case  | Hover effects, UI feedback        | Complex motion, loaders |

Transition example:

```css
button:hover {
  background: red;
}
```

Animation example:

```css
@keyframes pulse {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}
```

---

## 48. How do you animate an item’s entrance and exit on the page?

### Answer

Entrance and exit animations are typically done using **opacity and transform**, triggered by adding/removing classes.

---

### Entrance Animation

```css
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: enter 0.4s ease forwards;
}

@keyframes enter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

### Exit Animation

```css
.fade-out {
  animation: exit 0.3s ease forwards;
}

@keyframes exit {
  to {
    opacity: 0;
    transform: translateY(20px);
  }
}
```

Used with JavaScript or frameworks to toggle classes.

---

## 49. Can you explain how to use `@keyframes`?

### Answer

`@keyframes` defines **animation stages** over time.

```css
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
}
```

Apply animation:

```css
.box {
  animation: slide 2s infinite ease-in-out;
}
```

Key points:

* Percentages define timeline
* `from` = `0%`, `to` = `100%`
* Can animate multiple properties

---

## 50. How do you set the timing functions in CSS animations?

### Answer

Timing functions control the **speed curve** of an animation.

---

### Common Timing Functions

```css
animation-timing-function: ease;
animation-timing-function: linear;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
```

---

### Custom Timing with `cubic-bezier`

```css
animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
```

---

### Per-Keyframe Timing

```css
@keyframes move {
  0%   { transform: translateX(0); }
  50%  { transform: translateX(100px); animation-timing-function: ease-in; }
  100% { transform: translateX(0); }
}
```

---

### Final Summary

* Transitions animate state changes
* Animations run independently
* Entrance/exit use opacity + transform
* `@keyframes` defines motion stages
* Timing functions control motion feel
