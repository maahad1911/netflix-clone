# Images Directory

This directory contains all image assets for the Netflix Clone application.

## 📁 Subdirectories

### hero/
**Hero section background images**

- **Purpose**: Large background images for hero section
- **Dimensions**: 1920x1080px minimum
- **Format**: JPG (optimized) or PNG (graphics)
- **Quality**: 85-90% JPEG quality
- **File Size**: 500KB - 2MB per image
- **Aspect Ratio**: 16:9

#### Files Structure
```
hero/
├── stranger-things-1920.jpg
├── breaking-bad-1920.jpg
├── the-crown-1920.jpg
└── README.md
```

#### Example Usage
```html
<img src="assets/images/hero/stranger-things-1920.jpg" alt="Stranger Things">
```

```css
.hero {
  background-image: url('assets/images/hero/stranger-things-1920.jpg');
  background-size: cover;
  background-position: center;
}
```

---

### thumbnails/
**Show and movie cover images for carousels**

- **Purpose**: Poster/cover art for carousels
- **Dimensions**: 280x400px (standard Netflix ratio)
- **Format**: JPG (optimized)
- **Quality**: 80% JPEG quality
- **File Size**: 10-30KB per image
- **Aspect Ratio**: 0.7:1 (or similar 16:9 equivalent)

#### Files Structure
```
thumbnails/
├── show-1.jpg
├── show-2.jpg
├── show-3.jpg
├── breaking-bad.jpg
├── stranger-things.jpg
├── the-crown.jpg
└── README.md
```

#### Image Guidelines
- High quality poster art
- Clear readable text
- Vibrant colors that pop on dark background
- No watermarks
- Consistent styling across all thumbnails
- Test on dark background for contrast

#### Example Usage
```html
<img src="assets/images/thumbnails/stranger-things.jpg" alt="Stranger Things">
```

---

### logos/
**Brand and channel logos**

- **Purpose**: Netflix logo, channel logos
- **Format**: PNG with transparency (preferred) or SVG
- **Size**: 100x100px to 500x500px
- **Quality**: Lossless
- **File Size**: 10-100KB
- **Color Variations**: Light and dark versions recommended

#### Files Structure
```
logos/
├── netflix-logo-light.png
├── netflix-logo-dark.png
├── netflix-logo.svg
└── README.md
```

#### Example Usage
```html
<img src="assets/images/logos/netflix-logo.png" alt="Netflix">
```

---

### icons/
**UI icons and symbols**

- **Purpose**: Buttons, indicators, UI elements
- **Format**: SVG (preferred), PNG as fallback
- **Size**: 16x16px to 256x256px
- **Quality**: Optimized SVG or PNG
- **File Size**: 1-5KB per icon
- **Color**: Usually white or primary red

#### Files Structure
```
icons/
├── play-icon.svg
├── pause-icon.svg
├── search-icon.svg
├── menu-icon.svg
├── close-icon.svg
├── heart-icon.svg
├── play-icon@2x.svg (2x for retina)
└── README.md
```

#### SVG Example
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="#ffffff" d="M8 5v14l11-7z"/>
</svg>
```

#### Example Usage
```html
<!-- As SVG directly -->
<img src="assets/images/icons/play-icon.svg" alt="Play">

<!-- As CSS background -->
.play-btn {
  background-image: url('assets/images/icons/play-icon.svg');
}
```

---

## 🎨 Image Naming Convention

```
[type]-[name]-[variant]-[size].format

Examples:
hero-stranger-things-16-9-1920.jpg
thumbnail-breaking-bad-280-400.jpg
logo-netflix-light-100.png
icon-play-24.svg
```

---

## 📊 Recommended Sizes

| Type | Dimension | Format | Size |
|------|-----------|--------|------|
| Hero | 1920x1080 | JPG | 500KB-2MB |
| Thumbnail | 280x400 | JPG | 15-30KB |
| Logo | 100x500 | PNG/SVG | 10-100KB |
| Icon | 24x256 | SVG | 1-5KB |

---

## 🔧 Optimization Tools

### Online Tools
- [Tinypng.com](https://tinypng.com/) - Quick compression
- [ImageOptim.com](https://imageoptim.com/) - Batch optimization
- [SVGOptimizer](https://github.com/scour-project/scour) - SVG minification

### Command Line
```bash
# Using ImageMagick
convert image.jpg -quality 85 -resize 1920x1080 optimized.jpg

# Using ImageOptim (Mac)
imageoptim image.jpg

# Using OptiPNG
optipng -o2 image.png
```

---

## 📱 Responsive Images

### Picture Element
```html
<picture>
  <source media="(max-width: 480px)" 
          srcset="assets/images/hero/mobile-480.jpg">
  <source media="(max-width: 768px)" 
          srcset="assets/images/hero/tablet-768.jpg">
  <img src="assets/images/hero/desktop-1920.jpg" alt="Hero">
</picture>
```

### CSS Background
```css
@media (max-width: 768px) {
  .hero {
    background-image: url('assets/images/hero/tablet-768.jpg');
  }
}

@media (max-width: 480px) {
  .hero {
    background-image: url('assets/images/hero/mobile-480.jpg');
  }
}
```

---

## ✅ Quality Checklist

Before adding images to the project:

- [ ] Correct dimensions
- [ ] Optimized file size
- [ ] Proper format (JPG/PNG/SVG)
- [ ] Clear image quality
- [ ] Good contrast
- [ ] Consistent styling
- [ ] Descriptive file name
- [ ] Tested in multiple browsers
- [ ] Accessible alt text provided
- [ ] No copyright issues

---

## 🌐 External Image Sources

### Free Stock Photos
- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)
- [Pixabay](https://pixabay.com/)
- [Picsum Photos](https://picsum.photos/) - Dynamic placeholder images

### Icon Libraries
- [Font Awesome](https://fontawesome.com/)
- [Material Icons](https://fonts.google.com/icons)
- [Feather Icons](https://feathericons.com/)
- [Material Design Icons](https://materialdesignicons.com/)

---

## 🔐 Copyright & Licensing

- Only use images with proper licenses
- Check usage rights before including
- Give proper attribution when required
- Use royalty-free images for commercial use
- Document image sources

---

## 📈 Performance Tips

1. **Lazy Loading**
```html
<img src="assets/images/thumbnails/show.jpg" 
     loading="lazy" 
     alt="Show Name">
```

2. **Responsive Images**
Use srcset for different screen sizes

3. **Image Compression**
Compress all images before adding

4. **Format Selection**
- JPG for photos
- PNG for graphics
- SVG for icons

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Image not showing | Check file path and extension |
| Poor quality | Increase JPEG quality or use larger source |
| Large file size | Compress image using tools |
| Pixelated | Use higher resolution source image |
| Wrong aspect ratio | Resize before optimizing |

---

**Last Updated**: 2024
**Version**: 1.0
