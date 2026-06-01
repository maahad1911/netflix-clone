# JavaScript Directory

This directory contains all JavaScript files for the Netflix Clone application.

## 📄 Files

### script.js
**Main application logic and interactivity**

Size: ~20KB (unminified)  
Lines: 600+

#### Sections
1. **DOM Element References** (Lines 1-30)
   - Navbar, carousel, modal elements
   - Button references
   - Video player elements

2. **Navbar Functionality** (Lines 31-80)
   - Scroll detection
   - Navbar styling on scroll
   - Active link management

3. **Search Functionality** (Lines 81-120)
   - Search input handling
   - Enter key detection
   - Search term validation

4. **Carousel Navigation** (Lines 121-200)
   - Scroll left/right functions
   - Smooth scrolling
   - Touch support
   - Button handlers

5. **Video Modal** (Lines 201-280)
   - Modal open/close
   - Video controls
   - Keyboard escape handling
   - Outside click detection

6. **Event Listeners** (Lines 281-350)
   - Play button handlers
   - Carousel item clicks
   - Touch swipe handlers
   - Keyboard events

7. **Utility Functions** (Lines 351-400)
   - Format functions
   - Debounce helper
   - Lazy loading

8. **Initialization** (Lines 401-600)
   - DOMContentLoaded
   - Page load setup
   - Accessibility features
   - Console logging

#### Key Features
- No dependencies (Vanilla JavaScript)
- Event delegation
- Touch and mobile support
- Keyboard accessibility
- Performance optimized
- Well-documented

### config.js
**Configuration constants and settings**

Size: ~5KB  
Lines: 150+

#### Contents
```javascript
CONFIG = {
  app: {
    name: 'Netflix Clone',
    version: '1.0.0',
    author: 'Development Team',
  },
  api: {
    baseURL: 'https://api.example.com/v1',
    timeout: 5000,
  },
  features: {
    darkMode: false,
    autoPlay: true,
  },
  video: {
    autoplay: true,
    muted: true,
    controls: true,
  },
  carousel: {
    scrollAmount: 300,
    items: {
      desktop: 6,
      tablet: 4,
      mobile: 2,
    }
  },
  breakpoints: {
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1400,
  }
}
```

#### Usage
```javascript
import { CONFIG } from './config.js';
console.log(CONFIG.app.version); // '1.0.0'
```

### data.js
**Sample data structures and mock data**

Size: ~8KB  
Lines: 200+

#### Contents
1. **SAMPLE_SHOWS** - Array of show objects
   ```javascript
   {
     id: 1,
     title: 'Show Name',
     image: 'url',
     year: 2024,
     rating: 9.5,
     seasons: 5,
     genre: ['Drama', 'Sci-Fi'],
   }
   ```

2. **USER_PROFILE** - User data structure
   ```javascript
   {
     id: 'user-123',
     username: 'john_doe',
     subscriptionTier: 'premium',
     watchHistory: [],
     favorites: [],
   }
   ```

3. **CAROUSEL_CONFIG** - Carousel setup
   ```javascript
   {
     trending: {
       title: 'Trending Now',
       shows: [1, 2, 3, 4, 5, 6],
     }
   }
   ```

4. **API_ENDPOINTS** - Backend routes (Future)
   ```javascript
   {
     getShows: '/api/shows',
     getShowById: '/api/shows/:id',
     search: '/api/search',
   }
   ```

### carousel.js (Future)
**Dedicated carousel module**
- Carousel class definition
- Scroll handling
- Item management
- Auto-play features

### modal.js (Future)
**Modal functionality module**
- Modal class
- Open/close logic
- Event handling
- Content management

### utils.js (Future)
**Utility functions library**
- Date formatting
- String utilities
- DOM helpers
- Math utilities

### api.js (Future)
**API integration module**
- Fetch wrapper
- Error handling
- Request/response processing
- Authentication

---

## 🚀 Usage

### In HTML
```html
<script src="js/script.js"></script>
<script src="js/config.js"></script>
<script src="js/data.js"></script>
```

### Importing Modules (Future ES6 Modules)
```javascript
import { CONFIG } from './config.js';
import { SAMPLE_SHOWS } from './data.js';
import { Carousel } from './carousel.js';
```

## 📝 Coding Standards

### Variable Naming
- camelCase for variables: `const userAvatar`
- UPPER_SNAKE_CASE for constants: `const MAX_ITEMS = 10`
- descriptive names: `const heroSection` not `const hs`

### Function Structure
```javascript
/**
 * Brief description
 * @param {type} param - Description
 * @returns {type} Description
 */
function myFunction(param) {
  // Implementation
}
```

### Event Handling
```javascript
// Good
element.addEventListener('click', handleClick);

// Avoid
element.onclick = handleClick; // Inline handlers
```

## 🔧 Common Tasks

### Add New Carousel Section
1. Add section to HTML
2. Add scroll function reference
3. Test smooth scrolling

### Add Search Functionality
1. Add search handler in script.js
2. Update search-related functions
3. Connect to API endpoint (future)

### Add New Config Option
1. Add to CONFIG object in config.js
2. Document the option
3. Reference in code

### Add Sample Data
1. Add to SAMPLE_SHOWS array in data.js
2. Include all required fields
3. Test in carousel

## 📊 Performance Tips

- Use event delegation for many elements
- Debounce scroll and resize events
- Lazy load images with Intersection Observer
- Minify for production
- Remove console logs in production
- Use async/await for API calls

## 🐛 Debugging

### Browser Console
```javascript
// Log with context
console.log('Carousel scrolled:', position);
console.warn('Missing data:', item);
console.error('API error:', error);
```

### Breakpoints
```javascript
// Add breakpoint in DevTools
debugger; // Execution pauses here
```

## 🧪 Testing Checklist

- [ ] All buttons work
- [ ] Carousel scrolls smoothly
- [ ] Modal opens and closes
- [ ] Search accepts input
- [ ] Mobile touch works
- [ ] Keyboard navigation works
- [ ] No console errors
- [ ] No memory leaks

## 📚 Resources

- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
- [JavaScript.info](https://javascript.info/)
- [WebAPIs](https://developer.mozilla.org/en-US/docs/Web/API)

---

**Last Updated**: 2024
**Version**: 1.0
