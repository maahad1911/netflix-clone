# CSS Stylesheets Directory

This directory contains all CSS stylesheets for the Netflix Clone application.

## 📄 Files

### style.css
**Main stylesheet - Contains all styling for the application**

Size: ~35KB (unminified)  
Lines: 2500+

#### Organization
The stylesheet is organized into logical sections:

1. **CSS Variables** (Lines 1-20)
   - Color definitions
   - Spacing units
   - Transition durations
   - Typography scales

2. **Global Styles** (Lines 21-60)
   - HTML and body defaults
   - Reset styles
   - Font family settings
   - Background colors

3. **Navigation Bar** (Lines 61-200)
   - Fixed positioning
   - Scroll effects
   - Navbar layout
   - Menu styling
   - Search box
   - User avatar

4. **Hero Section** (Lines 201-400)
   - Full viewport hero
   - Video background
   - Overlay gradients
   - Text content positioning
   - Button styling
   - Animations

5. **Carousel/Featured Sections** (Lines 401-800)
   - Carousel container
   - Carousel items
   - Scroll behavior
   - Hover effects
   - Play buttons
   - Item information

6. **Footer** (Lines 801-950)
   - Footer layout
   - Footer sections
   - Links styling
   - Social media links

7. **Modal** (Lines 951-1050)
   - Modal container
   - Modal content
   - Close button
   - Video player styles

8. **Responsive Design** (Lines 1051-2500)
   - Large screens (1024px+)
   - Tablets (768-1023px)
   - Mobile (480-767px)
   - Small mobile (<480px)

#### Key Features
- CSS Custom Properties for theming
- Flexbox and Grid layouts
- Smooth transitions and animations
- Media queries for responsive design
- Modern CSS features (backdrop-filter, gradients)
- Optimized selectors

## 🚀 Usage

### In HTML
```html
<link rel="stylesheet" href="css/style.css">
```

### Customizing Colors
Edit the `:root` section:
```css
:root {
    --primary-color: #E50914;
    --dark-bg: #141414;
    /* ... other variables ... */
}
```

### Adding New Styles
1. Determine category (component, layout, utility)
2. Add to appropriate section
3. Follow naming conventions
4. Use CSS variables for colors and spacing
5. Include media queries for responsive design

## 📏 Responsive Breakpoints

```css
/* Large screens */
@media (min-width: 1024px) { }

/* Tablets */
@media (max-width: 1024px) { }
@media (max-width: 768px) { }

/* Mobile */
@media (max-width: 480px) { }
```

## 🎨 Color Palette (CSS Variables)

```css
--primary-color: #E50914;      /* Netflix Red */
--dark-bg: #141414;             /* Main background */
--lighter-bg: #221f1f;          /* Secondary background */
--text-color: #ffffff;          /* Primary text */
--secondary-text: #808080;      /* Secondary text */
```

## ⏱️ Animation Durations

```css
--transition: all 0.3s ease;    /* Standard transition */
```

## 📝 Naming Conventions

- Class names: kebab-case (`.carousel-item`)
- CSS Variables: kebab-case (`--primary-color`)
- Property order: Layout → Styling → Effects

## 🔧 Tools for Optimization

### Minification
```bash
# Using cssnano
npm install cssnano
npx cssnano style.css -o style.min.css
```

### Autoprefixer
```bash
npm install autoprefixer postcss-cli
npx postcss style.css --use autoprefixer -o style.css
```

## 📚 Future Files

### responsive.css (Planned)
- Additional responsive styles
- Device-specific optimizations
- Print styles

### animations.css (Planned)
- Dedicated animation definitions
- Keyframe animations
- Transition library

---

**Last Updated**: 2024
**Version**: 1.0
