# CSS Cheat Sheet — Most Used by Developers

A quick reference for the CSS you'll reach for on almost every project.

---

## 1. Linking CSS to HTML

```html
<link rel="stylesheet" href="styles.css">
```

```css
/* styles.css */
body {
  margin: 0;
}
```

---

## 2. Selectors

```css
* { }                /* all elements */
p { }                 /* every <p> */
.card { }             /* class="card" */
#header { }           /* id="header" */
.card p { }           /* <p> inside .card */
.card > p { }         /* direct child <p> of .card */
a:hover { }           /* pseudo-class: on hover */
p::first-line { }     /* pseudo-element: first line of text */
input:focus { }       /* while focused */
li:first-child { }    /* first <li> in its parent */
li:nth-child(2) { }   /* 2nd <li> in its parent */
.btn, .link { }       /* multiple selectors, same rule */
```

---

## 3. Box Model

```css
.box {
  width: 300px;
  height: 150px;
  padding: 16px;        /* space inside the border */
  border: 1px solid #ccc;
  margin: 20px;          /* space outside the border */
  box-sizing: border-box; /* padding & border included in width/height */
}
```

---

## 4. Typography

```css
body {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;      /* 400 normal, 700 bold */
  line-height: 1.5;
  text-align: center;    /* left | right | center | justify */
  text-decoration: none; /* removes underline on links */
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
```

---

## 5. Colors & Backgrounds

```css
.box {
  color: #333333;                 /* text color */
  background-color: #f5f5f5;
  background-image: url("bg.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.9;                   /* 0 = invisible, 1 = fully visible */
}
```

---

## 6. Units

```css
.el {
  width: 100px;   /* fixed pixels */
  width: 50%;     /* relative to parent */
  font-size: 1rem;  /* relative to root font-size */
  font-size: 1em;   /* relative to parent font-size */
  width: 100vw;   /* 100% of viewport width */
  height: 100vh;  /* 100% of viewport height */
}
```

---

## 7. Flexbox (1-dimensional layout)

```css
.container {
  display: flex;
  flex-direction: row;       /* row | column */
  justify-content: center;   /* main-axis alignment */
  align-items: center;       /* cross-axis alignment */
  gap: 16px;
  flex-wrap: wrap;
}

.item {
  flex: 1;   /* grow to fill available space */
}
```

---

## 8. Grid (2-dimensional layout)

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-template-rows: auto;
  gap: 16px;
}

.item {
  grid-column: span 2; /* spans 2 columns */
}
```

---

## 9. Positioning

```css
.el {
  position: relative;   /* stays in flow, offset relative to itself */
  position: absolute;   /* removed from flow, relative to nearest positioned ancestor */
  position: fixed;      /* stays fixed relative to the viewport */
  position: sticky;     /* toggles between relative and fixed on scroll */
  top: 0;
  left: 0;
  z-index: 10;           /* stacking order (higher = on top) */
}
```

---

## 10. Display & Visibility

```css
.el {
  display: block;    /* takes full width, new line */
  display: inline;   /* flows with text, no width/height control */
  display: inline-block;
  display: none;     /* removed entirely, no space taken */
  visibility: hidden; /* invisible but still takes up space */
}
```

---

## 11. Borders & Rounded Corners

```css
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

---

## 12. Transitions & Simple Animation

```css
.btn {
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.btn:hover {
  background-color: #2563eb;
  transform: scale(1.05);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.fade {
  animation: fadeIn 0.5s ease-in;
}
```

---

## 13. Responsive Design (Media Queries)

```css
/* Base (mobile-first) styles */
.container {
  padding: 16px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 32px;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    max-width: 1100px;
    margin: 0 auto;
  }
}
```

---

## 14. CSS Variables (Custom Properties)

```css
:root {
  --primary-color: #2563eb;
  --spacing: 16px;
}

.btn {
  background-color: var(--primary-color);
  padding: var(--spacing);
}
```

---

## 15. Common Utility Patterns

```css
/* Center anything horizontally & vertically */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Truncate text with ellipsis */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Reset default margin/padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
