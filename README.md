# chai-tailwind-tg

A lightweight, custom utility-first CSS framework inspired by Tailwind CSS. Built for developers who want ready-to-use, beautiful utility classes without the complexity of a full build step.

## Installation

### Via NPM

```bash
npm i chai-tailwind-tg
```

## Quick Start

Add the following script tag to your HTML file:

```html
<script type="module">
  import { chaitailwind } from "./node_modules/chai-tailwind-tg/index.js";
  chaitailwind();
</script>
```

Or if using a bundler:

```javascript
import { chaitailwind } from "chai-tailwind-tg";
chaitailwind();
```

## Links

- **NPM**: https://www.npmjs.com/package/chai-tailwind-tg
- **GitHub**: https://github.com/tilak9606/Chai-tailwind-tg

---

## Utility Classes

### Background Colors

| Class | Description |
|-------|-------------|
| `chai-bg-primary` | Linear gradient from indigo-500 to violet-500 |
| `chai-bg-dark` | Dark navy background (#0f172a) |
| `chai-bg-light` | Light slate background (#f8fafc) |

**Example:**

```html
<div class="chai-bg-primary chai-rounded-lg" style="height: 100px;">
  <p class="chai-text-light">Primary Gradient Background</p>
</div>
```

### Text Colors

| Class | Description |
|-------|-------------|
| `chai-text-primary` | Indigo text color (#6366f1) |
| `chai-text-dark` | Dark navy text (#0f172a) |
| `chai-text-light` | Light text (#f8fafc) |
| `chai-text-muted` | Muted gray text (#94a3b8) |

### Flexbox

| Class | Description |
|-------|-------------|
| `chai-flex` | Display flex |
| `chai-flex-center` | Flex with centered items |
| `chai-flex-col` | Flex direction column |
| `chai-flex-row` | Flex direction row |
| `chai-flex-wrap` | Flex wrap enabled |
| `chai-flex-nowrap` | Flex wrap disabled |
| `chai-justify-start` | Justify content flex-start |
| `chai-justify-center` | Justify content center |
| `chai-justify-end` | Justify content flex-end |
| `chai-items-start` | Align items flex-start |
| `chai-items-center` | Align items center |
| `chai-items-end` | Align items flex-end |
| `chai-align-start` | Align items flex-start (alias) |
| `chai-align-center` | Align items center (alias) |
| `chai-align-end` | Align items flex-end (alias) |

### Grid

| Class | Description |
|-------|-------------|
| `chai-grid` | Display grid |
| `chai-grid-cols-2` | 2 equal columns |
| `chai-grid-cols-3` | 3 equal columns |
| `chai-grid-cols-4` | 4 equal columns |
| `chai-grid-rows-2` | 2 equal rows |
| `chai-grid-rows-3` | 3 equal rows |
| `chai-grid-rows-4` | 4 equal rows |

### Spacing (Stack)

| Class | Description |
|-------|-------------|
| `chai-stack` | Adds 12px margin-top to all direct children except first |

### Border Radius

| Class | Description |
|-------|-------------|
| `chai-rounded` | 8px border radius |
| `chai-rounded-lg` | 12px border radius |
| `chai-rounded-xl` | 16px border radius |
| `chai-rounded-2xl` | 20px border radius |
| `chai-rounded-full` | Full pill shape |

### Borders

| Class | Description |
|-------|-------------|
| `chai-border` | Light gray border (#e5e7eb) |
| `chai-border-primary` | Indigo border (#6366f1) |
| `chai-border-dark` | Dark border (#0f172a) |
| `chai-border-light` | Light border (#f8fafc) |


### Shadows

| Class | Description |
|-------|-------------|
| `chai-shadow-soft` | Soft shadow (0 4px 20px rgba(0,0,0,0.08)) |
| `chai-shadow-glow` | Indigo glow shadow |

### Typography

| Class | Description |
|-------|-------------|
| `chai-font-bold` | Font weight 700 |
| `chai-uppercase` | Uppercase text |
| `chai-lowercase` | Lowercase text |
| `chai-capitalize` | Capitalize text |

### Animations

| Class | Description |
|-------|-------------|
| `chai-fade-in` | Fade in with upward slide (0.6s) |
| `chai-slide-up` | Slide up animation (0.5s) |
| `chai-bounce` | Infinite bounce animation |
| `chai-glow-pulse` | Infinite glow pulse animation |

### Buttons

| Class | Description |
|-------|-------------|
| `chai-btn` | Styled gradient button with hover effects |

### Cards

| Class | Description |
|-------|-------------|
| `chai-card` | White card with soft shadow |
| `chai-card-glass` | Glassmorphism card with blur |

### Hover Effects

| Class | Description |
|-------|-------------|
| `chai-hover-lift` | Lifts element up 5px on hover |
| `chai-hover-scale` | Scales element to 1.05x on hover |

## Author

Tilak Gajjar

- GitHub: https://github.com/tilak9606
- NPM: https://www.npmjs.com/package/chai-tailwind-tg
