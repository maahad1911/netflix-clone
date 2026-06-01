# Assets Management Guide

## 📦 Assets Organization

This guide explains how to properly manage images and videos in the Netflix Clone project.

---

## 🖼️ Images

### Directory Structure

```
assets/images/
├── hero/           # Hero section backgrounds
├── thumbnails/     # Show/movie covers (280x400px)
├── logos/         # Brand and channel logos
└── icons/         # UI icons and symbols
```

### Image Format Guidelines

#### Hero Images
- **Dimensions**: 1920x1080px minimum
- **Format**: JPG for photos, PNG for graphics
- **Quality**: 85-90% JPEG quality
- **File Size**: 500KB-2MB
- **Aspect Ratio**: 16:9
- **Purpose**: Background images for hero section

**Optimization**:
```bash
# Using ImageMagick
convert image.jpg -quality 85 -resize 1920x1080 optimized.jpg

# Using ImageOptim (Mac)
# Drag and drop into ImageOptim app
```

#### Thumbnail Images
- **Dimensions**: 280x400px (16:9 aspect ratio equivalent)
- **Format**: JPG with optional PNG fallback
- **Quality**: 80% JPEG quality
- **File Size**: 10-30KB per image
- **Purpose**: Show/movie cover posters in carousels
- **Structure**: Display show poster artwork

**Optimization**:
```bash
convert poster.jpg -quality 80 -resize 280x400 thumbnail.jpg
```

#### Logo Images
- **Format**: PNG with transparency
- **Quality**: Lossless compression
- **File Size**: 10-100KB
- **Purpose**: Netflix logo, channel logos
- **Variations**: Light and dark versions recommended

#### Icon Images
- **Format**: SVG (preferred), PNG as fallback
- **Size**: 16x16px to 256x256px
- **Quality**: Optimized SVG (minimal paths)
- **File Size**: 1-5KB per icon
- **Purpose**: UI elements, buttons, indicators

**SVG Optimization**:
```xml
<!-- Before -->
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <circle cx="50" cy="50" r="45" fill="red"/>
</svg>

<!-- After (minified) -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="red"/>
</svg>
```

### Image Naming Conventions

```
[type]-[name]-[variant]-[size].format

Examples:
- hero-stranger-things-16-9-1920.jpg
- thumbnail-breaking-bad-280-400.jpg
- logo-netflix-light-100.png
- icon-play-24.svg
- icon-play-24@2x.svg (2x for retina)
```

### Adding Images to Project

#### Step 1: Prepare Image
1. Source high-quality image
2. Crop to required dimensions
3. Optimize file size
4. Export in proper format

#### Step 2: Name File
Use naming convention based on type and content

#### Step 3: Place in Folder
```
assets/images/[type]/[filename]
```

#### Step 4: Reference in HTML
```html
<!-- Hero section -->
<img src="assets/images/hero/show-name.jpg" alt="Show Name">

<!-- Thumbnail -->
<img src="assets/images/thumbnails/show-1.jpg" alt="Show Title">

<!-- Logo -->
<img src="assets/images/logos/netflix-logo.png" alt="Netflix">

<!-- Icon -->
<img src="assets/images/icons/play-icon.svg" alt="Play">
```

#### Step 5: Optimize in CSS
```css
.hero-image {
  background-image: url('assets/images/hero/show-name.jpg');
  background-size: cover;
  background-position: center;
}
```

---

## 🎬 Videos

### Directory Structure

```
assets/videos/
├── hero/          # Hero section background video
├── trailers/      # Show/movie trailers (30s-2min)
└── teasers/       # Short video clips (5-15s)
```

### Video Format Guidelines

#### Hero Video
- **Duration**: 10-30 seconds (loop)
- **Format**: MP4 (primary), WebM (optional)
- **Codec**: H.264 (video), AAC (audio)
- **Bitrate**: 5-8 Mbps (video), 128kbps (audio)
- **Resolution**: 1920x1080 minimum
- **Frame Rate**: 30fps or 60fps
- **Aspect Ratio**: 16:9
- **Audio**: Usually muted (autoplay requires mute)
- **File Size**: 5-50MB depending on duration

#### Trailer Videos
- **Duration**: 1-3 minutes
- **Format**: MP4 (primary), WebM (optional)
- **Bitrate**: 4-6 Mbps (video), 192kbps (audio)
- **Resolution**: 1280x720 or 1920x1080
- **Frame Rate**: 24fps or 30fps
- **File Size**: 20-100MB

#### Teaser Videos
- **Duration**: 5-15 seconds
- **Format**: MP4 (primary), WebM (optional)
- **Bitrate**: 3-4 Mbps (video), 128kbps (audio)
- **Resolution**: 1280x720
- **File Size**: 2-10MB

### Video Naming Conventions

```
[type]-[name]-[resolution]-[duration].format

Examples:
- hero-stranger-things-1080p-20s.mp4
- trailer-breaking-bad-1080p-2m.mp4
- teaser-squid-game-720p-10s.mp4
```

### Video Encoding

#### FFmpeg Commands

**For Hero Video**:
```bash
ffmpeg -i input.mov \
  -c:v libx264 \
  -preset slow \
  -crf 23 \
  -s 1920x1080 \
  -r 30 \
  -c:a aac \
  -b:a 128k \
  output.mp4
```

**For Trailer**:
```bash
ffmpeg -i input.mov \
  -c:v libx264 \
  -preset medium \
  -crf 22 \
  -s 1920x1080 \
  -r 24 \
  -c:a aac \
  -b:a 192k \
  output.mp4
```

