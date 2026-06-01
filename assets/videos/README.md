# Videos Directory

This directory contains all video files for the Netflix Clone application.

## 📁 Subdirectories

### hero/
**Hero section background videos**

- **Purpose**: Autoplaying background video in hero section
- **Duration**: 10-30 seconds (for looping)
- **Format**: MP4 (primary), WebM (optional alternative)
- **Resolution**: 1920x1080 minimum
- **Bitrate**: 5-8 Mbps (video), 128kbps (audio)
- **Frame Rate**: 30fps or 60fps
- **Audio**: Usually muted for autoplay
- **File Size**: 5-50MB depending on length
- **Aspect Ratio**: 16:9

#### Video Specifications

**H.264 MP4 (Recommended)**
```bash
ffmpeg -i input.mov \
  -c:v libx264 \
  -preset slow \
  -crf 23 \
  -s 1920x1080 \
  -r 30 \
  -c:a aac \
  -b:a 128k \
  hero-video.mp4
```

**VP9 WebM (Optional)**
```bash
ffmpeg -i input.mov \
  -c:v libvpx-vp9 \
  -b:v 5M \
  -c:a libopus \
  -b:a 128k \
  hero-video.webm
```

#### Files Structure
```
hero/
├── hero-video.mp4
├── hero-video.webm
└── README.md
```

#### Example Usage
```html
<video autoplay muted class="hero-video">
  <source src="assets/videos/hero/hero-video.mp4" type="video/mp4">
  <source src="assets/videos/hero/hero-video.webm" type="video/webm">
</video>
```

---

### trailers/
**Show and movie trailers**

- **Purpose**: Show/movie promotional trailers
- **Duration**: 1-3 minutes (60-180 seconds)
- **Format**: MP4 (primary), WebM (optional)
- **Resolution**: 1280x720 or 1920x1080
- **Bitrate**: 4-6 Mbps (video), 192kbps (audio)
- **Frame Rate**: 24fps or 30fps
- **File Size**: 20-100MB
- **Controls**: User controls enabled
- **Audio**: Full audio included

#### Video Specifications

**High Quality MP4**
```bash
ffmpeg -i input.mov \
  -c:v libx264 \
  -preset medium \
  -crf 22 \
  -s 1920x1080 \
  -r 24 \
  -c:a aac \
  -b:a 192k \
  trailer.mp4
```

#### Files Structure
```
trailers/
├── show-1-trailer.mp4
├── show-2-trailer.mp4
├── show-3-trailer.mp4
└── README.md
```

#### Example Usage
```html
<video controls width="100%">
  <source src="assets/videos/trailers/show-1-trailer.mp4" type="video/mp4">
  <track kind="captions" src="subtitles.vtt" label="English">
</video>
```

---

### teasers/
**Short video teaser clips**

- **Purpose**: Quick preview clips (5-15 seconds)
- **Duration**: 5-15 seconds
- **Format**: MP4 (primary), WebM (recommended for teasers)
- **Resolution**: 1280x720
- **Bitrate**: 3-4 Mbps (video), 128kbps (audio)
- **File Size**: 2-10MB
- **Use**: Social media, autoplay clips
- **Audio**: Often muted or compressed audio

#### Video Specifications

**Efficient WebM Format**
```bash
ffmpeg -i input.mp4 \
  -c:v libvpx-vp9 \
  -b:v 3M \
  -c:a libopus \
  -b:a 128k \
  teaser.webm
```

#### Files Structure
```
teasers/
├── teaser-1.webm
├── teaser-2.webm
├── teaser-1.mp4
└── README.md
```

#### Example Usage
```html
<video autoplay muted loop>
  <source src="assets/videos/teasers/teaser-1.webm" type="video/webm">
  <source src="assets/videos/teasers/teaser-1.mp4" type="video/mp4">
</video>
```

---

## 🎬 Video Naming Convention

```
[type]-[name]-[resolution]-[duration].format

Examples:
hero-video-1080p-20s.mp4
trailer-breaking-bad-1080p-2m.mp4
teaser-squid-game-720p-10s.webm
```

---

## 📊 Codec Comparison

| Codec | Size | Quality | Browser Support |
|-------|------|---------|-----------------|
| H.264 MP4 | Larger | Excellent | Excellent (↑96%) |
| VP9 WebM | Smaller | Excellent | Good (Chrome, Firefox) |
| VP8 WebM | Medium | Good | Good |
| Theora OGV | Larger | Fair | Limited |

---

## 🔧 Video Encoding Guide

### Prerequisites
```bash
# Install FFmpeg
# macOS
brew install ffmpeg

# Windows
choco install ffmpeg

# Linux
sudo apt-get install ffmpeg
```

### Step-by-Step Encoding

**1. Check Source Video**
```bash
ffprobe input.mov
```

**2. Encode for Hero**
```bash
ffmpeg -i input.mov \
  -c:v libx264 \
  -preset slow \
  -crf 23 \
  -s 1920x1080 \
  -r 30 \
  -c:a aac \
  -b:a 128k \
  -t 20 \
  hero-video.mp4
```

