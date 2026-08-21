# HTML Cheat Sheet — Most Used by Developers

A quick reference for the HTML tags and patterns you'll reach for constantly.

---

## 1. Document Structure

Every HTML page starts with this skeleton.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>
<body>

  <!-- page content goes here -->

</body>
</html>
```

---

## 2. Headings & Paragraphs

```html
<h1>Main Heading</h1>
<h2>Section Heading</h2>
<h3>Sub-section Heading</h3>

<p>This is a paragraph of text.</p>
```

---

## 3. Text Formatting

```html
<strong>Bold / important text</strong>
<em>Italic / emphasized text</em>
<br>            <!-- line break -->
<hr>            <!-- horizontal rule -->
<small>Fine print</small>
<code>inline code</code>
<span>Inline generic container</span>
```

---

## 4. Links

```html
<a href="https://example.com">Visit Example</a>
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Open in new tab</a>
<a href="#section-id">Jump to section on this page</a>
<a href="mailto:hello@example.com">Email us</a>
```

---

## 5. Images

```html
<img src="images/photo.jpg" alt="Description of image" width="400">
```

---

## 6. Lists

```html
<!-- Unordered list -->
<ul>
  <li>Coffee</li>
  <li>Tea</li>
</ul>

<!-- Ordered list -->
<ol>
  <li>Step one</li>
  <li>Step two</li>
</ol>
```

---

## 7. Divs & Spans (generic containers)

```html
<div class="card">
  <span class="label">New</span>
  <p>Card content goes here.</p>
</div>
```

---

## 8. Semantic Layout Elements

Used instead of plain `<div>`s to give the page real structure and improve accessibility/SEO.

```html
<header>Site header / logo / nav</header>

<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>

<main>
  <section>
    <h2>Section Title</h2>
    <article>
      <h3>Article Title</h3>
      <p>Article content...</p>
    </article>
  </section>
</main>

<aside>Sidebar / related content</aside>

<footer>&copy; 2026 My Company</footer>
```

---

## 9. Tables

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ada Lovelace</td>
      <td>Engineer</td>
    </tr>
  </tbody>
</table>
```

---

## 10. Forms & Inputs

```html
<form action="/submit" method="POST">

  <label for="name">Name</label>
  <input type="text" id="name" name="name" placeholder="Your name" required>

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>

  <label for="password">Password</label>
  <input type="password" id="password" name="password">

  <label for="age">Age</label>
  <input type="number" id="age" name="age" min="0" max="120">

  <label for="options">Choose one</label>
  <select id="options" name="options">
    <option value="a">Option A</option>
    <option value="b">Option B</option>
  </select>

  <label>
    <input type="checkbox" name="subscribe"> Subscribe to newsletter
  </label>

  <label>
    <input type="radio" name="plan" value="free"> Free
  </label>
  <label>
    <input type="radio" name="plan" value="pro"> Pro
  </label>

  <label for="message">Message</label>
  <textarea id="message" name="message" rows="4"></textarea>

  <button type="submit">Submit</button>

</form>
```

---

## 11. Buttons

```html
<button type="button">Click me</button>
<button type="submit">Submit form</button>
<button type="reset">Reset form</button>
```

---

## 12. Attributes You'll Use Constantly

```html
<div id="unique-id" class="shared-class" data-user-id="42" title="Tooltip text"></div>
```

- `id` — unique identifier (used once per page)
- `class` — reusable name for styling/JS targeting
- `data-*` — custom data attribute for JS to read
- `title` — tooltip shown on hover

---

## 13. Media

```html
<img src="pic.jpg" alt="Description">

<video controls width="600">
  <source src="movie.mp4" type="video/mp4">
</video>

<audio controls>
  <source src="song.mp3" type="audio/mpeg">
</audio>
```

---

## 14. Comments

```html
<!-- This is a comment and won't be shown on the page -->
```

---

## 15. Iframes (embedding another page)

```html
<iframe src="https://example.com" width="600" height="400" title="Embedded content"></iframe>
```

---

## 16. Common `<meta>` Tags

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="A short description of your page">
<link rel="icon" href="favicon.ico">
<link rel="stylesheet" href="styles.css">
<script src="script.js" defer></script>
```