**WebM Format (Optional)**:
```bash
ffmpeg -i input.mp4 \
  -c:v libvpx-vp9 \
  -b:v 4M \
  -c:a libopus \
  -b:a 128k \
  output.webm
```

### Adding Videos to Project

#### Step 1: Record/Source Video
- Record at high quality
- Use appropriate equipment
- Ensure good lighting and audio

#### Step 2: Edit Video
- Trim to required length
- Add color grading if needed
- Ensure consistent quality

#### Step 3: Encode Video
Use FFmpeg commands above to encode

#### Step 4: Name File
Use naming convention

#### Step 5: Place in Folder
```
assets/videos/[type]/[filename]
```

#### Step 6: Reference in HTML
```html
<!-- Hero Video -->
<video autoplay muted class="hero-video">
  <source src="assets/videos/hero/hero-video.mp4" type="video/mp4">
  <source src="assets/videos/hero/hero-video.webm" type="video/webm">
</video>

<!-- Trailer in Modal -->
<video controls>
  <source src="assets/videos/trailers/show-trailer.mp4" type="video/mp4">
  <source src="assets/videos/trailers/show-trailer.webm" type="video/webm">
</video>
```

---

## 📊 File Size Recommendations

### Target Sizes for Performance

| Asset Type | Maximum Size | Recommended |
|-----------|--------------|-------------|
| Hero Image | 2MB | 500KB |
| Thumbnail Image | 100KB | 20KB |
| Logo | 200KB | 50KB |
| Icon SVG | 10KB | 2KB |
| Hero Video | 50MB | 10-20MB |
| Trailer Video | 150MB | 50-80MB |
| Teaser Video | 20MB | 5-10MB |

### Optimization Checklist

- [ ] Images are compressed
- [ ] Videos are encoded efficiently
- [ ] Proper formats used
- [ ] File names are descriptive
- [ ] Organized in correct folders
- [ ] Alt text provided (images)
- [ ] Captions available (videos)
- [ ] Tested in multiple browsers

---

## 🎨 Color Requirements

### Image Processing

**For Carousel Thumbnails**:
- Ensure vibrant colors that pop
- Maintain color accuracy
- Avoid overly dark images
- Test contrast against dark background

**For Hero Section**:
- High contrast with text overlay
- Maintain image clarity
- Use complementary colors
- Test readability

### Video Color Space
- Use standard Rec. 709 color space
- Maintain proper color grading
- Test on various displays
- Ensure consistency

---

## 🔍 Quality Assurance

### Image QA

```
☑️ Visual Quality
  - No pixelation
  - Sharp details
  - Proper color
  - Good contrast

☑️ Technical Quality
  - Correct dimensions
  - Proper file format
  - Optimized size
  - No corruption

☑️ Display Quality
  - Looks good on all devices
  - Loads quickly
  - Renders properly
  - Accessible text
```

### Video QA

```
☑️ Visual Quality
  - Clear picture
  - Stable footage
  - Good lighting
  - Color grading

☑️ Audio Quality
  - Clear sound
  - No background noise
  - Proper levels
  - Smooth transitions

☑️ Technical Quality
  - Correct codec
  - Proper bitrate
  - Correct resolution
  - Right duration

☑️ Playback Quality
  - Plays on all browsers
  - No buffering issues
  - Autoplay works
  - Controls functional
```

---

## 🌐 External Asset Sources

### Image Resources
- [Unsplash](https://unsplash.com/) - Free high-quality images
- [Pexels](https://www.pexels.com/) - Free stock photos
- [Pixabay](https://pixabay.com/) - Free images and videos
- [Picsum Photos](https://picsum.photos/) - Dynamic image generation

### Video Resources
- [Pexels Videos](https://www.pexels.com/videos/) - Free videos
- [Pixabay Videos](https://pixabay.com/videos/) - Free stock video
- [Coverr](https://coverr.co/) - Free video clips

---

## 📱 Responsive Image Handling

### Picture Element (Modern Approach)

```html
<picture>
  <source media="(max-width: 480px)" 
          srcset="assets/images/mobile.jpg">
  <source media="(max-width: 768px)" 
          srcset="assets/images/tablet.jpg">
  <img src="assets/images/desktop.jpg" 
       alt="Description">
</picture>
```

### Responsive CSS

```css
@media (max-width: 768px) {
  .hero {
    background-image: url('assets/images/hero-tablet.jpg');
  }
}

@media (max-width: 480px) {
  .hero {
    background-image: url('assets/images/hero-mobile.jpg');
  }
}
```

---

## 🔒 Asset Security

### Considerations
- Don't store sensitive data in images
- Use HTTPS for remote assets
- Validate external sources
- Use subresource integrity (SRI) for CDN assets
- Protect copyright material

### SRI Example
```html
<img src="https://cdn.example.com/image.jpg" 
     integrity="sha384-..."
     alt="Image">
```

---

## 📈 Performance Monitoring

### Tools
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Metrics to Monitor
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- Time to Interactive (TTI)

---

## 🚀 Deployment Considerations

### CDN Integration
```html
<!-- Using CloudFront or similar CDN -->
<img src="https://cdn.example.com/assets/images/logo.png" 
     alt="Logo">
```

### Cache Headers
```
Cache-Control: public, max-age=31536000
Content-Encoding: gzip
```

---

## 📞 Troubleshooting

| Issue | Solution |
|-------|----------|
| Image not loading | Check path, verify file exists |
| Poor image quality | Increase JPEG quality or resolution |
| Slow video playback | Reduce bitrate or resolution |
| Video won't play | Check codec compatibility, try MP4 |
| Large file sizes | Compress using recommended tools |

---

**Last Updated**: 2024
**Version**: 1.0