**3. Encode for Trailers**
```bash
ffmpeg -i input.mov \
  -c:v libx264 \
  -preset medium \
  -crf 22 \
  -s 1920x1080 \
  -r 24 \
  -c:a aac \
  -b:a 192k \
  trailer.mp4
```

**4. Encode WebM Alternative**
```bash
ffmpeg -i input.mp4 \
  -c:v libvpx-vp9 \
  -b:v 4M \
  -c:a libopus \
  -b:a 128k \
  output.webm
```

### FFmpeg Parameters Explained

| Parameter | Purpose |
|-----------|---------|
| `-c:v libx264` | H.264 video codec |
| `-preset slow` | Slow encoding (better quality) |
| `-crf 23` | Quality (0-51, lower is better) |
| `-s 1920x1080` | Video dimensions |
| `-r 30` | Frame rate (30fps) |
| `-c:a aac` | Audio codec |
| `-b:a 128k` | Audio bitrate |
| `-t 20` | Duration (20 seconds) |

---

## 📱 Browser Compatibility

### HTML5 Video Support
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser doesn't support HTML5 video.
</video>
```

### Codec Support Matrix

| Browser | MP4 (H.264) | WebM (VP9) | Ogg (Theora) |
|---------|-------------|-----------|--------------|
| Chrome | Yes | Yes | No |
| Firefox | No* | Yes | Yes |
| Safari | Yes | No | No |
| Edge | Yes | Yes* | No |
| Opera | Yes | Yes | Yes |

*Requires additional codecs

---

## ⚙️ Video Attributes

### Autoplay & Muted
```html
<!-- Hero section - autoplays when muted -->
<video autoplay muted loop class="hero-video">
  <source src="assets/videos/hero/hero.mp4" type="video/mp4">
</video>

<!-- Trailer - user controlled -->
<video controls width="100%">
  <source src="assets/videos/trailers/trailer.mp4" type="video/mp4">
</video>
```

### Common Attributes
- `autoplay` - Auto-start playing (requires `muted`)
- `muted` - Video starts without sound
- `loop` - Repeat video on end
- `controls` - Show play/pause controls
- `width/height` - Video dimensions
- `poster` - Thumbnail before playback

---

## 🎯 Performance Optimization

### File Size Tips
1. Use appropriate bitrate for content
2. Shorter duration = smaller file
3. WebM format saves 20-30% space
4. Progressive encoding for trailers
5. Compress audio

### Bitrate Guidelines
- **Hero**: 5-8 Mbps (short, looping)
- **Trailer**: 4-6 Mbps (playable quality)
- **Teaser**: 3-4 Mbps (preview only)

### Format Selection
- **MP4**: Maximum compatibility
- **WebM**: Smaller file size
- **Provide both**: Best practice

---

## 📹 Recording Tips

### Quality Settings
- Resolution: 1080p minimum
- Frame Rate: 24fps (cinema) or 30fps (standard)
- Bitrate: Higher is better (reduce during encoding)
- Audio: 48kHz, stereo

### Equipment
- Camera: DSLR, mirrorless, or smartphone
- Microphone: External for better audio
- Lighting: Professional or well-lit environment
- Tripod: For stable footage

---

## 🎬 Video Editing

### Recommended Software
- **Free**: DaVinci Resolve, HitFilm Express
- **Professional**: Adobe Premiere Pro, Final Cut Pro
- **Online**: WeVideo, Kapwing, Clipchamp

### Editing Checklist
- [ ] Trim unnecessary parts
- [ ] Color grading applied
- [ ] Audio levels normalized
- [ ] Transitions smooth
- [ ] Text/graphics added
- [ ] Exported at correct resolution

---

## ✅ Quality Checklist

Before deploying videos:

- [ ] Correct duration
- [ ] Proper resolution
- [ ] Good audio quality
- [ ] File size optimized
- [ ] Multiple formats provided (MP4 + WebM)
- [ ] Plays in all browsers
- [ ] No corruption
- [ ] Subtitles/captions added
- [ ] Poster image created
- [ ] Tested on different connections

---

## 🌐 External Video Sources

### Stock Video Resources
- [Pexels Videos](https://www.pexels.com/videos/) - Free
- [Pixabay Videos](https://pixabay.com/videos/) - Free
- [Coverr](https://coverr.co/) - Free clips
- [Envato Elements](https://elements.envato.com/) - Premium
- [Shutterstock](https://www.shutterstock.com/video) - Premium

### Conversion Tools
- [CloudConvert](https://cloudconvert.com/) - Online converter
- [VidCoder](https://github.com/RandomEngy/VidCoder) - Desktop app
- [HandBrake](https://handbrake.fr/) - Video transcoder

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Won't play | Check format support, try MP4 |
| Choppy playback | Reduce bitrate or resolution |
| Audio sync issues | Re-encode with proper audio codec |
| Large file size | Reduce bitrate or duration |
| Black screen | Check video codec compatibility |
| No audio | Verify audio stream exists |

---

## 📚 Resources

### Video Encoding
- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)
- [HandBrake Guides](https://handbrake.fr/docs/en/)
- [WebM/VP9 Guide](https://developers.google.com/media/vp9)

### HTML5 Video
- [MDN Video Guide](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [Can I Use - Video](https://caniuse.com/video)

---

**Last Updated**: 2024
**Version**: 1.0
