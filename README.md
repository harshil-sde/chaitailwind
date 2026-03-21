# ChaiTailwind

A lightweight utility-first CSS engine — just like Tailwind, but built from scratch with vanilla JavaScript.

Write utility classes directly in your HTML. ChaiTailwind reads them, parses them, and injects the CSS automatically. No build tools. No config files. Just one script tag.

> Built as part of the [MasterJi](https://masterji.co) bounty challenge.

---

## How to Use

**1. Add the script tag at the bottom of your `<body>`**

```html
<body>
  <!-- your HTML here -->
  <script src="chaitailwind.js"></script>
</body>
```

**2. Use `chai-` classes directly on any element**

```html
<h1 class="chai-fs-32 chai-bg-black chai-text-white chai-p-20 chai-br-8">
  Hello ChaiTailwind!
</h1>
```

That's it! No CSS file needed. ✅

---

## How It Works

1. Scans all HTML elements for classes starting with `chai-`
2. Parses each class name → extracts property and value
3. Generates CSS rules dynamically
4. Injects a `<style>` tag into `<head>` automatically

---

## Available Utilities

### Typography
| Class | CSS Output |
|---|---|
| `chai-fs-20` | `font-size: 20px` |
| `chai-fw-700` | `font-weight: 700` |
| `chai-text-red` | `color: red` |
| `chai-text-ff0000` | `color: #ff0000` |
| `chai-ta-center` | `text-align: center` |
| `chai-ta-left` | `text-align: left` |
| `chai-ta-right` | `text-align: right` |

### Spacing
| Class | CSS Output |
|---|---|
| `chai-p-10` | `padding: 10px` |
| `chai-pt-10` | `padding-top: 10px` |
| `chai-pb-10` | `padding-bottom: 10px` |
| `chai-pl-10` | `padding-left: 10px` |
| `chai-pr-10` | `padding-right: 10px` |
| `chai-m-10` | `margin: 10px` |
| `chai-m-auto` | `margin: auto` |
| `chai-mt-10` | `margin-top: 10px` |
| `chai-mb-10` | `margin-bottom: 10px` |
| `chai-ml-10` | `margin-left: 10px` |
| `chai-mr-10` | `margin-right: 10px` |

### Sizing
| Class | CSS Output |
|---|---|
| `chai-w-200` | `width: 200px` |
| `chai-h-100` | `height: 100px` |

### Background & Border
| Class | CSS Output |
|---|---|
| `chai-bg-black` | `background-color: black` |
| `chai-bg-ff0000` | `background-color: #ff0000` |
| `chai-br-8` | `border-radius: 8px` |

### Layout
| Class | CSS Output |
|---|---|
| `chai-flex` | `display: flex` |
| `chai-grid` | `display: grid` |
| `chai-absolute` | `position: absolute` |
| `chai-fixed` | `position: fixed` |
| `chai-gap-10` | `gap: 10px` |
| `chai-ov-hidden` | `overflow: hidden` |

### Positioning
| Class | CSS Output |
|---|---|
| `chai-top-10` | `top: 10px` |
| `chai-left-10` | `left: 10px` |
| `chai-right-10` | `right: 10px` |
| `chai-bottom-10` | `bottom: 10px` |

### Misc
| Class | CSS Output |
|---|---|
| `chai-cursor-pointer` | `cursor: pointer` |

---

## 🎨 Hex Color Support

You cannot use `#` in HTML class names — so just skip it!

```html
<div class="chai-bg-ff0000">   →   background-color: #ff0000  ✅
<div class="chai-text-333">    →   color: #333                ✅
```

ChaiTailwind auto-detects 3-digit and 6-digit hex values and adds `#` automatically.

---

## 📁 File Structure

```
chaitailwind/
├── index.html        ← demo file
├── chaitailwind.js   ← the engine
└── README.md
```

---

## 🧠 Concepts Used

- `document.querySelectorAll` — DOM manipulation
- `Set` — duplicate-free class collection
- `String.prototype` methods — class name parsing
- Regex — hex color detection
- Dynamic `<style>` tag injection

---

## 📄 License

MIT — free to use, modify, and distribute.

---

Made with ☕ by [Harshil Raj](https://github.com/your-username)
