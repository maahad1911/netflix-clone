# Code Style Guide

## JavaScript Style Guidelines

### Naming Conventions
- **Variables**: camelCase (`const userAvatar`, `let scrollPosition`)
- **Constants**: UPPER_SNAKE_CASE (`const MAX_RESULTS = 20`)
- **Functions**: camelCase (`function handleScroll()`)
- **Classes**: PascalCase (`class VideoPlayer`)
- **IDs**: kebab-case (`id="video-modal"`)
- **Classes**: kebab-case (`class="carousel-item"`)

### Code Organization

```javascript
// 1. Imports and Dependencies
import { someFunction } from './utils.js';

// 2. Constants and Configuration
const CONFIG = {
  timeouts: 5000,
  retries: 3,
};

// 3. DOM Elements
const navbar = document.querySelector('.navbar');

// 4. Helper Functions
function formatTime(ms) {
  // Implementation
}

// 5. Main Functions
function initializeApp() {
  // Implementation
}

// 6. Event Listeners
window.addEventListener('scroll', handleScroll);

// 7. Initialization
document.addEventListener('DOMContentLoaded', initializeApp);
```

### Function Documentation

```javascript
/**
 * Brief description of what the function does
 * 
 * @param {type} paramName - Description of parameter
 * @returns {type} Description of return value
 * @throws {ErrorType} Description of error thrown
 */
function myFunction(paramName) {
  // Implementation
}
```

### Error Handling

```javascript
try {
  // Risky operation
  const result = performAction();
  return result;
} catch (error) {
  console.error('Descriptive error message:', error);
  // Handle error gracefully
  return null;
}
```

## CSS Style Guidelines

### Selectors
- Use specific class selectors
- Avoid inline styles
- Use semantic HTML elements
- Maintain selector specificity ratio

### Variable Naming

```css
/* Color Variables */
--color-primary: #E50914;
--color-bg-dark: #141414;
--color-text: #ffffff;

/* Spacing Variables */
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;

/* Duration Variables */
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
```

### Property Order

```css
.selector {
  /* Layout & Box Model */
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  padding: 1rem;
  margin: 0;
  border: 1px solid #ccc;
  
  /* Styling */
  background: linear-gradient(to bottom, #000, #333);
  color: #fff;
  font-size: 1rem;
  
  /* Effects & Transforms */
  opacity: 1;
  transform: translateX(0);
  transition: all 0.3s ease;
  
  /* Interactive States */
}

.selector:hover {
  opacity: 0.9;
  transform: translateX(10px);
}
```

## HTML Style Guidelines

### Semantic Markup

```html
<!-- Good -->
<nav class="navbar">
  <h1 class="logo">Netflix</h1>
  <ul class="menu">
    <li><a href="#home">Home</a></li>
  </ul>
</nav>

<!-- Bad -->
<div class="navbar">
  <div class="logo">Netflix</div>
  <div class="menu">
    <div><a href="#home">Home</a></div>
  </div>
</div>
```

### Attributes Order

```html
<img 
  src="image.jpg" 
  alt="Description" 
  class="image-class"
  id="unique-id"
  data-value="custom-data"
  width="300"
  height="400"
/>
```

### Indentation
- Use 4 spaces or 1 tab for indentation
- Maintain consistent indentation throughout
- Use proper nesting levels

## Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Changes that don't affect code meaning
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build process, dependencies

### Examples
```
feat(carousel): add smooth scrolling animation
fix(modal): close video on escape key
docs(README): update installation instructions
```

## Best Practices

### General
- ✅ Keep it simple (KISS)
- ✅ DRY (Don't Repeat Yourself)
- ✅ Use meaningful variable names
- ✅ Add comments for complex logic
- ✅ Test before committing
- ✅ Keep functions small and focused

### JavaScript
- ✅ Use `const` by default
- ✅ Use `let` for loop variables
- ✅ Avoid `var`
- ✅ Use arrow functions for callbacks
- ✅ Use template literals for strings
- ✅ Avoid global variables
- ✅ Use event delegation

### CSS
- ✅ Mobile-first approach
- ✅ Use CSS variables for theming
- ✅ Avoid `!important` unless necessary
- ✅ Use shorthand properties
- ✅ Organize properties logically
- ✅ Use meaningful class names

### HTML
- ✅ Use semantic elements
- ✅ Proper heading hierarchy
- ✅ Always include alt text for images
- ✅ Validate HTML
- ✅ Use data attributes for custom data
- ✅ Proper form labels

## Performance Tips

1. **Minimize HTTP Requests**
   - Combine files
   - Use CSS sprites
   - Inline critical CSS

2. **Optimize Images**
   - Use appropriate formats (WebP, JPEG, PNG)
   - Compress images
   - Use lazy loading

3. **Code Optimization**
   - Minify CSS and JavaScript
   - Remove unused code
   - Use efficient selectors

4. **Caching**
   - Set proper cache headers
   - Use local storage wisely
   - Implement service workers

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Testing Checklist

- [ ] Responsive on all breakpoints
- [ ] Works on different browsers
- [ ] Keyboard navigation works
- [ ] No console errors
- [ ] Images load properly
- [ ] Videos play correctly
- [ ] Touch events work on mobile
- [ ] Performance is acceptable

---

**Last Updated**: 2024
