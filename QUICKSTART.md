# Quick Start Guide

## 🚀 Getting the Project Running

### Method 1: Direct File Opening (Fastest)
1. Navigate to the project folder
2. Right-click on `index.html`
3. Select "Open with" → Choose your browser
4. The application should load immediately

### Method 2: Using Python Server (Recommended)
```bash
# Navigate to project directory
cd path/to/Practice

# Start server (Python 3)
python -m http.server 8000

# Open in browser
# http://localhost:8000
```

### Method 3: Using Node.js
```bash
# Install http-server globally (first time only)
npm install -g http-server

# Run server
http-server

# Server will start on http://localhost:8080
```

### Method 4: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Browser opens automatically

---

## 📂 Project Files Overview

### Root Files
- **index.html** - Main application file
- **README.md** - Complete project documentation
- **STYLE_GUIDE.md** - Code style guidelines
- **.gitignore** - Git ignore rules

### CSS Folder (`/css`)
- **style.css** - Main stylesheet (320KB)
  - Navbar styling
  - Hero section styles
  - Carousel layouts
  - Responsive design
  - Modal styles
  - Footer styling

### JavaScript Folder (`/js`)
- **script.js** - Main application logic
  - Event listeners
  - Carousel controls
  - Modal functionality
  - Search features
  - Scroll effects
  - Mobile support

- **config.js** - Configuration constants
  - App settings
  - UI dimensions
  - API endpoints
  - Feature flags

- **data.js** - Sample data structures
  - Show/movie data format
  - User profile structure
  - API endpoint definitions
  - Error response formats

### Assets Folder (`/assets`)
- **images/** - Image storage
  - hero/ - Hero section images
  - thumbnails/ - Show/movie covers
  - logos/ - Branding assets
  - icons/ - UI icons
  
- **videos/** - Video storage
  - hero-video.mp4 - Hero background
  - trailers/ - Show trailers
  - teasers/ - Video clips

---

## 🎯 Common Tasks

### Change Hero Content
Edit in `index.html`:
```html
<h2 class="hero-title">Your Show Name</h2>
<p class="hero-description">Your description...</p>
```

### Update Colors
Edit in `css/style.css`:
```css
:root {
    --primary-color: #E50914; /* Change this */
    --dark-bg: #141414;
}
```

### Add New Carousel Section
1. Copy carousel section in `index.html`
2. Change the `id` attribute
3. Add new items with unique classes
4. Update JavaScript references if needed

### Change Logo
Edit in `index.html`:
```html
<h1 class="logo">YOUR LOGO</h1>
```

### Update Navigation Links
Edit in `index.html`:
```html
<li><a href="#" class="nav-link">Your Link</a></li>
```

### Modify Carousel Item Size
Edit in `css/style.css`:
```css
.carousel-item {
    flex: 0 0 280px; /* Width */
    height: 400px;   /* Height */
}
```

---

## 🔧 Configuration Options

### Navigation Settings
- Update links in navbar menu
- Change logo text
- Customize search placeholder

### Video Settings (in `js/config.js`)
```javascript
video: {
    autoplay: true,
    muted: true,
    quality: 'auto',
}
```

### Carousel Settings (in `js/config.js`)
```javascript
carousel: {
    scrollAmount: 300,
    items: {
        desktop: 6,
        tablet: 4,
        mobile: 2,
    }
}
```

---

## 📱 Testing Responsive Design

### Browser DevTools
1. Press `F12` or `Ctrl+Shift+I`
2. Click device toggle icon
3. Select device to preview

### Breakpoints
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: 480px - 767px
- Small: Below 480px

---

## 🐛 Troubleshooting

### Page Not Loading
- Check browser console (F12)
- Ensure all files are in correct folders
- Try clearing browser cache
- Use a local server instead of direct file opening

### Images Not Showing
- Check image paths are correct
- Verify image files exist
- Use absolute URLs for external images
- Check browser console for 404 errors

### Videos Not Playing
- Ensure video format is MP4
- Check video file path
- Verify video is not corrupted
- Check browser video support

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file path in HTML
- Verify CSS syntax is correct
- Check for CSS specificity issues

### JavaScript Not Working
- Open browser console (F12)
- Check for error messages
- Verify script.js path is correct
- Ensure scripts load in correct order

---

## 💡 Tips & Tricks

### Performance
- Compress images before adding
- Use video format optimization
- Minify CSS/JS for production
- Enable browser caching

### Mobile Development
- Test on actual devices
- Use Chrome DevTools mobile emulation
- Test touch interactions
- Check orientation changes

### Accessibility
- Use semantic HTML
- Add alt text to images
- Test keyboard navigation
- Check color contrast

### Browser Compatibility
- Test on multiple browsers
- Use autoprefixer for CSS
- Polyfills for older browsers
- Progressive enhancement

---

## 📚 Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

### Tools
- [VS Code](https://code.visualstudio.com/) - Code Editor
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Debugging
- [ImageOptim](https://imageoptim.com/) - Image Compression

### Hosting
- [GitHub Pages](https://pages.github.com/) - Free hosting
- [Netlify](https://www.netlify.com/) - Easy deployment
- [Vercel](https://vercel.com/) - Optimized for web apps

---

## 🔐 Before Going to Production

- [ ] Optimize all images
- [ ] Minify CSS and JavaScript
- [ ] Test on multiple browsers
- [ ] Check responsive design
- [ ] Validate HTML
- [ ] Test accessibility
- [ ] Check performance metrics
- [ ] Set up error tracking
- [ ] Configure CDN for assets
- [ ] Enable HTTPS

---

## 📞 Need Help?

1. Check the README.md
2. Review STYLE_GUIDE.md
3. Check browser console for errors
4. Search error message online
5. Ask in development community

---

**Happy Coding! 🚀**
